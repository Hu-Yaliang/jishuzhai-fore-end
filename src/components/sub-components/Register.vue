<template>
  <div class="register-container">
    <h2>注册</h2>
    <input type="text" placeholder="手机号" v-model="register.phoneNum">
    <input type="password" placeholder="密码" v-model="register.password">
    <button @click="confirmPost()">注册</button>
    <router-link to="/user/login">登录</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      register: {
        phoneNum: '',
        password: ''
      },
      confirm: {
        phoneNum: ''
      }
    }
  },
  methods: {
    confirmPost() {
      this.confirm.phoneNum = this.register.phoneNum;
      axios.post('/api/user/confirm', this.confirm).then(function(res) {
        if (!res.data.isSuccess) {
          this.register.phoneNum = undefined;
          this.register.password = '';
          return this.$parent.registerFail();
        } else {
          this.registerPost();
        }
      }.bind(this)).catch(err => {
        console.log(err);
        return this.$parent.registerFail();
      })
    },
    registerPost() {
      if (!this.register.phoneNum) {
        return this.$parent.inputWarn();
      }
      if (!this.register.password) {
        return this.$parent.inputWarn();
      }
      if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.register.phoneNum))) {
        console.log(this.phoneNum);
        return this.$parent.phoneNumErr();
      }
      axios.post('/api/user/register', this.register).then(function(res) {
        if (res.data.isSuccess) {
          this.$parent.registerSuccess();
          setTimeout(() => {
            this.$router.push('/user/login');
          }, 1800);
        } else {
          return this.$parent.registerFail();
        }
      }.bind(this)).catch(err => {
        console.log(err);
        return this.$parent.registerFail();
      })
    }
  }
}
</script>

<style scoped>
.register-container {
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
  color: #dfe6e9;
  margin-top: 30px;
  font-size: 24px;
}

input {
  display: inline-block;
  padding: 0 10px;
  width: 170px;
  height: 34px;
  margin-top: 16px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
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