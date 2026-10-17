<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex w-full items-center justify-between">
      <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-400">
        {{ project.index }} / FEATURED
      </span>
      <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-400">
        {{ project.type }}
      </span>
    </div>

    <h4
      class="font-sans text-[34px] font-semibold leading-[1.05] tracking-[-1.2px] text-ink-900 transition-colors group-hover:text-accent"
    >
      {{ project.title }}
    </h4>

    <p
      class="font-sans text-[13px] font-normal leading-[1.5] text-ink-700"
    >
      {{ project.summary }}
    </p>

    <div class="flex w-full items-center justify-between pt-2">
      <span class="font-mono text-[9px] font-normal tracking-[0.6px] text-ink-400">
        {{ project.stack }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
}

defineProps<Props>()
</script>
