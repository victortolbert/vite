<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Product, useProductStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

export default defineComponent({
  setup() {
    const loading = ref(true)
    const productStore = useProductStore()
    const cartStore = useCartStore()

    onMounted(async () => {
      await productStore.fetchAll()
      loading.value = false
    })

    return {
      loading,
      products: computed(() => productStore.list),
      cart: computed(() => cartStore.formattedCart),
      total: computed(() => cartStore.total),
      add: (product: Product) => cartStore.add(product),
      remove: (product: Product) => cartStore.remove(product),
    }
  },
})
</script>

<template>
  <div>
    <div class="max-w-4xl px-12 py-4">
      <div class="grid grid-cols-2 gap-1">
        <div class="grid grid-cols-3 gap-4">
          <div v-if="loading">Loading...</div>

          <div
            v-for="product in products"
            :key="product.id"
            class="px-8 py-4 text-center rounded-sm shadow"
          >
            <div class="text-4xl">
              {{ product.icon }}
            </div>
            <span>
              {{ product.name }}
              (${{ product.cost }})
            </span>

            <button
              class="flex items-center justify-center h-8 my-1 text-xs font-extrabold text-white bg-green-500 rounded-md w-14"
              @click="add(product)"
            >
              Add
            </button>
            <button
              class="flex items-center justify-center h-8 my-1 text-xs font-extrabold text-white bg-red-500 rounded-md w-14"
              @click="remove(product)"
            >
              Remove
            </button>
          </div>
        </div>

        <div class="w-56 px-6">
          <h2 class="underline">Cart</h2>

          <!-- some nice spacing if there are no item in the cart -->
          <br v-if="cart.length === 0" />

          <div
            v-for="item in cart"
            :key="item.name"
            class="flex justify-between"
          >
            <div>{{ item.name }} ({{ item.quantity }}):</div>
            <div class="text-right">${{ item.cost }}</div>
          </div>

          <div class="text-right double-underline">${{ total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style style>
.double-underline {
  border-top: 3px double;
}
</style>
