<template>
  <div id="summernote"></div>
</template>

<script>
export default {
  name: 'SummerNote',
  mounted() {
    $(function() {
        $('#summernote').summernote({
          height: 200,
          focus: true,
          placeholder: '请输入推送内容'
        });
    });
  }
}
</script>