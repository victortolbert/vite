<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

import Calculator from '~/components/Calculator.vue'
import { Product, useProductStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default defineComponent({
  components: {
    Calculator,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const productStore = useProductStore()
    const loading = ref(true)
    const open = ref(false)
    const availableToHire = ref(true)
    const privateAccount = ref(false)
    const allowCommenting = ref(true)
    const allowMentions = ref(true)

    onMounted(async () => {
      await productStore.fetchAll()
      loading.value = false
    })
    const cartStore = useCartStore()
    return {
      user,
      navigation,
      userNavigation,
      open,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      products: computed(() => productStore.list),
      cart: computed(() => cartStore.formattedCart),
      total: computed(() => cartStore.total),
      loading,
      add: (product: Product) => cartStore.add(product),
      remove: (product: Product) => cartStore.remove(product),
    }
  },
})
</script>

<template>
  <Disclosure as="div" class="relative pb-32 overflow-hidden bg-light-blue-700" v-slot="{ open }">
    <nav
      :class="[
        open ? 'bg-light-blue-900' : 'bg-transparent',
        'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none',
      ]"
    >
      <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div
          class="relative flex items-center justify-between h-16 lg:border-b lg:border-light-blue-800"
        >
          <div class="flex items-center px-2 lg:px-0">
            <div class="flex-shrink-0">
              <img
                class="block w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden lg:block lg:ml-6 lg:space-x-4">
              <div class="flex">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-black bg-opacity-25'
                      : 'hover:bg-light-blue-800',
                    'rounded-md py-2 px-3 text-sm font-medium text-white',
                  ]"
                >{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative text-light-blue-100 focus-within:text-gray-400">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon class="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full py-2 pl-10 pr-3 leading-5 bg-opacity-50 border border-transparent rounded-md bg-light-blue-700 placeholder-light-blue-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-light-blue-200 hover:text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="flex-shrink-0 block w-6 h-6" aria-hidden="true" />
              <XIcon v-else class="flex-shrink-0 block w-6 h-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <button
                class="flex-shrink-0 p-1 rounded-full text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="w-6 h-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative flex-shrink-0 ml-4">
                <div>
                  <MenuButton
                    class="flex text-sm text-white rounded-full focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" :src="user.imageUrl" alt />
                  </MenuButton>
                </div>
                <Transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block py-2 px-4 text-sm text-gray-700',
                        ]"
                      >{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="bg-light-blue-900 lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-black bg-opacity-25'
                : 'hover:bg-light-blue-800',
              'block rounded-md py-2 px-3 text-base font-medium text-white',
            ]"
          >{{ item.name }}</a>
        </div>
        <div class="pt-4 pb-3 border-t border-light-blue-800">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full" :src="user.imageUrl" alt />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">{{ user.name }}</div>
              <div class="text-sm font-medium text-light-blue-200">{{ user.email }}</div>
            </div>
            <button
              class="flex-shrink-0 p-1 ml-auto rounded-full text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="px-2 mt-3">
            <a
              v-for="item in userNavigation"
              :key="item.name"
              :href="item.href"
              class="block px-3 py-2 text-base font-medium rounded-md text-light-blue-200 hover:text-white hover:bg-light-blue-800"
            >{{ item.name }}</a>
          </div>
        </div>
      </DisclosurePanel>
    </nav>
    <div
      :class="[
        open ? 'bottom-0' : 'inset-y-0',
        'absolute flex justify-center inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0',
      ]"
      aria-hidden="true"
    >
      <div class="flex-grow bg-opacity-75 bg-light-blue-900" />
      <svg
        class="flex-shrink-0"
        width="1750"
        height="308"
        viewBox="0 0 1750 308"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity=".75" d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#075985" />
        <path opacity=".75" d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0c4a6e" />
      </svg>
      <div class="flex-grow bg-opacity-75 bg-light-blue-800" />
    </div>
    <header class="relative py-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">Settings</h1>
      </div>
    </header>
  </Disclosure>
</template>
