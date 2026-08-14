<template>
  <a
    :href="project.link || '#'"
    class="group flex w-full items-center gap-2 transition-colors hover:text-accent"
    :class="align === 'baseline' ? 'h-[66px] items-end pb-4' : 'h-[66px] items-center'"
  >
    <span
      class="w-6 font-mono text-[10px] font-normal tracking-[0.8px] text-[#15151566]"
    >
      {{ project.index }}
    </span>
    <span
      class="flex-1 font-sans text-[16px] font-semibold text-ink-900 transition-colors group-hover:text-accent"
    >
      {{ project.title }}
    </span>
    <Icon
      name="ph:arrow-up-right-thin"
      class="h-[18px] w-[18px] text-ink-900 transition-colors transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
    />
  </a>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
  align?: 'center' | 'baseline'
}

withDefaults(defineProps<Props>(), {
  align: 'center',
})
</script>
