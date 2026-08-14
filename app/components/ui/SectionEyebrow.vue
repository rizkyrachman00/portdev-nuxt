<template>
  <span
    class="font-mono text-[11px] font-normal uppercase tracking-[0.8px]"
    :class="colorClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: 'default' | 'accent'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default',
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'accent':
      return 'text-accent'
    default:
      return 'text-ink-400'
  }
})
</script>
