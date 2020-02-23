<template>
  <div class="user-center">
    <div class="overlay">
      <el-divider content-position="left">个人中心</el-divider>
      <div class="user-content">
        <nav id="nav-menu">
          <div class="list" @click="showWork()">
            <div class="list-content">资料修改</div>
            <div class="list-line" :style="activeInfo"></div>
          </div>
          <div class="list" @click="showInfo()">
            <div class="list-content">博客后台</div>
            <div class="list-line" :style="activeCampus"></div>
          </div>
          <div class="list" v-if="showBack">
            <div class="list-content" @click="toBack()">后台管理</div>
            <div class="list-line"></div>
          </div>
        </nav>
        <section class="alterInfo" v-if="showSection">
          <div class="authorAlter">
            <span>昵&nbsp;&nbsp;&nbsp;&nbsp;称：</span>
            <el-input
              :placeholder="user.author" :disabled="authorDisabled"
              suffix-icon="el-icon-user-solid"
              v-model="user.author" maxlength="25">
            </el-input> 
            <button @click="alterAuthor()">{{ authorBtn }}</button>
            <span class="remind">温馨提示：昵称不能超过25个字</span>
          </div>
          <div class="bulletinAlter">
            <span>公告栏：</span>
            <el-input
              :placeholder="user.bulletin" :disabled="bulletinDisabled"
              suffix-icon="el-icon-data-board"
              v-model="user.bulletin" maxlength="45">
            </el-input> 
            <button @click="alterBulletin()">{{ bulletinBtn }}</button>
            <span class="remind">温馨提示：留言版不能超过45个字</span>
          </div>
          <div class="phoneAlter">
            <span>手机号：</span>
            <el-input
              :placeholder="user.phoneNum" :disabled="phoneNumDisabled"
              suffix-icon="el-icon-phone"
              v-model="user.phoneNum" maxlength="11">
            </el-input> 
            <span class="remind">温馨提示：手机号不支持修改</span>
          </div>
          <div class="createtimeAlter">
            <span>注册日：</span>
            <el-input
              :placeholder="user.createtime" :disabled="createtimeDisabled"
              suffix-icon="el-icon-date"
              v-model="user.createtime">
            </el-input> 
            <span class="remind">温馨提示：注册日期不支持修改</span>
          </div>
          <div class="avatarDisabled">
            暂不支持用户头像上传，请留意后续版本
          </div>
        </section>
        <section class="blogBack" v-else>
          <el-table
            :data="tableData"
            style="width: 100%"
            height="400">
            <el-table-column
              prop="createtime"
              label="日期"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              prop="readNum"
              label="阅读量"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              align="center">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              align="center"
              width="100">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100"
              align="center">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="new-blog">
            <router-link to="/new-blog">新建博客</router-link>
          </div>
        </section>
      </div>
    </div>
    <el-dialog
      title="提醒"
      :visible.sync="dialogVisible"
      width="30%"
      top="40vh"
      :before-close="handleClose">
      <span>删除之后无法恢复，确定要删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SumContainer from './SumContainer'
