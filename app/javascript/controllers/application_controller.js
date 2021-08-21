import Vue from 'vue/dist/vue.esm.js';
import TurbolinksAdapter from 'vue-turbolinks'
import emitter from "../lib/emitter"

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById("vue-notification") 
  if (element) {
    const app = new Vue({
      el: element,
      created() {
        this.counter+=1
      },
      data: () =>{
        return {
          message: "Hello World Notification Component",
          counter: 0
        }
      },
      mounted() {
        emitter.emit('notification.mounted', "hello")
      },
      methods: {
        increment() {
          this.counter+=1
        },
        emitted() {
          emitter.emit('notification.emitted', "hello")
        }
      },
    })
  }
})