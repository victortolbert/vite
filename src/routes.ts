import Home from './views/home.vue'
import About from './views/about.vue'
import Todo from './views/todo.vue'
import NotFound from './views/not-found.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/todo', component: Todo, meta: { title: 'Todo' } },
  { path: '/:path(.*)', component: NotFound },
]
