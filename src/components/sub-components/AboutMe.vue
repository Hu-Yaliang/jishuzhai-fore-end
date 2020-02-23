<template>
  <div class="about-me">
    <div class="about-bg">
      <div class="about-drop">
        <div class="avatar"></div>
        <h2>滴水穿石，非一日之功</h2>
      </div>
    </div>
    <div class="profile-card">
      <nav id="nav-menu">
        <div class="list" @click="showWork()">
          <div class="list-content">个人简介</div>
          <div class="list-line" :style="activeInfo"></div>
        </div>
        <div class="list" @click="showInfo()">
          <div class="list-content">校园经历</div>
          <div class="list-line" :style="activeCampus"></div>
        </div>
      </nav>
      <section class="about-me-section" v-if="showSection">
        <div class="personal-title">
          <div class="title">
            <h1>胡雅亮</h1>
            <p>前端技术爱好者/技术宅</p>
          </div>
          <button class="follow-btn">
            <i class="fas fa-plus"></i>关注
          </button>
        </div>
        <div class="about-me-content">
          <p style="text-indent: 2em">胡雅亮，男，1999年1月生，2017年就读于南京邮电大学通信工程专业，喜欢研究前端新兴技术与未来发展方向，感谢大家能够访问`技术宅后花园`，如有技术探讨请联系微信：18851077510。</p>
        </div>
        <footer>
          <ul> 
            <li><a href="https://wx.qq.com/"><i class="fab fa-weixin"></i></a></li>
            <li><a href="https://weibo.com/login.php"><i class="fab fa-weibo"></i></a></li>
            <li><a href="https://github.com/"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/uas/login?fromSignIn=true&amp;trk=cold_join_sign_in"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </footer>
      </section>
      <section class="work-exp-section" v-else>
        <div class="work-exps">
          <div class="work-exp-item">
            <div class="position"><p>班长</p></div>
            <div class="seperator"></div>
            <div class="work-info">
              <div class="time">2017年10月--2019年1月 <i class="far fa-calendar"></i></div>
              <div class="company">南京邮电大学 通信与信息工程学院</div>
            </div>
          </div>
          <div class="work-exp-item">
            <div class="position"><p>部长</p></div>
            <div class="seperator"></div>
            <div class="work-info">
              <div class="time">2019年9月--至今 <i class="far fa-calendar"></i></div>
              <div class="company">南京邮电大学易班技术部</div>
            </div>
          </div>
          <div class="work-exp-item">
            <div class="position"><p>前端讲师</p></div>
            <div class="seperator"></div>
            <div class="work-info">
              <div class="time">2019年9月--至今 <i class="far fa-calendar"></i></div>
              <div class="company">南京邮电大学易班技术部</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      showSection: true,
      activeInfo: {
        width: '100%'
      },
      activeCampus: {
        width: ''
      }
    }
  },
  methods: {
    showWork() {
      if (!this.showSection) {
        this.showSection = !this.showSection;
        this.activeInfo.width = '100%';
        this.activeCampus.width = '';
        return;
      }
      return;
    },
    showInfo() {
      if (this.showSection) {
        this.showSection = !this.showSection;
        this.activeInfo.width = '';
        this.activeCampus.width = '100%';
        return;
      }
      return;
    }
  }
}
</script>

<style scoped>
.about-me {
  flex: 1;
  margin: 0 10px 10px 10px;
}
.about-bg {
  width: 100%;
  height: 20vw;
  background-image: url(../../assets/images/img8.jpg);
  background-size: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.about-drop {
  width: 100%;
  height: 100%;
  background-color: rgba(42, 42, 42, 0.69);
  padding-top: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(../../assets/images/personal-avatar.jpg);
  background-size: cover;
}

h2 {
  font-size: 30px;
  color: aliceblue;
  margin-top: 5%;
}

.profile-card {
  width: 100%;
  height: 30vw;
  background-color: white;
  border-radius: 5px;
}

#nav-menu {
  width: 100%;
  height: 16%;
  padding: 20px 0 10px 20px;
  display: flex;
}

#nav-menu .list {
  font-size: 18px;
  color: #71b3dd;
  font-weight: 600;
  padding-right: 20px;
  cursor: pointer;
}

.list .list-line {
  height: 2px;
  width: 0;
  background-color: #71b3dd;
  margin: 0 auto;
  transition-duration: .4s;
}

.list .list-content:hover +div {
  width: 100%;
}

section {
  height: 82%;
}

h1 {
  font-size: 26px;
}

.work-exps {
  width: 100%;
  height: 100%;
}

.work-exp-item {
  height: 33%;
  display: flex;
}

.position {
  height: 100%;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.position p {
  font-size: 20px;
  color: #95a5a6;
  text-align: center;
  font-weight: 600;
}

.seperator {
  width: 2px;
  height: 40%;
  background-color: #95a5a6;
  margin: auto 0;
}

.work-info {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.time {
  color: #bdc3c7;
  font-weight: 500;
}

.company {
  color: #34495e;
}

.personal-title {
  height: 36%;
  display: grid;
  grid-template-columns: 1fr 120px;
  padding: 10px 20px;
}

.title p {
  margin-top: 10px;
  color: #95a5a6;
}

.follow-btn {
  display: inline-block;
  width: 100px;
  height: 32px;
  line-height: 32px;
  margin: auto;
  border-radius: 4px;
  border: none;
  background-color: #71b3dd;
  color: aliceblue;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}

.follow-btn:hover {
  background-color: #2980b9;
}

i.fa-plus {
  margin-right: 2px;
}

.about-me-content {
  height: 44%;
}

.about-me-content p {
  margin: 0 20px;
  color: #34495e;
}

footer {
  height: 20%;
}

footer ul {
  height: 80%;
  display: flex;
  list-style-type: none;
}

footer ul li {
  height: 100%;
  width: 50px;
  padding: 15px 0 20px 15px;
}

ul li a {
  display: block;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  color: #71b3dd;
}

@media (max-width: 468px) {
  .about-me {
    flex: unset;
    width: 100vw;
  }

  .about-bg {
    height: 180px;
  }

  .avatar {
    width: 60px;
    height: 60px;
  }

  h2 {
    font-size: 20px;
  }

  .profile-card {
    height: 380px;
  }

  #nav-menu .list {
    font-size: 14px;
  }

  h1 {
    font-size: 22px;
  }

  .follow-btn {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  footer ul li {
    padding: 10px 0 0 10px;
  }

  .position {
    width: 120px;
  }

  .position p {
    font-size: 16px;
  }

  .time {
    font-size: 12px;
  }

  .company {
    font-size: 12px;
  }
}
</style>