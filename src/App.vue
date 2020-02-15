<template>
  <div id="app">
    <page-header></page-header>
    <main>
      <div class="content">
        <div class="left-content">
          <personal-card></personal-card>
          <user-info></user-info>
        </div>
        <router-view/>
        <bulletin-board></bulletin-board> 
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PersonalCard from './components/PersonalCard'
import UserInfo from './components/UserInfo'
import BulletinBoard from './components/BulletinBoard'
export default {
  name: 'App',
  components: {
    PageHeader,
    PersonalCard,
    UserInfo,
    BulletinBoard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
main {
  width: 100%;
  background-image: url(./assets/images/bizhi.png);
  background-position-y: 10%;
  background-size: cover;
  background-attachment: fixed;
  min-height: calc(100vh - 60px);
  height: auto;
}

main .content {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.left-content {
  margin-right: 10px;
}
</style>
