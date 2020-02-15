<template>
  <div class="personal-card">
    <div class="card-bg"></div>
    <div class="card-content">
      <h2 class="nick-name">{{ nickName }}</h2>
      <div class="data">
        <div class="data-piece">
          <div class="num">{{ blogNum }}</div>
          <div class="description">博客</div>
        </div>
        <div class="data-piece">
          <div class="num">{{ articleNum }}</div>
          <div class="description">随笔</div>
        </div>
        <div class="data-piece">
          <div class="num">{{ readNum }}</div>
          <div class="description">阅读</div>
        </div>
      </div>
      <ul class="social-links">
        <li><a href="#"><i class="fab fa-weixin"></i></a></li>
        <li><a href="#"><i class="fab fa-weibo"></i></a></li>
        <li><a href="#"><i class="fab fa-github"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="user-avatar"></div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCard',
  data() {
    return {
      nickName: '彩笔小浪',
      blogNum: 108,
      articleNum: 236,
      readNum: 3376
    }
  }
}
</script>

<style scoped>
.personal-card {
  width: 260px;
  height: 320px;
  border-radius: 5px;
  position: relative;
  background-color: white;
  margin-left: 10px;
}

.card-bg {
  width: 100%;
  height: 110px;
  background-image: url(../assets/images/img4.png);
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.nick-name {
  width: 100%;
  text-align: center;
  font-size: 16px;
  margin-top: 60px;
  margin-bottom: 10px;
  color: #494949;
}

.data {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.data-piece {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #494949;
}

.num {
  color: rgb(77, 144, 183);
  font-weight: 600;
}

.social-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 42px;
  margin-top: 10px;
}

.social-links li {
  list-style: none;
}

.social-links li a {
  color: #2e2e2e;
  text-decoration: none;
}

.social-links li a i {
  font-size: 18px;
}

.user-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(../assets/images/avatar.png);
  background-size: cover;
  position: absolute;
  top: 75px;
  left: 95px;
}
</style>