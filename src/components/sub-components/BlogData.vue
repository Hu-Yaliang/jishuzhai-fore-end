<template>
  <div class="blog-data">
    <div class="overlay">
      <div class="data-pieces">
        <div class="data-piece">
          博客总数：{{ blogNum }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogData',
  data() {
    return {
      blogNum: 0
    }
  },
  methods: {
    getBlogdata() {
      axios.get('/api/blog/data').then(function(res) {
        if (res.data.isSuccess) {
          return this.blogNum = res.data.data.length;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getBlogdata();
  }
}
</script>

<style scoped>
.blog-data {
  height: calc(100vh - 150px);
  width: calc(100vw - 200px);
  margin-left: 200px;
  background-image: url(../../assets/images/data-bg.jpg);
  background-size: cover;
}

.overlay {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  background-color: rgba(42, 42, 42, 0.60);
  display: flex;
  align-items: center;
  justify-content: center;
}

.data-pieces {
  color: aliceblue;
  font-size: 30px;
}

@media (max-width: 468px) {
  .blog-data {
    height: calc(100vh - 130px);
    width: 100vw;
    margin-left: 0;
  }
}
</style>