<template>
  <div class="about-me">
    <div class="about-bg">
      <div class="about-drop">
        <div class="avatar"></div>
        <h2>滴水穿石，非一日之功</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.about-me {
  width: 100%;
}
.about-bg {
  width: 100%;
  height: 24vw;
  background-image: url(../assets/images/img8.jpg);
  background-size: cover;
  border-radius: 5px;
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
  background-image: url(../assets/images/personal-avatar.jpg);
  background-size: cover;
}

h2 {
  font-size: 30px;
  color: aliceblue;
  margin-top: 5%;
}

.resume-pic {
  display: block;
  width: 100%;
}
</style>