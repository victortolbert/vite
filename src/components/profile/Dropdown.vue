<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    showProfileMenu: false,
  }),
})
</script>

<template>
  <div class="relative ml-3">
    <div>
      <button
        class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
        @click="showProfileMenu = !showProfileMenu"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://cominex.net/assets/img/people/victor.jpeg"
          alt="Victor Tolbert"
        />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="showProfileMenu"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div
          class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >Your Profile</a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >Settings</a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >Sign out</a>
        </div>
      </div>
    </Transition>
  </div>
</template>
