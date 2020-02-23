<template>
  <div class="new-blog">
    <div class="overlay">
      <header>
        <router-link to="/user-center">返回</router-link>
        <div class="header-title">新建博客</div>
      </header>
      <div class="title">
        <span>标题：</span>
        <el-input
          placeholder="请输入文章标题"
          suffix-icon="el-icon-chat-line-square"
          v-model="blog.title">
        </el-input> 
        <span class="remind">温馨提示：图片大小请勿超过600kb</span>
      </div>
      <sum-container></sum-container>
      <button @click="newBlogPost()">提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SumContainer from './SumContainer'
export default {
  name: 'NewBlog',
  components: {
    SumContainer
  },
  data() {
    return {
      blog: {
        author: '',
        title: '',
        content: '',
        phoneNum: 0
      },
      blogNum: 0,
      userBlog: {
        id: 0,
        blogNum: 0
      }
    }
  },
  methods: {
    newBlogPost() {
      this.blog.content = $('#summernote').summernote('code');
      $('#summernote').summernote('code', '');
      if (!this.blog.title || !this.blog.content || this.blog.content === '<p><br></p>') {
        return this.postWarn();
      }
      this.blog.author = this.$store.state.author;
      this.blog.phoneNum = this.$store.state.phoneNum;
      axios.post('/api/blog/new', this.blog).then(function(res) {
        if (res.data.isSuccess) {
          this.blog.title = '';
          this.getAuthorBlog();
          return this.postSuccess();
        }
        return this.postFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    postSuccess() {
      this.$notify({
        title: '提交成功',
        type: 'success',
        duration: 1800,
        showClose: false
      });
    },
    postFail() {
      this.$notify({
        title: '提交失败',
        type: 'error',
        duration: 1800,
        showClose: false
      });
    },
    postWarn() {
      this.$notify({
        title: '提交失败',
        message: '请确保标题和内容已输入',
        type: 'warning',
        duration: 1800,
        showClose: false
      })
    },
    getAuthorBlog() {
      axios.get('/api/blog/list?phonenum=' + this.blog.phoneNum).then(function(res) {
        if (res.data.isSuccess) {
          this.blogNum = res.data.data.length;
          this.updateBlogNum();
          this.blogNumPost();
          return;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    updateBlogNum() {
      this.$store.commit('updateBlogNumState', {
        blogNum: this.blogNum
      })
    },
    blogNumPost() {
      this.userBlog.id = this.$store.state.id;
      this.userBlog.blogNum = this.blogNum;
      axios.post('/api/user/blog', this.userBlog).then(function(res) {
        return;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.new-blog {
  flex: 1;
  margin: 0px 10px;
  border-radius: 5px;
  background-image: url(~@/assets/images/user-center-bg.jpg);
  background-size: cover;
  height: calc(100vh - 170px);
}

.overlay {
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(42, 42, 42, 0.60);
}

header {
  display: flex;
}

.header-title {
  text-align: center;
  line-height: 60px;
  margin-left: calc(50% - 92px);
  color: #a29bfe;
}

.new-blog a {
  height: 40px;
  width: 50px;
  margin: 10px 0 10px 10px;
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

.title {
  padding: 10px 20px;
  color: #dfe6e9;
}

.el-input {
  display: inline-block;
  width: 300px;
}

.new-blog button {
  display: block;
  height: 40px;
  width: 50px;
  margin: 20px auto;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  background-color: transparent;
  color: #dfe6e9;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}

.new-blog button:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.remind {
  margin-left: 6px;
  font-size: 12px;
}

@media (max-width: 468px) {
  .new-blog  {
    flex: unset;
    width: calc(100vw - 20px);
  }

  .new-blog a {
    height: 30px;
    width: 40px;
    line-height: 30px;
    font-size: 14px;
  }

  .remind {
    margin-left: 0;
  }
}
</style>