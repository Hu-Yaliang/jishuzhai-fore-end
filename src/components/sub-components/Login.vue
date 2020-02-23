<template>
  <div class="login-container">
    <h2>登录</h2>
    <input type="text" placeholder="手机号" v-model="login.phoneNum">
    <input type="password" placeholder="密码" v-model="login.password">
    <button @click="postLogin()">登录</button>
    <router-link to="/user/register">注册</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      login: {
        phoneNum: '',
        password: ''
      },
      user: {}
    }
  },
  methods: {
    updateAll() {
      this.$store.commit('updateAuthorState', {
        author: this.user.author
      });
      this.$store.commit('updateIdState', {
        id: this.user.id
      });
      this.$store.commit('updatePhoneNumState', {
        phoneNum: this.user.phoneNum
      });
      this.$store.commit('updateCreatetimeState', {
        createtime: this.user.createtime
      });
      this.$store.commit('updateRoleState', {
        role: this.user.role
      });
      this.$store.commit('updateVisitNumState', {
        visitNum: this.user.visitNum
      });
      this.$store.commit('updateBulletinState', {
        bulletin: this.user.bulletin
      });
      this.$store.commit('updateReadNumState', {
        readNum: this.user.readNum
      });
      this.$store.commit('updateBlogNumState', {
        blogNum: this.user.blogNum
      });
      this.$store.commit('updateTimeState', {
        time: this.user.time
      });
    },
    postLogin() {
      if (!this.login.phoneNum) {
        return this.$parent.inputWarn();
      }
      if (!this.login.password) {
        return this.$parent.inputWarn();
      }
      axios.post('/api/user/login', this.login).then(function(res) {
        if (res.data.isSuccess) {
          this.$parent.loginSuccess();
          this.user = res.data.data;
          this.updateAll();
          this.$store.commit('updateIsLoginState');
          setTimeout(() => {
            this.$router.push('/');
          }, 1800);
        } else {
          this.login.phoneNum = '';
          this.login.password = '';
          return this.$parent.loginFail();
        }
      }.bind(this)).catch(err => {
        console.log(err);
        return this.$parent.loginFail();
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 280px;
  height: 260px;
  position: absolute;
  top: calc(50% - 130px);
  left: calc(50% - 140px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
}

h2 {
  font-size: 24px;
  color: #dfe6e9;
  margin-top: 30px;
}

input {
  display: inline-block;
  padding: 0 10px;
  width: 170px;
  height: 34px;
  margin-top: 16px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
}

input:focus {
  outline: none;
}

button {
  display: inline-block;
  width: 100px;
  height: 34px;
  margin-top: 16px;
  border-radius: 5px;
  cursor: pointer;
  color: #dfe6e9;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  background-color: transparent;
}

button:hover {
  color: #a29bfe;
  border-color: #a29bfe;
}

button:focus {
  outline: none;
}

a {
  font-size: 14px;
  margin-top: 4px;
  color: #a29bfe;
}
</style>