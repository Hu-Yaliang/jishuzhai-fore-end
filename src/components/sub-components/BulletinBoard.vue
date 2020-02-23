<template>
  <div class="bulletin-board">
    <div class="title">公告栏</div>
    <div class="divider"></div>
    <div class="content">{{ this.$store.state.bulletin }}</div>
  </div>
</template>

<script>
export default {
  name: 'BulletinBoard'
}
</script>

<style scoped>
.bulletin-board {
  width: 250px;
  height: 140px;
  border-radius: 5px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 10px;
}

.title {
  margin: 0 0 8px 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background-color: #727272;
}

.content {
  width: 250px;
  margin-top: 10px;
  padding: 0 20px;
  color: #727272;
}

@media (max-width: 468px) {
  .bulletin-board {
    display: none;
  }
}
</style>