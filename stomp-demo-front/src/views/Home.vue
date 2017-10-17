<template>
  <div>
    <h1>Home</h1>
    <h2>Connected? {{ connected}}</h2>
    <div>
      <button @click="tickleConnection">{{ connected ? 'disconnect' : 'connect' }}</button>
    </div>
    <h2>Send Message</h2>
    <div>
      <input v-model="send_message" placeholder="Send Message">
      <button @click="send">Send</button>
    </div>
    <h2>Message Received</h2>
    <p>{{ received_messages }}</p>
  </div>
</template>

<script>
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
export default {
  name: 'home',
  data () {
    return {
      received_messages: [],
      send_message: null,
      connected: false
    }
  },
  methods: {
    send () {
      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send('/app/hello', JSON.stringify({'name': this.send_message}), {})
      }
    },
    connect () {
      this.socket = new SockJS('http://localhost:8081/websocket-endpoint')
      this.stompClient = Stomp.over(this.socket)
      this.stompClient.connect({}, (frame) => {
        this.connected = true
        this.stompClient.subscribe('/topic/greetings', (result) => {
          this.received_messages.push(JSON.parse(result.body).content)
        })
      }, (error) => {
        console.log(error)
        this.connected = false
      })
    },
    disconnect () {
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
      this.connected = false
    },
    tickleConnection () {
      this.connected ? this.disconnect() : this.connect()
    }
  },
  mounted () {
    this.connect()
  }
}
</script>