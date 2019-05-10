<template>
  <div class="chat-msg-wrapper">
    <div class="icon-container"><i class="material-icons">{{ icon }}</i></div>
    <div class="msg-container"><p>{{ msg }}</p></div>
  </div>
</template>

<script>
const F = './static/audio/f.mp3';
const chatSound = './static/audio/chat-sound.mp3';
const fAudio = new Audio(F);
const chatSoundAudio = new Audio(chatSound);

export default {
  name: 'ChatMessage',
  props: ['msg'],
  data() {
    return {
      icons: [
        'favorite',
        'view_carousel',
        'trending_up',
        'thumb_down',
        'swap_vertical_circle',
        'settings',
        'settings_brightness',
        'report_problem',
        'important_devices',
        'gif',
        'library_books',
        'shuffle'
      ],
      icon: 'play_arrow'
    };
  },
  beforeMount() {
    // Comment out for now since default is for android
    // this.icon = this.icons[Math.floor(Math.random() * this.icons.length)];
    if (typeof this.msg === 'string' && this.msg.trim().toLowerCase() === 'f') {
      // fAudio.play();
    } else {
      chatSoundAudio.play();
    }
  }
};
</script>

<style scoped>
.chat-msg-wrapper {
  display: flex;
  width: inherit;
  background-color: #fff;
}
.icon-container {
  height: 100%;
  width: 10%;
}
i {
  margin-top: 4px;
  height: 8px !important;
  width: 8px;
  font-size: 12px;
  color: #c1c1c1;
}
.msg-container {
  flex-grow: 1;
  display: inline-block;
  padding-top: 2px;
}
p {
  color: #202124;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  text-align: left;
  align-self: flex-start;
  margin: auto;
}
</style>
