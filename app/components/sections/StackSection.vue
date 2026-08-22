<template>
  <section
    ref="stackScope"
    class="relative w-full overflow-hidden px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[160px]"
  >
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Header -->
      <div class="mb-14 lg:mb-20 lg:grid lg:grid-cols-12 lg:gap-px">
        <div class="flex flex-col gap-3 lg:col-span-8">
          <div class="flex items-center gap-2">
            <span class="h-[6px] w-[6px] rounded-full bg-accent" aria-hidden="true" />
            <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400">
              Stack / 05
            </span>
          </div>

          <h2 class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-ink-900 sm:text-[56px] lg:text-[64px]">
            Tools I build with.
          </h2>

          <span class="h-[3px] w-[72px] rounded-full bg-accent" aria-hidden="true" />

          <p class="mt-4 max-w-[440px] text-[16px] leading-[1.5] text-ink-700 lg:text-[18px]">
            Chosen for systems, products, and reliable delivery.
          </p>
        </div>

        <div class="relative mt-8 flex items-end lg:col-span-4 lg:mt-0 lg:justify-end">
          <span class="absolute right-0 top-0 font-mono text-[15px] font-normal leading-none text-accent" aria-hidden="true">+</span>
          <p class="max-w-[300px] text-[14px] leading-[1.5] text-ink-700">
            A compact toolkit for building performant applications with clarity and confidence.
          </p>
        </div>
      </div>

      <!-- Capability grid -->
      <div class="grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-12">
        <div
          v-for="category in stackCategories"
          :key="category.index"
          class="relative flex flex-col overflow-hidden bg-bg md:col-span-1"
          :class="gridSpanClass(category.index)"
        >
          <!-- Ghost category word -->
          <span
            class="pointer-events-none absolute bottom-[-6px] left-4 z-0 select-none whitespace-nowrap text-[80px] font-medium leading-[0.8] tracking-[-4px] text-[#15151512] lg:bottom-[-4px] lg:left-6 lg:text-[104px]"
            aria-hidden="true"
          >
            {{ category.ghostLabel }}
          </span>

          <!-- Oversized mark(s) -->
          <img
            v-if="category.marks.length === 1"
            :src="category.marks[0].src"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute z-10 h-auto select-none"
            :class="markClass(category.marks[0].name)"
          />
          <div
            v-else
            class="pointer-events-none absolute bottom-0 right-0 z-10 flex select-none"
            :class="markGroupClass(category.index)"
          >
            <img
              v-for="mark in category.marks"
              :key="mark.name"
              :src="mark.src"
              alt=""
              aria-hidden="true"
              class="h-auto"
              :class="groupedMarkClass(mark.name)"
            />
          </div>

          <!-- Content -->
          <div class="relative z-20 flex flex-col gap-2 p-5 lg:p-6">
            <span class="font-mono text-[11px] font-normal text-accent">
              {{ category.index }}
            </span>
            <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400">
              {{ category.label }}
            </span>
            <ul class="mt-2 flex flex-col gap-1">
              <li
                v-for="skill in category.skills"
                :key="skill"
                class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]"
              >
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>

        <!-- AI tooling strip -->
        <div class="relative bg-bg md:col-span-2 lg:col-span-12 lg:grid lg:grid-cols-12">
          <div class="flex flex-col gap-6 p-5 lg:col-span-4 lg:gap-3 lg:p-6 lg:pr-10">
            <div class="flex items-center gap-2">
              <span class="font-mono text-[11px] font-normal text-accent">06</span>
              <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400">
                AI TOOLING
              </span>
            </div>
            <ul class="flex flex-col gap-1">
              <li
                v-for="tool in aiTools"
                :key="tool.name"
                class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]"
              >
                {{ tool.name }}
              </li>
            </ul>
          </div>

          <div class="flex w-full flex-col gap-8 p-5 pt-0 lg:col-span-8 lg:grid lg:grid-cols-3 lg:gap-px lg:bg-ink-200 lg:p-0">
            <a
              v-for="tool in aiTools"
              :key="tool.name"
              :href="tool.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-5 bg-bg"
            >
              <img
                :src="tool.icon"
                :alt="`${tool.name} logo`"
                class="h-12 w-12 shrink-0 select-none lg:h-16 lg:w-16"
              />
              <span class="flex flex-col gap-1.5 lg:gap-2">
                <span class="flex items-center gap-2">
                  <span class="text-[17px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900">
                    {{ tool.name }}
                  </span>
                  <Icon
                    name="ph:arrow-up-right"
                    class="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span class="max-w-[180px] text-[13px] leading-[1.4] text-ink-700">
                  {{ tool.description }}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aiTools, stackCategories } from '~/data/stack'

const stackScope = useTemplateRef<HTMLElement>('stackScope')

function gridSpanClass(index: string) {
  switch (index) {
    case '01':
      return 'lg:col-span-7 lg:min-h-[320px]'
    case '02':
      return 'lg:col-span-5 lg:min-h-[320px]'
    case '03':
      return 'lg:col-span-5 lg:min-h-[270px]'
    case '04':
      return 'lg:col-span-4 lg:min-h-[270px]'
    case '05':
      return 'lg:col-span-3 lg:min-h-[270px]'
    default:
      return 'md:min-h-[280px]'
  }
}

function markClass(name: string) {
  switch (name) {
    case 'Go':
      return 'bottom-[4px] right-[-2px] w-[58%] max-w-[320px] rotate-[4deg]'
    case 'TypeScript':
      return 'bottom-[-6px] right-[-10px] w-[70%] max-w-[320px] rotate-[-8deg]'
    case 'Docker':
      return 'bottom-[-12px] right-[-4px] w-[52%] max-w-[260px]'
    default:
      return 'bottom-0 right-0 w-[40%]'
  }
}

function markGroupClass(index: string) {
  switch (index) {
    case '03':
      return 'bottom-[-6px] w-[62%] items-end gap-[16px]'
    case '04':
      return 'bottom-[-6px] w-[62%] items-end gap-[14px]'
    default:
      return 'bottom-0 w-[62%] items-end gap-[12px]'
  }
}

function groupedMarkClass(name: string) {
  switch (name) {
    case 'PostgreSQL':
      return 'w-[58%] max-w-[200px]'
    case 'Redis':
      return 'w-[38%] max-w-[150px]'
    case 'Flutter':
      return 'w-[56%] max-w-[190px]'
    case 'Expo':
      return 'w-[42%] max-w-[160px]'
    default:
      return 'w-[50%]'
  }
}
</script>
