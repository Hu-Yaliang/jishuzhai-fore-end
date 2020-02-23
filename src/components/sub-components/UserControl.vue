<template>
  <div class="user-control">
    <div class="overlay">
      <div class="user-search">
        <span>搜索用户：</span>
        <el-input
          placeholder="请输入用户手机号"
          suffix-icon="el-icon-phone"
          v-model="user.phoneNum">
        </el-input> 
        <button @click="searchUser">搜索</button>
      </div>
      <div class="table-content">
        <el-table
            :data="tableData"
            max-height="500"
           >
            <el-table-column
            prop="id"
            label="id"
            width="60"
            align="center">
            </el-table-column>
            <el-table-column
              prop="phoneNum"
              label="手机号"
              width="130"
              align="center">
            </el-table-column>
            <el-table-column 
              prop="author"
              label="昵称"
              width="200"
              align="center">
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="注册日期"
              width="150"
              align="center">
            </el-table-column>
            <el-table-column
              prop="visitNum"
              label="访问量"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="role"
              label="权限"
              align="center">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              align="center">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="200"
              align="center">
              <template slot-scope="scope">
                <el-button @click="deleteUser(scope.row)" type="text" size="small">注销</el-button>
                <el-button @click="recoverUser(scope.row)" type="text" size="small">恢复</el-button>
                <el-button @click="upRole(scope.row)" type="text" size="small">提权</el-button>
                <el-button @click="downRole(scope.row)" type="text" size="small">降权</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserControl',
  data() {
    return {
      user: {
        phoneNum:''
      },
      tableData: []
    }
  },
  methods: {
    searchUser() {
      axios.get('/api/user/list?phonenum=' + this.user.phoneNum).then(function(res) {
        if (res.data.isSuccess) {
          this.tableData = res.data.data;
          return;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    getUser() {
      axios.get('/api/user/list').then(function(res) {
        if (res.data.isSuccess) {
          this.tableData = res.data.data;
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    deleteUser(row) {
      if (row.state === '注销') return this.handleWarn();
      axios.post('/api/user/delete', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getUser();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    recoverUser(row) {
      if (row.state === '正常') return this.handleWarn();
      axios.post('/api/user/recover', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getUser();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    upRole(row) {
      if (row.role === '管理员') return this.handleWarn();
      axios.post('/api/user/role-up', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getUser();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    downRole(row) {
      if (row.role === '普通用户') return this.handleWarn();
      axios.post('/api/user/role-down', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getUser();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    handleSucc() {
      this.$notify({
        title: '操作成功',
        type: 'success',
        duration: 1800,
        showClose: false
      })
    },
    handleFail() {
      this.$notify({
        title: '操作失败',
        type: 'error',
        duration: 1800,
        showClose: false
      })
    },
    handleWarn() {
      this.$notify({
        title: '操作无效',
        type: 'warning',
        duration: 1800,
        showClose: false
      })
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>
.user-control {
  height: calc(100vh - 150px);
  width: calc(100vw - 200px);
  margin-left: 200px;
  background-image: url(../../assets/images/back-bg.jpg);
  background-size: cover;
}

.overlay {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  background-color: rgba(42, 42, 42, 0.60);
}

.el-input {
  width: 300px;
}

.user-search {
  color: #dfe6e9;
  margin-left: 20px;
  padding-top: 20px;
}

.user-search button {
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

.user-search button:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.table-content {
  padding: 20px;
}

.el-table {
  border-radius: 5px;
}

@media (max-width: 468px) {
  .user-control {
    height: calc(100vh - 130px);
    width: 100vw;
    margin-left: 0;
  }

  .el-input {
    width: 180px;
    margin-top: 10px;
  }

  .user-search {
    margin-left: 10px;
    padding-top: 10px;
  }

  .user-search button {
    display: inline-block;
    height: 30px;
    width: 40px;
    font-size: 14px;
  }

  .table-content {
    padding: 10px;
  }
}
</style>