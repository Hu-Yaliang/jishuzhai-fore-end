<template>
  <div class="personal-card">
    <div class="card-bg"></div>
    <div class="card-content">
      <h2 class="nick-name" @click="handleClick">{{ this.$store.state.author }}</h2>
      <div class="data">
        <div class="data-piece">
          <div class="num">{{ this.$store.state.blogNum }}</div>
          <div class="description">博客</div>
        </div>
        <div class="data-piece">
          <div class="num">{{ this.$store.state.readNum }}</div>
          <div class="description">浏览</div>
        </div>
        <div class="data-piece">
          <div class="num">{{ time }}天</div>
          <div class="description">宅龄</div>
        </div>
      </div>
      <ul class="social-links">
        <li><a href="https://wx.qq.com/"><i class="fab fa-weixin"></i></a></li>
        <li><a href="https://weibo.com/login.php"><i class="fab fa-weibo"></i></a></li>
        <li><a href="https://github.com/"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/uas/login?fromSignIn=true&amp;trk=cold_join_sign_in"><i class="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="info-avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCard',
  data() {
    return {
      time: 0
    }
  },
  methods: {
    handleClick() {
      if (this.$store.state.author === '登录') {
        return this.$router.push('/user/login');
      } else {
        return this.$router.push('/user-center');
      }
    },
    registerAge() {
      const date = Date.now();
      if (this.$store.state.id === 0) {
        return;
      }
      this.time = parseInt((date - this.$store.state.time)/(1000 * 60 * 60 * 24)) + 1;
    }
  },
  mounted() {
    this.registerAge();
    console.log(this.avatar);
  }
}
</script>

<style scoped>
.personal-card {
  min-width: 260px;
  height: 320px;
  border-radius: 5px;
  position: relative;
  background-color: white;
  margin-left: 10px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.3);
}

.card-bg {
  width: 100%;
  height: 110px;
  background-image: url(../../assets/images/img4.png);
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

.nick-name:hover {
  color: rgb(77, 144, 183);
  cursor: pointer;
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

.social-links li a i:hover {
  color: #71b3dd;
}

.info-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 75px;
  left: 95px;
  background-image: url(../../assets/images/avatar.png);
  background-size: cover;
}

@media (max-width: 468px) {
  .personal-card {
    display: none;
  }
}
</style>