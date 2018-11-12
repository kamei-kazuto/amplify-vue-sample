<template>
  <div>
    <amplify-authenticator></amplify-authenticator>
    <amplify-chatbot></amplify-chatbot>
    <amplify-photo-picker></amplify-photo-picker>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
    ...components
  },
  mounted() {
    console.log(this.$Amplify)
  }
}
</script>
