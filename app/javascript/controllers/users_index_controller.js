import Vue from 'vue/dist/vue.esm.js';
import TurbolinksAdapter from 'vue-turbolinks'
import User from "../components/User"
import emitter from "../lib/emitter"

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById("vue-users-index") 
  if (element) {
    const app = new Vue({
      el: element,
      components: {
        User
      },
      data: () => { 
        return {
          message: "Hello World Users Index",
        }
      },
      mounted() {
        emitter.on("notification.emitted", (params) => {
          console.log(`emitted: ${params}`)
        })
      },
      beforeDestroy() {
        emitter.removeAllListeners()
      }
    })
  }
})