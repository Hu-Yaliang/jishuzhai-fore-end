<template>
  <div class="home-page">
    <!-- 主页头部结构 -->
    <header>
      <div class="header-top">
        <div class="top-left">
          <div class="logo">技术宅</div>
          <nav>
            <a href="#">主页</a>
            <a href="#">博客</a>
            <a href="#">社区</a>
            <a href="#">关于作者</a>
            <i class="el-icon-search"></i>
          </nav>
        </div>
        <div class="login-register">
          <a href="#" class="login" @click="dialogVisible = true">登录</a>
          <span>|</span>
          <a href="#" class="register">注册</a>
        </div>
      </div>
      <div class="header-bottom">
        <div class="page-views">
          总访问量
          <span class="num">199</span>
          人次
        </div>
        <div class="page-views">
          您是访问本站的第
          <span class="num">300</span>
          个小伙伴
        </div>
      </div>
    </header>
    <!-- 主页内容结构 -->
    <main>
      <div class="content">
        <section class="user-brief">
          <div class="user-info">
            <div class="user-bg"></div>
            <div class="info-content">
              <h2 class="nick-name">彩笔小浪</h2>
              <div class="data">
                <div class="data-piece">
                  <div class="num">102</div>
                  <div class="desc">博客</div>
                </div>
                <div class="data-piece">
                  <div class="num">58</div>
                  <div class="desc">随笔</div>
                </div>
                <div class="data-piece">
                  <div class="num">1020</div>
                  <div class="desc">评论</div>
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
          <div class="user-data">
            <div class="data-top">
              <div class="user-avatar-small"></div>
              <div class="common-info">
                <div class="info-top">
                  <span class="vip-name">彩笔小浪</span>
                  <i class="el-icon-male"></i>
                  <span class="user-grade">LV6</span>
                  <span class="vip-info">年度大会员</span>
                </div>
                <div class="info-bottom">
                  个人博客：hu-yaliang.github.io
                </div>
              </div>
            </div>
            <div class="user-signature">
              <span class="auth-icon"></span>bilibili个人认证：一名热爱编程的技术宅
            </div>
            <div class="user-contact">
              <div class="private-email">私信</div>
              <div class="attention">
                <i class="el-icon-plus" style="font-weight: 1000;"></i>
                关注12</div>
            </div>
            <div class="data-pieces">
              <div class="data-piece">
                <div>12</div>
                <div>关注数</div>
              </div>
              <div class="data-piece">
                <div>1024</div>
                <div>粉丝数</div>
              </div>
              <div class="data-piece">
                <div>32267</div>
                <div>访问量</div>
              </div>
            </div>
          </div>
        </section>
        <section class="blog-part">
          <article class="article-one"><div>程序员拥有自己博客的重要性</div></article>
          <article class="article-two"><div>媒体查询之妙用</div></article>
        </section>
        <section class="aside-part">
          <div class="affiche">
            <div class="aside-title">公告栏</div>
            <div class="aside-divider"></div>
            <div class="aside-content">该博客将陆续完善，具体公测时间敬请期待！</div>
          </div>
          <div class="recent-comments">
            <div class="aside-title">最近访客</div>
            <div class="aside-divider"></div>
            <div class="visitor-record">
              <div class="visitor-avatar avatar-one"></div>
              <div class="visitor-name">张三
                <i class="el-icon-male"></i>
              </div>
              <div class="visit-time">43秒前访问</div>
            </div>
            <div class="aside-divider"></div>
            <div class="visitor-record">
              <div class="visitor-avatar avatar-two"></div>
              <div class="visitor-name">翠花
                <i class="el-icon-female"></i>
              </div>
              <div class="visit-time">30分钟前访问</div>
            </div>
            <div class="aside-divider"></div>
            <div class="visitor-record">
              <div class="visitor-avatar avatar-three"></div>
              <div class="visitor-name">王五
                <i class="el-icon-male"></i>
              </div>
              <div class="visit-time">2小时前访问</div>
            </div>
          </div>
        </section>
      </div>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </main>
    <footer>
      <p>&copy; 2020 彩笔小浪 - 技术宅 版权所有</p>
    </footer>
    <el-backtop></el-backtop>
    <!-- 登录注册模块 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style scoped>
/* 主页头部样式 */
header {
  width: 100vw;
  height: 150px;
  background-image: url(../assets/images/header-image.png);
  background-size: cover;
  background-position-y: 30%;
  position: relative;
}

a {
  text-decoration: none;
  font-size: 14px;
  color: aliceblue;
  margin: 0 10px;
}

.header-top {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.5);
}

.top-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-left i {
  color: aliceblue;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  margin-left: 40px;
  margin-right: 20px;
  color: aliceblue;
}

.login-register {
  margin-right: 40px;
}

.login-register span {
  color: aliceblue;
}

.header-bottom {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  color: white;
}

.page-views .num {
  color: #ff6700;
}
/* 主页内容样式 */
main {
  width: 100%;
  background-image: url(../assets/images/bizhi.png);
  background-position-y: 10%;
  background-size: cover;
  background-attachment: fixed;
}

