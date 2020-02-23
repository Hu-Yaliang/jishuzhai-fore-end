<template>
  <div class="user-info">
    <div class="data-top">
      <div class="user-avatar-small"></div>
      <div class="common-info">
        <div class="info-top">
          <span class="vip-name">二次元</span>
          <i class="el-icon-male"></i>
          <span class="user-grade">LV6</span>
          <span class="vip-info">年度大会员</span>
        </div>
        <div class="info-bottom">
          冰冻三尺，非一日之寒
        </div>
      </div>
    </div>
    <div class="user-signature">
      <span class="auth-icon"></span>技术宅认证：一名热爱编程的技术宅
    </div>
    <div class="user-contact">
      <div class="private-email">私信</div>
      <div class="attention">
        <i class="el-icon-plus" style="font-weight: 1000;"></i>
        关注 999</div>
    </div>
    <div class="data-pieces">
      <div class="data-piece" v-for="item in items" :key="item">
        <div>999</div>
        <div>{{ item }}</div>
      </div>
    </div>
    <div class="overlay">
      <div class="overlay-content">该模块暂未上线，请关注后续版本</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      items: ['关注数', '粉丝数', '访问量']
    }
  }
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
  position: relative;
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
  background-image: url(../../assets/images/avatar.png);
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
  background-image: url(../../assets/images/icon.png);
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

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.overlay-content {
  color: white;
  font-size: 14px;
}

@media (max-width: 468px) {
  .user-info {
    display: none;
  }
}
</style>