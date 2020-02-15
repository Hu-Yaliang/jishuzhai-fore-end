<template>
  <div class="page-header">
    <div class="logo">技术宅后花园</div>
    <nav>
      <div class="router-list">
        <router-link to="/">主页</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/blog-part">博客</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/sort-part">归档</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/article-part">随笔</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/about-me">关于</router-link>
        <div class="router-line"></div>
      </div>
    </nav>
    <div class="blank"></div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.page-header {
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  background-image: url(../assets/images/header-image.png);
  background-size: cover;
  background-position-y: 30%;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;
  margin-right: 40px;
  color: aliceblue;
}

nav {
  display: flex;
  align-items: center;
}

.router-list {
  height: 60px;
  padding: 0 10px;
  margin-right: 20px;
}

.router-list a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: aliceblue;
  margin-top: 20px;
  transition-duration: .4s;
}

.router-list .router-line {
  height: 2px;
  width: 0;
  background-color: #ff6700;
  margin: 0 auto;
  transition-duration: .4s;
}

.router-list a:hover +div {
  width: 100%;
}

.router-list a:hover {
  color: #ff6700;
}

.router-link-exact-active {
  color: #ff6700 !important;
}

.blank {
  flex: 1;
}
</style>