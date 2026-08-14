<template>
    <div class="grid grid-cols-[72px_36px_1fr] items-start gap-0 sm:grid-cols-[120px_36px_1fr] lg:grid-cols-[216px_54px_1fr]">
      <span
        data-experience-date
        class="whitespace-nowrap pt-[2px] font-mono text-[10px] font-normal leading-[1.2] tracking-[0.4px] sm:pt-1 sm:text-[11px] lg:pt-[3px]"
        :class="dateRangeClasses"
      >
        {{ item.dateRange }}
      </span>

      <div class="flex justify-center pt-[5px] sm:pt-[8px] lg:pt-[9px]">
        <span data-experience-dot class="h-[9px] w-[9px] rounded-full bg-accent" aria-hidden="true" />
      </div>

      <div class="flex flex-col gap-1 lg:flex-row lg:gap-10">
        <h3
          data-experience-role
          class="text-[18px] leading-[1.2] tracking-[-0.8px] sm:text-[24px] lg:w-[260px] lg:text-[27px] lg:tracking-[-1px]"
          :class="titleClasses"
        >
          {{ item.role }}
        </h3>

        <p
          data-experience-description
          class="max-w-[420px] text-[14px] leading-[1.5] sm:text-[15px] lg:text-[17px]"
          :class="descriptionClasses"
        >
          {{ displayText }}
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

const displayText = computed(() => {
  if (props.item.description) {
    return `${props.item.company}. ${props.item.description}`
  }
  return props.item.company
})
</script>
