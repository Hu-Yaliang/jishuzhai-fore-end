<template>
  <div class="login-form">
    <div id="test-editor">
    <textarea>### 关于 Editor.md

**Editor.md** 是一款开源的、可嵌入的 Markdown 在线编辑器（组件），基于 CodeMirror、jQuery 和 Marked 构建。
    </textarea>
</div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginContent: {
        username: '',
        password: ''
      },
      registerContent: {
        username: '',
        password: ''
      },
      password: ''
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
</style>