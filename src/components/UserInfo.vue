<template>
  <div class="user-info">
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
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>
.user-info {
  width: 260px;
  height: 200px;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  margin-left: 10px;
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

.user-info .data-pieces {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  text-align: center;
  color: #727272;
}
</style>