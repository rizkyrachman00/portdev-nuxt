<template>
  <article class="relative w-full">
    <h3
      v-if="ghostTitle"
      class="pointer-events-none z-0 mb-4 font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151512] md:mb-6 md:text-[64px] lg:absolute lg:top-0 lg:mb-0 lg:w-full lg:text-[94px] lg:tracking-[-4.5px]"
      :class="imagePosition === 'left' ? 'lg:text-right' : 'lg:text-left'"
    >
      {{ ghostTitle }}
    </h3>

    <div
      v-if="topAsideProject"
      class="relative z-30 w-full lg:absolute lg:top-[44px] lg:w-[360px]"
      :class="imagePosition === 'left' ? 'lg:left-0' : 'lg:right-0'"
    >
      <div class="border-t border-ink-200">
        <ProjectIndexRow :project="topAsideProject" align="baseline" />
      </div>
    </div>

    <div
      class="relative z-10 flex w-full flex-col gap-8 pt-14 md:pt-20 lg:flex-row lg:items-start lg:gap-5 lg:pt-[120px]"
      :class="imagePosition === 'left' ? 'lg:flex-row-reverse' : ''"
    >
      <div class="w-full lg:w-[370px] lg:shrink-0">
        <FeaturedProjectCard :project="project" />
      </div>

      <div class="w-full lg:flex-1">
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="h-auto w-full rounded-[14px] object-cover"
          sizes="100vw lg:730px"
        />
      </div>
    </div>

    <div
      v-if="bottomAsideProject"
      class="relative z-20 w-full lg:absolute lg:top-[520px] lg:w-[360px]"
      :class="imagePosition === 'left' ? 'lg:right-0' : 'lg:left-0'"
    >
      <div class="border-t border-ink-200">
        <ProjectIndexRow :project="bottomAsideProject" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
  imagePosition?: 'left' | 'right'
  ghostTitle?: string
  topAsideProject?: Project
  bottomAsideProject?: Project
}

withDefaults(defineProps<Props>(), {
  imagePosition: 'right',
})
</script>
