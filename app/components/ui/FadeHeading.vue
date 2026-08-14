<template>
  <component :is="as" class="flex flex-col">
    <span
      v-for="(line, index) in lines"
      :key="index"
      class="block"
      :class="[sizeClass, colorClass(line)]"
    >
      {{ line.text }}
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Line {
  text: string
  color?: 'ink-900' | 'ink-700' | 'ink-400' | 'ink-200' | 'accent'
  opacity?: '100' | '76' | '66' | '54' | '40' | '25' | '12'
}

interface Props {
  lines: Line[]
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  size?: 'display-xl' | 'display' | 'hero' | 'stat'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h2',
  size: 'display',
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'display-xl':
      return 'text-[96px] font-semibold leading-[1] tracking-[-4.4px]'
    case 'display':
      return 'text-[92px] font-semibold leading-[1] tracking-[-4px]'
    case 'hero':
      return 'text-[60px] font-semibold leading-[1.1] tracking-[-2.5px]'
    case 'stat':
      return 'text-[132px] font-semibold leading-[0.9] tracking-[-7px]'
    default:
      return 'text-[92px] font-semibold leading-[1] tracking-[-4px]'
  }
})

function colorClass(line: Line) {
  if (line.color) {
    switch (line.color) {
      case 'ink-900':
        return 'text-ink-900'
      case 'ink-700':
        return 'text-ink-700'
      case 'ink-400':
        return 'text-ink-400'
      case 'ink-200':
        return 'text-ink-200'
      case 'accent':
        return 'text-accent'
    }
  }

  switch (line.opacity) {
    case '100':
      return 'text-ink-900'
    case '76':
      return 'text-[#151515C2]'
    case '66':
      return 'text-[#15151566]'
    case '54':
      return 'text-[#1515158A]'
    case '40':
      return 'text-[#15151540]'
    case '25':
      return 'text-[#1515152E]'
    case '12':
      return 'text-[#15151512]'
    default:
      return 'text-ink-900'
  }
}
</script>
