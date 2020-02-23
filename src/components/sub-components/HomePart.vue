<template>
  <div class="home-part">
    <article v-for="article in articles" :key="article.id">
      <div class="overlay">
        <header>
          <div class="avatar"></div>
          <div class="release-info">
            <div class="author">
              {{ article.author }}
            </div>
            <div class="date">本文于 {{ article.createtime }} 发布</div>
          </div>
          <div class="read-num">浏览量：{{ article.readNum }}</div>
        </header>
        <div class="title">{{ article.title }}</div>
        <button class="read-more-btn" @click="showDetailBtn(article.id, article.readNum, article.author)">
          <router-link to="/read-blog">阅读全文</router-link>
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePart',
  data() {
    return {
      articles: [],
      blogId: 0,
      num: {
        id: 0,
        readNum: 0
      }
    }
  },
  methods: {
    updateBlogId() {
      this.$store.commit('updateBlogIdState', {
        blogId: this.blogId
      })
    },
    showDetailBtn(id, readNum, author) {
      this.throttle(this.showDetail(id, readNum, author), 500);
    },
    showDetail(id, readNum, author) {
      this.blogId = id;
      this.updateBlogId();
      this.num.id = id;
      this.num.readNum = ++readNum;
      this.addReadNum(author);
    },
    getBlog() {
      axios.get('/api/blog/list').then(function(res) {
        if (res.data.isSuccess) {
          return this.articles = res.data.data;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
        return;
      })
    },
    addReadNum(author) {
      axios.post('/api/blog/num', this.num).then(function(res) {
        return setTimeout(() => {
        if (author === this.$store.state.author) {
          this.$store.commit('addReadNumState');
        }
      }, 1000);;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    throttle(fn, wait) {
      let _fn = fn, timer, flags = true;
      return function() {
        let args = arguments, self = this;
        if (flags) {
          _fn.apply(self, args);
          flags = false;
          return flags;
        }
        if (timer) return false;
        timer = setTimeout(function() {
          clearTimeout(timer);
          timer = null;
          _fn.apply(self, args);
        }, wait);
      }
    }
  },
  mounted() {
    this.getBlog();
  }
}
</script>

<style scoped>
.home-part {
  flex: 1;
  margin: 0 10px;
  background-color: transparent;
  border-radius: 5px;
  margin-bottom: 10px;
}

.home-part article {
  height: 28vw;
  border-radius: 5px;
  color: white;
  background-image: url(../../assets/images/blog-bg.jpg);
  background-size: cover;
  margin-bottom: 10px;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(42, 42, 42, 0.60);
  border-radius: 5px;
  padding: 10px;
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
  color: #dfe6e9;
}

.title {
  margin-top: calc(12vw - 70px);
  width: 100%;
  line-height: 24px;
  text-align: center;
  font-size: 24px;
  color: #dfe6e9;
  margin-bottom: 6vw;
}

.read-more-btn {
  padding: 8px 12px;
  display: block;
  background-color: transparent;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
}

.read-more-btn:hover {
  border-color: #a29bfe;
}

.read-more-btn:hover a {
  color: #a29bfe;
}

.read-more-btn a {
  text-decoration: none;
  color: #dfe6e9;
  font-size: 12px;
}

.read-num {
  padding-top: 10px;
  padding-right: 10px;
  color: #dfe6e9;
}

@media (max-width: 468px) {
  .home-part {
    flex: unset;
    width: 100vw;
    margin: 0 10px;
    background-color: transparent;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .home-part article {
    height: 260px;
  }

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

  .title {
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .read-more-btn a {
    text-decoration: none;
    font-size: 12px;
  }

  .read-num {
    padding-top: 4px;
    padding-right: 4px;
    font-size: 12px;
  }

  .read-more-btn {
    padding: 4px 4px;
    border-radius: 4px;
    font-size: 12px;
    margin: 0 auto;
  }
}
</style>
