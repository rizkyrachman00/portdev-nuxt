<template>
    <div class="grid grid-cols-[56px_20px_1fr] items-start sm:grid-cols-[72px_28px_1fr_1fr] lg:grid-cols-[310px_50px_230px_1fr]">
      <span
        data-process-number
        class="font-mono text-[32px] font-semibold leading-[1] tracking-[-2px] text-accent-muted lg:text-[44px]"
        aria-hidden="true"
      >
        {{ step.index }}
      </span>

      <div class="flex justify-center pt-[10px] lg:pt-[14px]">
        <span data-process-dot class="h-[9px] w-[9px] rounded-full bg-accent" aria-hidden="true" />
      </div>

      <h3 data-process-title class="col-start-3 pt-[2px] text-[19px] font-semibold leading-[1.2] tracking-[-0.5px] text-ink-900 sm:pt-[4px] lg:pt-[4px] lg:text-[23px]">
        {{ step.title }}
      </h3>

      <p data-process-description class="col-span-3 col-start-3 mt-1 max-w-[500px] text-[15px] leading-[1.45] text-ink-700 sm:col-span-1 sm:col-start-4 sm:mt-0 sm:pt-[4px] lg:pt-[6px]">
        {{ step.description }}
      </p>
    </div>
</template>

<script setup lang="ts">
import type { ProcessStep } from '~/types'

interface Props {
  step: ProcessStep
}

defineProps<Props>()
</script>