main .content {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 270px 1fr 220px;
}

section:not(:last-child) {
  margin-right: 10px;
}

.user-brief {
  width: 260px;
  background-color: transparent;
  border-radius: 5px;
}

.user-info {
  width: 100%;
  height: 320px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
}

.user-info .data {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.user-info .data-piece {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #494949;
}

.user-info .num {
  color: rgb(77, 144, 183);
  font-weight: 600;
}

.nick-name {
  width: 100%;
  text-align: center;
  font-size: 16px;
  margin-top: 60px;
  margin-bottom: 10px;
  color: #494949;
}

.user-bg {
  width: 100%;
  height: 110px;
  background-image: url(../assets/images/img4.png);
  background-size: cover;
  border-radius: 5px;
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

.user-data {
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 5px;
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

.data-top {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}

.user-avatar-small {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(../assets/images/avatar.png);
  background-size: cover;
  margin-left: 20px;
}

.common-info {
  width: 200px;
}

.info-top {
  display: flex;
  font-size: 0px;
  align-items: center;
}

.el-icon-male {
  -webkit-transform: scale(0.8);
  font-size: 10px;
  color: blue;
  display: inline-block;
}

.vip-name {
  display: inline-block;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  color: rgb(223, 165, 187);
  margin-left: 10px;
}

.user-grade {
  width: 28px;
  height: 16px;
  display: inline-block;
  border-radius: 2px;
  background-color: #ff6700;
  color: white;
  -webkit-transform: scale(0.75);
  font-size: 9px;
  font-weight: 600;
  line-height: 14px;
  text-align: center;
  margin-right: -10px;
}

.vip-info {
  width: 68px;
  height: 16px;
  display: inline-block;
  border-radius: 2px;
  background-color: rgb(222, 101, 140);
  color: white;
  -webkit-transform: scale(0.75);
  font-size: 9px;
  font-weight: 600;
  line-height: 14px;
  text-align: center;
}

.info-bottom {
  width: 100%;
  -webkit-transform: scale(0.75);
  font-size: 9px;
  color: #727272;
  margin-left: -10px;
  margin-top: 5px;
}

.auth-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0px 5px 0px 20px;
  background-image: url(../assets/images/icon.png);
  background-size: cover;
}

.user-signature {
  font-size: 12px;
}

.user-contact {
  margin-top: 26px;
  display: flex;
}

.private-email {
  margin-left: 20px;
  height: 25px;
  width: 75px;
  border: 1px solid rgb(222, 101, 140);
  border-radius: 2px;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: rgb(222, 101, 140);
}

.attention {
  width: 110px;
  height: 25px;
  margin-left: 10px;
  border-radius: 2px;
  background-color: rgb(68, 158, 209);
  color: white;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}

.user-data .data-pieces {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  text-align: center;
  color: #727272;
}

.blog-part {
  background-color: transparent;
  border-radius: 5px;
}

.blog-part article {
  height: 400px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 400px;
  font-size: 24px;
  color: white;
  position: relative;
}

.article-one {
  background-image: url(../assets/images/img1.png);
  background-size: cover;
}

.article-one div {
  background-color: rgba(42, 42, 42, 0.69);
  border-radius: 5px;
}

.article-two div {
  background-color: rgba(42, 42, 42, 0.69);
  border-radius: 5px;
}

.article-two {
  background-image: url(../assets/images/img8.jpg);
  background-size: cover;
}

.aside-part {
  width: 210px;
  height: 400px;
  border-radius: 5px;
  background-color: transparent;
}

.affiche {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 10px;
}

.aside-content {
  width: 160px;
  margin: 10px 20px;
  color: #727272;
  word-wrap: none;
}

.aside-title {
  margin: 0 0 8px 20px;
  font-size: 20px;
  font-weight: 700;
}

.aside-divider {
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background-color: #727272;
}

.recent-comments {
  background-color: white;
  border-radius: 5px;
  padding-top: 20px;
}

.visitor-record {
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-areas: "visitor-avatar visitor-name" "visitor-avatar visit-time";
  grid-template-columns: 50px 1fr;
  grid-template-rows: 25px 25px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.visitor-avatar {
  grid-area: visitor-avatar;
  border-radius: 50%;
}

.avatar-one {
  background-image: url(../assets/images/avatar-one.png);
  background-size: cover;
}

.avatar-two {
  background-image: url(../assets/images/avatar-two.jpeg);
  background-size: cover;
}

.avatar-three {
  background-image: url(../assets/images/avatar-three.jpeg);
  background-size: cover;
}

.visitor-name {
  padding: 5px;
  text-align: center;
  line-height: 15px;
  grid-area: visitor-name;
  font-size: 12px;
  color: rgb(223, 165, 187);
  font-weight: 600;
}

.visit-time {
  padding: 5px;
  text-align: center;
  line-height: 15px;
  grid-area: visit-time;
  font-size: 12px;
  color: #727272;
}

footer {
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: white;
  background-color: #2e2e2e;
}
</style>
