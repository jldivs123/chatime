<template>
  <div class="container"">
    <div class="chat-container">
      &nbsp;
      <chat></chat>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
import Chat from './Chat';

export default {
  name: 'Homepage',
  data() {
    return {
      platformImg: ''
    };
  },
  components: {
    Chat
  }
  // beforeMount() {
  //   this.platformImg = this.$route.query.platform === 'android' ? androidImg : webImg;
  //   // this.$refs.container.back
  // }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.chat-container {
  width: 17%;
  height: 75%;
  margin-top: 8%;
}
</style>
