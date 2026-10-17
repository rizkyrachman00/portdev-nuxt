<template>
  <article
    data-archive-card
    class="group relative flex w-full flex-col overflow-hidden rounded-[8px] border border-ink-200 bg-surface transition-colors duration-300 hover:border-ink-400"
  >
    <div
      v-if="variant === 'featured'"
      class="flex w-full flex-col lg:flex-row lg:items-stretch"
    >
      <div class="w-full p-5 md:p-6 lg:w-[46%]">
        <div class="flex w-full items-baseline justify-between gap-4">
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-accent md:text-[11px]">
            {{ archiveIndex }}
          </span>
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-400 md:text-[11px]">
            {{ typeLabel }}
          </span>
        </div>

        <h2 class="mt-4 font-sans text-[26px] font-semibold leading-[1.05] tracking-[-1.2px] text-ink-900 md:text-[30px]">
          {{ project.archiveTitle || project.title }}
        </h2>

        <p class="mt-3 font-sans text-[13px] font-normal leading-[1.5] text-ink-700 md:text-[14px] [text-align:justify]">
          {{ project.archiveSummary || project.summary }}
        </p>

        <div class="mt-4 flex w-full items-center justify-between gap-4">
          <span class="font-mono text-[9px] font-normal tracking-[0.6px] text-ink-400 md:text-[10px]">
            {{ project.stack }}
          </span>
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-900 md:text-[11px]">
            {{ project.year }}
          </span>
        </div>
      </div>

      <div
        v-if="project.archiveImage"
        class="w-full overflow-hidden lg:flex lg:w-[54%]"
      >
        <NuxtImg
          :src="project.archiveImage"
          :alt="`${project.archiveTitle || project.title} interface preview`"
          class="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none lg:h-full"
          :class="project.archiveImagePosition === 'top' ? 'object-top' : 'object-center'"
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    </div>

    <div v-else class="flex w-full flex-1 flex-col">
      <div class="w-full flex-1 p-5 md:p-6">
        <div class="flex w-full items-baseline justify-between gap-4">
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-accent md:text-[11px]">
            {{ archiveIndex }}
          </span>
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-400 md:text-[11px]">
            {{ typeLabel }}
          </span>
        </div>

        <h2 class="mt-4 font-sans text-[22px] font-semibold leading-[1.05] tracking-[-1.2px] text-ink-900 md:text-[24px]">
          {{ project.archiveTitle || project.title }}
        </h2>

        <p class="mt-3 font-sans text-[13px] font-normal leading-[1.5] text-ink-700 md:text-[14px] [text-align:justify]">
          {{ project.archiveSummary || project.summary }}
        </p>

        <div class="mt-4 flex w-full items-center justify-between gap-4">
          <span class="font-mono text-[9px] font-normal tracking-[0.6px] text-ink-400 md:text-[10px]">
            {{ project.stack }}
          </span>
          <span class="font-mono text-[10px] font-normal tracking-[0.8px] text-ink-900 md:text-[11px]">
            {{ project.year }}
          </span>
        </div>
      </div>

      <div
        v-if="project.archiveImage"
        class="w-full overflow-hidden"
      >
        <NuxtImg
          :src="project.archiveImage"
          :alt="`${project.archiveTitle || project.title} interface preview`"
          class="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
          :class="project.archiveImagePosition === 'top' ? 'object-top' : 'object-center'"
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    </div>

    <div class="mt-auto flex w-full items-center justify-between border-t border-ink-200 px-5 py-3 md:px-6">
      <span class="font-mono text-[9px] font-normal uppercase tracking-[0.6px] text-ink-400 md:text-[10px]">
        {{ project.link && project.link !== '#' ? 'VIEW PROJECT' : 'CASE STUDY' }}
      </span>
      <a
        v-if="project.link && project.link !== '#'"
        :href="project.link"
        :aria-label="`Open ${project.archiveTitle || project.title}`"
        target="_blank"
        rel="noopener noreferrer"
        class="text-ink-900 transition-[color,transform] duration-300 ease-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:scale-110 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Icon name="ph:arrow-up-right" class="h-[18px] w-[18px] md:h-5 md:w-5" />
      </a>
      <span v-else aria-hidden="true" class="text-ink-400">
        <Icon name="ph:arrow-up-right" class="h-[18px] w-[18px] md:h-5 md:w-5" />
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ArchiveCardVariant, Project } from '~/types'

interface Props {
  project: Project
  archiveIndex: string
  variant: ArchiveCardVariant
}

const props = defineProps<Props>()

const typeLabel = computed(() => props.project.type.replace(/\s·\s\d{4}$/, ''))
</script>
