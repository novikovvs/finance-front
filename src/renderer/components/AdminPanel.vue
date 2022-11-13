<template>
<div style="height: 100%">
  <webview shadow :src="appUrl" style="height: 100%; border: 1px gray solid"></webview>
</div>
</template>

<script>
  export default {
    name: 'GitlabPage',
    data () {
      return {
        appUrl: process.env.APP_URL
      }
    }
  }
</script>

<style scoped>

</style>
