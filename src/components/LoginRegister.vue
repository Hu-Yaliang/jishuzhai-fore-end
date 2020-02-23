<template>
  <div class="login-register">
    <header>
      <div class="logo">技术宅后花园</div>
      <div class="blank"></div>
      <router-link to="/">主页</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
  methods: {
    loginSuccess() {
      this.$notify({
        title: '登录成功',
        message: '欢迎回到技术宅后花园',
        type: 'success',
        duration: 1800,
        showClose: false
      });
    },
    loginFail() {
      this.$notify({
        title: '登录失败',
        message: '手机号或密码错误',
        type: 'error',
        duration: 1800,
        showClose: false
      })
    },
    registerSuccess() {
      this.$notify({
        title: '注册成功',
        message: '欢迎加入技术宅后花园',
        type: 'success',
        duration: 1800,
        showClose: false
      });
    },
    phoneNumErr() {
      this.$notify({
        title: '注册失败',
        message: '请输入正确的手机号',
        type: 'error',
        duration: 1800,
        showClose: false
      })
    },
    registerFail() {
      this.$notify({
        title: '注册失败',
        message: '该手机号已注册',
        type: 'error',
        duration: 1800,
        showClose: false
      })
    },
    inputWarn() {
      this.$notify({
        title: '提交失败',
        message: '请输入手机号和密码',
        type: 'warning',
        duration: 1800,
        showClose: false
      })
    }
  }
}
</script>

<style scoped>
.login-register {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/images/login-bg.png);
  background-size: cover;
  position: relative;
  min-width: 340px;
}

header {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
}

.blank {
  flex: 1;
}

header a {
  font-size: 18px;
  font-weight: 700;
  margin-right: 40px;
  color: aliceblue;
  cursor: pointer;
  text-decoration: none;
}

header a:hover {
  color: #a29bfe;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  margin-left: 40px;
  color: aliceblue;
}

@media (max-width: 468px) {
  .login-register {
    background-position-x: 15%;
    background-size: 1300px;
  }

  header {
    height: 60px;
  }

  .logo {
    font-size: 18px;
    margin-left: 20px;
  }

  header a {
    font-size: 14px;
    margin-right: 20px;
  }
}
</style>