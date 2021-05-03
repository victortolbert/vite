<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div id="demo">
    <button @click="show = !show">Toggle</button>

    <Transition name="fade">
      <p v-if="show">hello</p>
    </Transition>
  </div>

  <BaseFooter
    brand="Company Name"
    copyright-year="2020"
    :nav-links="[
      { label: 'Home' },
      { label: 'About' },
      { label: 'Product' },
      { label: 'Contact' }
    ]"
  />
</template>
