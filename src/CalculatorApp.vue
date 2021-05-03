<script lang="ts">
import { defineComponent } from 'vue'
import Calculator from '~/components/Calculator.vue'

export default defineComponent({
  components: { Calculator },
})
</script>

<template>
  <div>
    <div class="max-w-4xl px-12 py-4">
      <div
        class="flex items-center justify-center w-full font-mono text-2xl text-gray-200 bg-gray-800 sm:text-3xl"
      >
        <Calculator />
      </div>
    </div>
  </div>
</template>