import axios from 'axios'
export default {
  name: 'UserCenter',
  components: {
    SumContainer
  },
  data() {
    return {
      showBack: false,
      activeIndex: '/home-part',
      isRouter: true,
      showSection: true,
      activeInfo: {
        width: '100%'
      },
      activeCampus: {
        width: ''
      },
      user: {
        id: 0,
        author: '',
        phoneNum: 0,
        avatar: '',
        bulletin: '',
        createtime: '',
        role: 0
      },
      authorBtn: '修改',
      phoneNumBtn: '修改',
      bulletinBtn: '修改',
      authorDisabled: true,
      phoneNumDisabled: true,
      bulletinDisabled: true,
      createtimeDisabled: true,
      tableData: [],
      delBlog: {},
      dialogVisible: false
    }
  },
  methods: {
    confirmDelete() {
      this.dialogVisible = false;
      if (this.delBlog.state === '删除') {
        return this.$notify({
          title: '操作无效',
          type: 'warning',
          duration: 1800,
          showClose: false
        })
      }
      axios.post('/api/blog/del', this.delBlog).then(function(res) {
        if (res.data.isSuccess) {
          this.$notify({
            title: '删除成功',
            type: 'success',
            duration: 1800,
            showClose: false
          });
          return this.getUserBlog();
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
      },
    alterSuccess() {
      this.$notify({
        title: '修改成功',
        type: 'success',
        duration: 1800,
        showClose: false
      })
    },
    showWork() {
      if (!this.showSection) {
        this.showSection = !this.showSection;
        this.activeInfo.width = '100%';
        this.activeCampus.width = '';
        return;
      }
      return;
    },
    showInfo() {
      this.getUserBlog();
      if (this.showSection) {
        this.showSection = !this.showSection;
        this.activeInfo.width = '';
        this.activeCampus.width = '100%';
        return;
      }
      return;
    },
    alterAuthor() {
      if (this.authorBtn === '修改') {
        this.authorBtn = '确定';
        this.authorDisabled = false;
        return;
      } 
      if (this.authorBtn === '确定') {
        this.authorPost();
        this.authorBtn = '修改';
        this.authorDisabled = true;
        return;
      }
      return;
    },
    alterBulletin() {
      if (this.bulletinBtn === '修改') {
        this.bulletinBtn = '确定';
        this.bulletinDisabled = false;
        return;
      } 
      if (this.bulletinBtn === '确定') {
        this.bulletinPost();
        this.bulletinBtn = '修改';
        this.bulletinDisabled = true;
        return;
      }
      return;
    },
    bulletinPost() {
      axios.post('/api/user/bulletin', this.user).then(function(res) {
        if (res.data.isSuccess) {
          this.alterSuccess();
          return this.updateBulletin();
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    updateBulletin() {
      this.$store.commit('updateBulletinState', {
        bulletin: this.user.bulletin
      })
    },
    authorPost() {
      axios.post('/api/user/author', this.user).then(function(res) {
        if (res.data.isSuccess) {
          this.authorBlogPost();
          this.alterSuccess();
          return this.updateAuthor();
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    authorBlogPost() {
      axios.post('/api/blog/author', this.user).then(function(res) {
        if (res.data.isSuccess) return;
      }).catch(err => {
        console.log(err);
      })
    },
    updateAuthor() {
      this.$store.commit('updateAuthorState', {
        author: this.user.author
      })
    },
    getUserBlog() {
      if (this.user.phoneNum === 0) return;
      axios.get('/api/blog/list?phonenum=' + this.user.phoneNum).then(function(res) {
        if (res.data.isSuccess) {
          return this.tableData = res.data.data;
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    handleClick(row) {
      this.dialogVisible = true
      this.delBlog = row;
    },
    toBack() {
      return this.$router.push('/blog-back');
    },
    comfirmRole() {
      if (this.$store.state.role === '管理员') {
        return this.showBack = true;
      }
      return;
    }
  },
  mounted() {
    this.user.author = this.$store.state.author;
    this.user.phoneNum = this.$store.state.phoneNum;
    this.user.bulletin = this.$store.state.bulletin;
    this.user.id = this.$store.state.id;
    this.user.createtime = this.$store.state.createtime;
    this.user.role = this.$store.state.role;
    this.comfirmRole();
  }
}
</script>

<style scoped>
.user-center {
  flex: 1;
  margin: 0px 10px 10px 10px;
  border-radius: 5px;
  background-image: url(../../assets/images/data-bg.jpg);
  background-size: cover;
  background-position-y: 24%;
}

.overlay {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: rgba(42, 42, 42, 0.60);
}

h2 {
  text-align: center;
}

.user-content {
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
}

#nav-menu {
  width: 100%;
  height: 16%;
  padding: 20px 0 10px 20px;
  display: flex;
}

#nav-menu .list {
  font-size: 18px;
  color: #dfe6e9;
  font-weight: 600;
  padding-right: 16px;
  cursor: pointer;
}

.list .list-line {
  height: 2px;
  width: 0;
  background-color: #71b3dd;
  margin: 0 auto;
  transition-duration: .4s;
}

.list .list-content:hover +div {
  width: 100%;
}

section {
  height: 84%;
}

.el-input {
  display: inline-block;
  width: 200px;
}

.alterInfo div {
  margin-top: 10px;
}

.phoneAlter {
  padding-top: 10px;
  padding-left: 20px;
  color: #dfe6e9;
}

.createtimeAlter {
  padding-top: 10px;
  padding-left: 20px;
  color: #dfe6e9;
}

.authorAlter {
  padding-top: 10px;
  padding-left: 20px;
  color: #dfe6e9;
}

.authorAlter button {
  display: inline-block;
  height: 40px;
  width: 50px;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  background-color: transparent;
  color: #dfe6e9;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}

.authorAlter button:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.bulletinAlter {
  padding-top: 10px;
  padding-left: 20px;
  color: #dfe6e9;
}

.bulletinAlter button {
  display: inline-block;
  height: 40px;
  width: 50px;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  background-color: transparent;
  color: #dfe6e9;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}

.bulletinAlter button:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.avatarDisabled {
  padding-top: 10px;
  padding-left: 20px;
  color: #dfe6e9;
  height: 50px;
}

.new-blog a {
  height: 40px;
  width: 100px;
  margin: 10px auto;
  display: block;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #dfe6e9;
  color: #dfe6e9;
}

.new-blog a:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.remind {
  margin-left: 6px;
  font-size: 12px;
}

@media (max-width: 468px) {
  .user-center {
    flex: unset;
    width: calc(100vw - 20px);
  }

  #nav-menu .list {
    font-size: 16px;
  }

  .el-input {
    display: inline-block;
    width: 180px;
  }

  .alterInfo span {
    font-size: 14px;
  }

  .alterInfo .remind {
    display: block;
    margin-left: 0px;
    margin-top: 6px;
  }

  .bulletinAlter button {
    height: 30px;
    width: 40px;
    font-size: 14px;
  }

  .authorAlter button {
    height: 30px;
    width: 40px;
    font-size: 14px;
  }

  .blog-back {
    width: 100%;
  }

  .new-blog a {
    height: 36px;
    width: 94px;
    font-size: 14px;
    line-height: 40px;
  }
}
</style>