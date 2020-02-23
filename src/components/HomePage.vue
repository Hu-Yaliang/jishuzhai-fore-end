<template>
  <div class="home-page">
    <page-header></page-header>
    <div class="home-page-container">
      <div>
        <personal-card></personal-card> 
        <user-info></user-info>
      </div>
      <router-view/>
      <bulletin-board></bulletin-board>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import UserInfo from './sub-components/UserInfo'
import PageHeader from './sub-components/PageHeader'
import PersonalCard from './sub-components/PersonalCard'
import BulletinBoard from './sub-components/BulletinBoard'
export default {
  name: 'HomePage',
  components: {
    PageHeader,
    PersonalCard,
    BulletinBoard,
    UserInfo
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  min-width: 1180px;
  background-image: url(../assets/images/home-page-bg.png);
  background-position-y: -30%;
  background-size: cover;
  background-attachment: fixed;
}

.home-page-container {
  max-width: 1180px;
  padding-top: 10px;
  margin: 0 auto;
  display: flex;
}

@media (max-width: 468px) {
  .home-page {
    min-width: 100vw;
  }
}
</style>