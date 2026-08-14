<template>
  <section class="relative w-full px-5 py-[100px] md:px-10 lg:px-20 lg:py-[120px]">
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Introduction -->
      <div class="relative mb-10 lg:mb-[30px]">
        <span class="font-mono text-[10px] font-normal tracking-[1px] text-accent">
          AI-assisted · Engineering-led
        </span>

        <div class="mt-6 flex flex-col gap-0">
          <h2 class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-ink-900 sm:text-[56px] lg:text-[64px]">
            AI moves fast.
          </h2>
          <h2 class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-[#15151580] sm:text-[56px] lg:text-[64px]">
            Engineering stays
          </h2>
          <h2 class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-[#1515152E] sm:text-[56px] lg:text-[64px]">
            accountable.
          </h2>
        </div>

        <p class="mt-6 max-w-[360px] text-[16px] leading-[1.5] text-ink-700 lg:absolute lg:right-0 lg:top-[42px] lg:mt-0 lg:text-[18px]">
          AI accelerates research, implementation, and debugging while architecture, testing, and reliability remain engineer-led.
        </p>
      </div>

      <!-- Process steps -->
      <div class="relative">
        <!-- Vertical spine -->
        <div
          class="absolute left-[28px] top-[26px] h-[calc(100%-52px)] w-px bg-ink-200 sm:left-[36px] lg:left-[334px] lg:top-[30px]"
          aria-hidden="true"
        />

        <ul class="relative">
          <li
            v-for="step in processSteps"
            :key="step.index"
            class="border-t border-ink-200 py-5 first:border-t-0 lg:py-6"
          >
            <ProcessStep :step="step" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/process'
</script>
