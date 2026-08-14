<template>
  <section class="flex w-full flex-col items-center gap-16 px-5 py-[100px] md:px-10 md:py-[120px] lg:gap-[120px] lg:px-20 lg:py-[160px]">
    <div class="relative w-full max-w-[1120px] lg:h-[300px]">
      <div class="flex flex-col gap-1">
        <h2
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          Selected work.
        </h2>
        <h2
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151580] md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          Built from backend
        </h2>
        <h2
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#1515152E] md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          to production.
        </h2>
      </div>

      <p
        class="mt-6 max-w-[360px] font-sans text-[14px] font-normal leading-[1.5] text-ink-700 lg:absolute lg:right-0 lg:top-[224px] lg:mt-0"
      >
        Production work and selected projects across backend, web, mobile, and infrastructure.
      </p>

      <span
        class="mt-4 block font-mono text-[10px] font-normal uppercase tracking-[0.8px] text-[#15151566] lg:absolute lg:right-0 lg:top-5 lg:mt-0 lg:text-[11px]"
      >
        01—06
      </span>
    </div>

    <ProjectChapter
      v-if="lovaryProject"
      :project="lovaryProject"
      image-position="right"
      ghost-title="LOVARY COMMERCE"
      :top-aside-project="miniecomProject"
      :bottom-aside-project="minibookticketProject"
      class="w-full max-w-[1120px]"
    />

    <ProjectChapter
      v-if="blackboxProject"
      :project="blackboxProject"
      image-position="left"
      ghost-title="MOBILE + SYSTEMS"
      :top-aside-project="offlineAttendanceProject"
      :bottom-aside-project="vpsMigrationProject"
      class="w-full max-w-[1120px]"
    />
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const lovaryProject = projects.find((project) => project.id === 'lovary-commerce')
const blackboxProject = projects.find((project) => project.id === 'blackboxgym')
const miniecomProject = projects.find((project) => project.id === 'miniecom-api')
const minibookticketProject = projects.find((project) => project.id === 'minibookticket')
const offlineAttendanceProject = projects.find((project) => project.id === 'offline-attendance')
const vpsMigrationProject = projects.find((project) => project.id === 'vps-migration')
</script>
