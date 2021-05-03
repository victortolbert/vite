<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const count = ref(store.state)
    const inc = () => {
      store.commit('increment')
    }
    return {
      count,
      inc,
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {},
})
</script>

<template>
  <div class="hello">
    <div
      class="flex flex-col items-center justify-center w-4/6 h-64 mx-auto bg-gray-300 shadow-md"
    >
      <h3 class="text-xl font-semibold">Increment Counter</h3>

      <button
        class="h-10 px-8 m-4 text-2xl font-bold text-blue-900 bg-red-500 border rounded-lg focus:outline-none"
        @click="inc()"
      >
        Press Me
      </button>

      <h5 class="text-3xl">Counter: {{ count.counter }}</h5>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
