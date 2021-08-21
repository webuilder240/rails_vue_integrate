<template>
  <div v-text="message"></div>
</template>

<script>
  export default {
    created() {
      console.log("Hello Vue")
    },
    data: () => {
      return {
        message: "Hello World Users Show"
      }
    },
  }
</script>