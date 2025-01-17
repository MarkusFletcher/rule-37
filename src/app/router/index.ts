import { createMemoryHistory, createRouter } from 'vue-router'

import { HomePage } from '../../pages/home'
import { GamePage } from '../../pages/game'

const routes = [
  { path: '/', name: 'home.index', component: HomePage },
  { path: '/game', name: 'game.index', component: GamePage }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
