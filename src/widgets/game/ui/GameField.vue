<template>
  <div class="min-h-screen grid grid-rows-[1fr,auto,1fr]">
    <!-- rotate-180 -->
    <div
      class="grid grid-rows-[1fr,100px] rotate-180"
      :class="[{ 'border-2 border-red-800': game.currentPlayerIndex === 1 }]"
    >
      <button
        @click="takeTurn(1)"
        class="flex flex-col items-center justify-center"
      >
        <div>{{ player_2.attempts }}</div>
        <div class="text-4xl">
          {{ player_2.number }}
        </div>
      </button>
      <button @click="finishRolling(1)">
        {{ player_2.finish ? 'все' : 'Завершить' }}
      </button>
    </div>
    <hr class="my-12" />

    <div
      class="grid grid-rows-[1fr,100px]"
      :class="[{ 'border-2 border-blue-800': game.currentPlayerIndex === 0 }]"
    >
      <button
        @click="takeTurn(0)"
        class="flex flex-col items-center justify-center"
      >
        <div>{{ player_1.attempts }}</div>
        <div class="text-4xl">
          {{ player_1.number }}
        </div>
      </button>
      <button @click="finishRolling(0)">
        {{ player_1.finish ? 'все' : 'Завершить' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { Player } from '../../../entities/player'
import { Game } from '../../../entities/game'

const game = reactive<Game>(
  new Game({
    players: [
      new Player({ name: 'Игрок 1', attempts: 10 }),
      new Player({ name: 'Игрок 2', attempts: 10 })
    ],
    maxNumber: 10000
  })
)

const takeTurn = (playerIndex: number) => {
  game.takeTurn({ playerIndex })
}

const finishRolling = (playerIndex: number) => {
  game.takeTurn({ playerIndex, type: 'stop' })
}

const player_1 = game.players[0]
const player_2 = game.players[1]

watch(
  () => game.isEndGame,
  isEndGame => {
    if (isEndGame) {
      alert(game.winner === 'Ничья' ? 'Ничья' : `Победил ${game.winner}`)
    }
  }
)
</script>
