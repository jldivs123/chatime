<template>
  <div class="chat-wrapper">
    <div class="chat-container" ref="chatContainer">
      <chat-message
        v-for="(message, index) in messages"
        v-bind:msg="message"
        :key="index"
      >
      </chat-message>
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="send">
        <input type="text" v-model="msg">
      </form>
    </div>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage';

export default {
  name: 'Chat',
  data() {
    return {
      messages: [],
      msg: ''
    };
  },
  methods: {
    send: function () {
      if (this.msg) {
        this.$socket.emit('SEND_MESSAGE', this.msg);
        this.msg = '';
      }
    },
    scrollToBottom: function () {
      this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight + 20;
    },
    notifyUser() {
      let notification;
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }
      else if (Notification.permission === "granted") {
        notification = new Notification(this.msg);
      }
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if(!('permission' in Notification)) {
            Notification.permission = permission;
          }

          if (permission === "granted") {
            notification = new Notification(this.msg);
          }
        });
      }
      else {
        alert(`Permission is ${Notification.permission}`);
      }
    }
  },
  sockets: {
    BROADCAST_MESSAGE: function (e) {
      this.messages.push(e);
      this.scrollToBottom();
      this.notifyUser();
    }
  },
  components: {
    ChatMessage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-wrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.chat-container {
  width: 100%;
  height: 95%;
  margin: 0;
  padding-top: 20px;
  overflow-y: scroll;
}
.form-wrapper, input {
  width: 90%;
  margin: 0 5px;
}

input {

}

p {
  font-weight: normal;
  font-family: Helvetica
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
