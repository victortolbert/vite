<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: 'Home', to: '/' },
      { text: 'About', to: '/about' },
    ],
  }),
})
</script>

<template>
  <div>
    <AppNavbar :links="links" />

    <PageHeader v-if="$route.meta.title" />

    <main class="max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8">
      <Transition name="slide-fade" appear>
        <router-view />
      </Transition>
    </main>
  </div>
</template>
