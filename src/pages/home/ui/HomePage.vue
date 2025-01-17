<template>
  <layout>
    <div class="min-h-screen flex flex-col items-center">
      <ul class="flex flex-col items-center m-auto">
        <li>
          <button
            class="grid gap-8 items-start justify-center"
            @click="$router.push({ name: 'game.index' })"
          >
            <div class="relative group">
              <div
                class="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              ></div>
              <div
                class="relative px-7 py-4 bg-neutral-950 rounded-lg leading-none flex items-center divide-x divide-gray-600"
              >
                <span class="flex items-center space-x-5">
                  <span
                    class="text-4xl group-hover:text-gray-100 transition duration-200"
                  >
                    Играть
                  </span>
                </span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </layout>
</template>

<script setup lang="ts">
import { Layout } from '../../../widgets/layout'
</script>
