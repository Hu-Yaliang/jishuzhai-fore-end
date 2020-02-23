<template>
  <div class="page-header">
    <div class="overlay">
     <div class="logo">技术宅后花园</div>
    <nav>
      <div class="router-list">
        <router-link to="/home-part">主页</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/sort-part">归档</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list" v-if="userShow">
        <router-link to="/user-article">个人</router-link>
        <div class="router-line"></div>
      </div>
      <div class="router-list">
        <router-link to="/about-me">关于</router-link>
        <div class="router-line"></div>
      </div>
      <div class="search"></div>
      <div class="router-list login-btn">
        <router-link to="/user/login">登录</router-link>
        <div class="router-line"></div>
      </div>
      <div class="header-avatar">
        <el-dropdown @command="handleCommand">
          <div class="avatar el-dropdown-link"></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      </div>
    </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageHeader',
  data() {
    return {
      userShow: false
    }
  },
  methods: {
    initAll() {
      this.$store.commit('updateIsLoginState');
      this.$store.commit('initAuthorState');
      this.$store.commit('initBlogNumState');
      this.$store.commit('initVisitNumState');
      this.$store.commit('initReadNumState');
      this.$store.commit('initBulletinState');
      this.$store.commit('initRoleState');
      this.$store.commit('initTimeState');
    },
    isLogin() {
      const loginBtn = document.querySelector('.login-btn');
      const headerAvatar = document.querySelector('.header-avatar');
      if (this.$store.state.isLogin) {
        this.userShow = true;
        headerAvatar.classList.add('is-login-avatar');
        return loginBtn.classList.add('is-login');
      } else {
        this.userShow = false;
        headerAvatar.classList.remove('is-login-avatar');
        return loginBtn.classList.remove('is-login');
      }
    },
    handleCommand(command) {
      if (command === 'logOut') {
        this.$router.push('/');
        this.initAll();
        return this.isLogin();
      } 
      if (command === 'userCenter') {
        return this.$router.push('/user-center');
      }
    }
  },
  mounted() {
    this.isLogin();
  }
}
</script>

<style scoped>
.page-header {
  width: 100vw;
  min-width: 1180px;
  height: 150px;
  background-image: url(../../assets/images/home-header-bg.jpg);
  background-size: cover;
  background-position-y: 62%;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 00, 0.3);
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;
  margin-right: 40px;
  color: aliceblue;
}

nav {
  flex: 1;
  display: flex;
  align-items: center;
}

.router-list {
  height: 60px;
  padding: 0 10px;
  margin-right: 30px;
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
  background-color: #f1c40f;
  margin: 0 auto;
  transition-duration: .4s;
}

.router-list a:hover +div {
  width: 100%;
}

.router-list a:hover {
  color: #f1c40f;
}

.router-link-exact-active {
  color: #f1c40f !important;
}

.search {
  flex: 1;
}

.header-avatar {
  width: 60px;
  height: 60px;
  background-color: aliceblue;
  border-radius: 50%;
  margin-right: 40px;
  display: none;
  cursor: pointer;
}

.header-avatar .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(../../assets/images/avatar.png);
  background-size: cover;
  cursor: pointer;
}

.is-login {
  display: none;
}

.is-login-avatar {
  display: block;
}

@media (max-width: 468px) {
  .page-header {
    min-width: 100vw;
    height: 80px;
  }

  .logo {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    width: 48px;
  }

  .router-list {
    height: 40px;
    padding: 0 10px;
    margin-right: 0px;
  }

  .router-list a {
    font-size: 12px;
    margin-top: 12px;
  }

  .header-avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    display: none;
  }

  .header-avatar .avatar {
    width: 40px;
    height: 40px;
  }

  .is-login {
    display: none;
  }

  .is-login-avatar {
    display: block;
  }
}
</style>