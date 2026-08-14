<template>
  <section class="relative w-full px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[160px]">
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Headline block -->
      <div class="relative mb-20 h-[200px] md:mb-24 md:h-[240px] lg:mb-[120px] lg:h-[210px]">
        <span class="absolute left-0 top-0 text-[100px] font-medium leading-[0.9] tracking-[-5px] text-accent md:text-[120px] lg:text-[132px] lg:tracking-[-7px]">
          ≈2
        </span>

        <div class="absolute left-[120px] top-[10px] flex flex-col md:left-[160px] lg:left-[190px] lg:top-[20px]">
          <h2 class="text-[40px] font-medium leading-[1.3] tracking-[-2px] text-ink-900 md:text-[56px] lg:text-[68px] lg:tracking-[-2.8px]">
            YEARS OF PRODUCT
          </h2>
          <h2 class="text-[40px] font-medium leading-[1.3] tracking-[-2px] text-[#15151540] md:text-[56px] lg:text-[68px] lg:tracking-[-2.8px]">
            ENGINEERING.
          </h2>
        </div>

        <p class="absolute bottom-0 right-0 max-w-[302px] text-[14px] leading-[1.5] text-ink-700">
          Hands-on experience across business systems, APIs, mobile workflows, infrastructure, and production delivery.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical spine -->
        <div
          class="absolute left-[60px] top-[24px] h-[calc(100%-48px)] w-px -translate-x-1/2 bg-ink-200 sm:left-[84px] md:left-[92px] lg:left-[243px]"
          aria-hidden="true"
        />

        <ul class="relative flex flex-col">
          <li
            v-for="(item, index) in experienceItems"
            :key="item.id"
            class="border-t border-ink-200 py-6 lg:min-h-[118px] lg:py-7"
          >
            <TimelineItem :item="item" :index="index" />
          </li>
        </ul>
      </div>

      <!-- Skills index -->
      <div class="mt-12 border-t border-ink-200 pt-8 lg:mt-16 lg:pt-10">
        <ul class="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          <li
            v-for="group in skillGroups"
            :key="group.index"
            class="flex flex-col gap-[6px]"
          >
            <span class="font-mono text-[11px] font-normal leading-[1] text-accent">
              {{ group.index }}
            </span>
            <span class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]">
              {{ group.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experienceItems } from '~/data/experience'
import { skillGroups } from '~/data/skills'
</script>
