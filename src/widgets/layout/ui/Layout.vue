<template>
  <component :is="component">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import LayoutDefault from './LayoutDefault.vue'

interface IProps {
  name?: string
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'default'
})

const layouts: Record<string, Component> = {
  'default': LayoutDefault
}

const component = computed(() => {
  return layouts[props.name ?? 'default']
})
</script>
