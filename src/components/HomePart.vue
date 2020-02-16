<template>
  <div class="home-part">
    <article v-for="article in articles" :key="article.id">
      <div>{{ article.title }}</div>
      <button class="read-more-btn" @click="showDetail(article.id)">
        <router-link to="/read-blog">阅读全文</router-link>
      </button>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePart',
  data() {
    return {
      articles: []
    }
  },
  methods: {
    showDetail(id) {
      console.log(id);
    },
    getBlog() {
      axios.get('/api/blog/list').then(function(res) {
        if (res.data.isSuccess) {
          this.articles = res.data.data;
        }
      }.bind(this)).catch(err => {
        console.log(err);
        return;
      })
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
  background-color: transparent;
  border-radius: 5px;
}

.home-part article {
  height: 400px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 400px;
  font-size: 24px;
  color: white;
  position: relative;
  background-image: url(../assets/images/img1.png);
  background-size: cover;
}

article div {
  background-color: rgba(42, 42, 42, 0.69);
  border-radius: 5px;
}

.read-more-btn {
  padding: 10px 16px;
  position: absolute;
  display: block;
  background-color: #ff434f;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  top: 250px;
  right: calc(50% - 44px);
  font-weight: 600;
}

.read-more-btn a {
  text-decoration: none;
  color: #e7e9ec;
  font-size: 14px;
}
</style>
