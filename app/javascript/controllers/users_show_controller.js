import Vue from 'vue/dist/vue.esm.js';
import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById("vue-users-show") 
  if (element) {
    const app = new Vue({
      el: element,
      data: () => {
        return {
          message: "Hello World Users Show"
        }
      },
    })
  }
})