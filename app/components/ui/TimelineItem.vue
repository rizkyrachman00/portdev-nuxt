<template>
  <div class="grid grid-cols-[100px_20px_1fr] items-start gap-0 sm:grid-cols-[140px_28px_1fr] lg:grid-cols-[216px_54px_1fr]">
    <span
      class="pt-[2px] font-mono text-[11px] font-normal leading-[1.2] tracking-[0.4px] sm:pt-1 lg:pt-[3px]"
      :class="dateRangeClasses"
    >
      {{ item.dateRange }}
    </span>

    <div class="flex justify-center pt-[6px] sm:pt-[8px] lg:pt-[9px]">
      <span class="h-[9px] w-[9px] rounded-full bg-accent" aria-hidden="true" />
    </div>

    <div class="flex flex-col gap-1 sm:flex-row sm:gap-6 lg:gap-10">
      <h3
        class="text-[20px] leading-[1.2] tracking-[-0.8px] sm:text-[24px] lg:w-[260px] lg:text-[27px] lg:tracking-[-1px]"
        :class="titleClasses"
      >
        {{ item.role }}
      </h3>

      <p
        v-if="item.description"
        class="mt-1 max-w-[420px] text-[15px] leading-[1.5] sm:mt-0 lg:text-[17px]"
        :class="descriptionClasses"
      >
        {{ item.company }}. {{ item.description }}
      </p>
      <p
        v-else
        class="mt-1 max-w-[420px] text-[15px] leading-[1.5] sm:mt-0 lg:text-[17px]"
        :class="descriptionClasses"
      >
        {{ item.company }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ExperienceItem } from '~/types'

interface Props {
  item: ExperienceItem
  index: number
}

const props = defineProps<Props>()

const dateRangeClasses = computed(() => {
  if (props.index === 0) {
    return 'text-ink-700'
  }
  return 'text-[#1515158A]'
})

const titleClasses = computed(() => {
  if (props.index === 0) {
    return 'font-medium text-ink-900'
  }
  return 'font-normal text-ink-700'
})

const descriptionClasses = computed(() => {
  if (props.index === 0) {
    return 'text-ink-700'
  }
  return 'text-[#1515158A]'
})
</script>
