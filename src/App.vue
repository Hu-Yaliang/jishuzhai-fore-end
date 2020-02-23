<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("storedata") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("storedata"))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",() => {
      sessionStorage.setItem("storedata",JSON.stringify(this.$store.state))
    });
    // 兼容iphone手机
    window.addEventListener("pagehide",() => {
      sessionStorage.setItem("storedata",JSON.stringify(this.$store.state))
    });
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
</style>
