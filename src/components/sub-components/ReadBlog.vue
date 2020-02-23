<template>
  <div class="read-blog">
    <div class="overlay">
      <header>
        <div class="avatar"></div>
        <div class="release-info">
          <div class="author">{{ article.author }}</div>
          <div class="date">本文于 {{ article.createtime }} 发布</div>
        </div>
        <div class="read-num">
          <div>
           浏览量：{{ article.readNum }} 
          </div>
        </div>
      </header>
      <div class="content" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReadBlog',
  data() {
    return {
      id: 0,
      article: {},
      user: {
        readNum: 0,
        author: ''
      }
    }
  },
  methods: {
    detailGet() {
      this.id = this.$store.state.blogId;
      axios.get('/api/blog/detail?id=' + this.id).then(function(res) {
        if (res.data.isSuccess) {
          this.article = res.data.data;
          this.userReadNumGet();
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    userReadNumGet() {
      axios.post('/api/user/read-get', this.article).then(function(res) {
        if (res.data.isSuccess) {
          this.user.readNum = res.data.data.readNum;
          this.user.readNum++;
          this.readNumPost();
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    readNumPost() {
      this.user.author = this.article.author;
      axios.post('/api/user/read', this.user).then(function(res) {
        if (res.data.isSuccess) {
          return;
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.detailGet();
  }
}
</script>

<style scoped>
.read-blog {
  flex: 1;
  margin: 0 10px;
  background-color: transparent;
  border-radius: 5px;
  margin-bottom: 10px;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(42, 42, 42, 0.60);
  border-radius: 5px;
  padding: 10px;
  min-height: 320px;
}

header {
  display: flex;
  height: 60px;
  border-radius: 5px;
}

header .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(../../assets/images/avatar.jpg);
  background-size: cover;
}

.release-info {
  flex: 1;
  height: 60px;
}

.author, .date {
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #dff9fb;
}

.content {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
}

.read-num {
  padding-top: 10px;
  padding-right: 10px;
  color: #dfe6e9;
}

@media (max-width: 468px) {
  header {
    height: 40px;
  }

  header .avatar {
    width: 40px;
    height: 40px;
  }

  .release-info {
    flex: 1;
    height: 40px;
  }

  .author, .date {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .read-num {
    padding-top: 4px;
    padding-right: 4px;
    font-size: 12px;
  }
}
</style>