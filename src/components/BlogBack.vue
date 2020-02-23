<template>
  <div class="blog-back">
    <header>
      <div class="overlay">
        <div class="logo">技术宅后花园 —— 后台</div>
        <div class="header-avatar">
          <el-dropdown @command="handleCommand">
            <div class="avatar el-dropdown-link"></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
              <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
    <el-col>
      <el-menu class="el-menu-vertical-demo" default-active="/user-control" :router="isRouter">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user-control">用户操作</el-menu-item>
            <el-menu-item index="/user-data">统计数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>博客管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="blog-control">博客操作</el-menu-item>
            <el-menu-item index="blog-data">统计数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <nav id="nav-menu">
      <div class="list">
        <router-link class="list-content" to="/user-control">用户操作</router-link>
        <div class="list-line"></div>
      </div>
      <div class="list">
        <router-link class="list-content" to="/user-data">用户数据</router-link>
        <div class="list-line"></div>
      </div>
      <div class="list">
        <router-link class="list-content" to="/blog-control">博客操作</router-link>
        <div class="list-line"></div>
      </div>
      <div class="list">
        <router-link class="list-content" to="/blog-data">博客数据</router-link>
        <div class="list-line"></div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BlogBack',
  data() {
    return {
      isRouter: true
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logOut') {
        this.initAll();
        this.$router.push('/home-part');
      } 
      if (command === 'userCenter') {
        return this.$router.push('/user-center');
      }
    },
    initAll() {
      this.$store.commit('updateIsLoginState');
      this.$store.commit('initAuthorState');
      this.$store.commit('initBlogNumState');
      this.$store.commit('initVisitNumState');
      this.$store.commit('initReadNumState');
      this.$store.commit('initBulletinState');
      this.$store.commit('initRoleState');
      this.$store.commit('initTimeState');
      this.$store.commit('initIdState');
    }
  }
}
</script>

<style scoped>
.blog-back {
  width: 100vw;
  height: 100vh;
}
header {
  height: 150px;
  width: 100%;
  background-image: url(../assets/images/back-header-bg.jpg);
  background-size: cover;
  background-position-y: 70%;
}

header .overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 00, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-left: 40px;
  font-size: 24px;
  color: aliceblue;
}

.header-avatar {
  width: 60px;
  height: 60px;
  background-color: aliceblue;
  border-radius: 50%;
  margin-right: 40px;
  cursor: pointer;
}

.header-avatar .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(../assets/images/avatar.jpg);
  background-size: cover;
}

.el-col {
  width: 200px;
}

#nav-menu {
  display: none;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #34495e;
  color: aliceblue;
}

.list-content {
  display: block;
  color: aliceblue;
  text-decoration: none;
}

.router-link-exact-active {
  color: #a29bfe;
}

@media (max-width: 468px) {
  header {
    height: 80px;
  }

  .logo {
    margin-left: 20px;
    font-size: 16px;
  }

  .header-avatar {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .header-avatar .avatar {
    width: 40px;
    height: 40px;
  }

  .el-col {
    display: none;
  }

  #nav-menu {
    display: flex;
  }
}
</style>