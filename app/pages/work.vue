<template>
  <main ref="archiveScope" class="flex min-h-screen flex-col font-sans">
    <AppHeader />

    <section class="relative overflow-hidden px-5 pt-20 md:px-10 md:pt-24 lg:px-20">
      <div class="relative mx-auto w-full max-w-[1120px]">
        <div class="relative">
          <span
            aria-hidden="true"
            class="pointer-events-none absolute bottom-0 right-0 z-0 select-none font-sans text-[120px] font-medium leading-[0.8] tracking-[-0.04em] text-[#15151508] md:text-[180px] lg:text-[240px]"
          >
            WORK
          </span>

          <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-end">
            <div class="lg:col-span-9">
              <span
                data-archive-eyebrow
                class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-accent"
              >
                WORK / ARCHIVE
              </span>

              <h1 class="mt-6 flex flex-col gap-0 lg:mt-8">
                <span
                  data-archive-heading-line
                  class="text-[44px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[64px] md:tracking-[-3px] lg:text-[80px] lg:tracking-[-3.6px]"
                >
                  Projects built for
                </span>
                <span
                  data-archive-heading-line
                  class="text-[44px] font-medium leading-[1] tracking-[-2px] text-[#15151566] md:text-[64px] md:tracking-[-3px] lg:text-[80px] lg:tracking-[-3.6px]"
                >
                  products, systems,
                </span>
                <span
                  data-archive-heading-line
                  class="text-[44px] font-medium leading-[1] tracking-[-2px] text-[#1515152E] md:text-[64px] md:tracking-[-3px] lg:text-[80px] lg:tracking-[-3.6px]"
                >
                  and real workflows.
                </span>
              </h1>
            </div>

            <p
              data-archive-copy
              class="mt-6 max-w-[420px] font-sans text-[14px] font-normal leading-[1.5] text-ink-700 md:mt-8 md:text-[15px] lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pb-2"
            >
              Production work and learning projects across backend, web, mobile, and
              infrastructure.
            </p>
          </div>
        </div>

        <div
          data-archive-filters
          class="mt-10 flex items-center gap-2 overflow-x-auto border-t border-ink-200 pb-2 pt-5 md:mt-12 md:gap-2.5"
          role="group"
          aria-label="Filter projects by category"
        >
          <button
            v-for="filter in filterOptions"
            :key="filter.value"
            data-archive-filter
            type="button"
            :aria-pressed="selectedCategory === filter.value"
            class="shrink-0 cursor-pointer rounded-full border px-4 py-2 font-mono text-[10px] font-normal uppercase tracking-[0.8px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-5 md:py-2.5 md:text-[11px]"
            :class="
              selectedCategory === filter.value
                ? 'border-ink-900 bg-ink-900 text-surface'
                : 'border-ink-200 bg-transparent text-ink-700 hover:border-ink-400 hover:text-ink-900'
            "
            @click="selectedCategory = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <p
          data-archive-count
          class="mt-3 font-mono text-[10px] font-normal uppercase tracking-[0.8px] text-ink-400"
        >
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS' }}
        </p>
      </div>
    </section>

    <section class="px-5 py-12 md:px-10 md:py-14 lg:px-20">
      <div
        ref="archiveGrid"
        class="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-12"
      >
        <WorkArchiveCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :archive-index="project.archiveIndex || project.index"
          :variant="project.archiveVariant ?? archiveCardLayout(filteredProjects.length, index).variant"
          :class="[
            archiveCardLayout(filteredProjects.length, index).spanClass,
            archiveCardLayout(filteredProjects.length, index).tabletSpanClass,
          ]"
        />
      </div>
    </section>

    <section class="px-5 pb-14 md:px-10 md:pb-16 lg:px-20">
      <div
        data-archive-contact
        class="relative mx-auto w-full max-w-[1120px] overflow-hidden border-t border-ink-200"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 right-2 z-0 select-none font-sans text-[120px] font-medium leading-[0.8] tracking-[-0.04em] text-[#15151508] md:right-4 md:text-[160px] lg:text-[200px]"
        >
          R/
        </span>

        <div class="relative z-10 flex flex-col gap-6 py-8 md:py-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-0">
          <h2 class="flex flex-col gap-0 lg:col-span-4">
            <span class="text-[36px] font-medium leading-[1] tracking-[-1.4px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:whitespace-nowrap">
              Have a project
            </span>
            <span class="text-[36px] font-medium leading-[1] tracking-[-1.4px] text-[#15151566] md:text-[48px] md:tracking-[-2px] lg:whitespace-nowrap">
              in mind?
            </span>
          </h2>

          <p
            class="max-w-[380px] font-sans text-[14px] font-normal leading-[1.5] text-ink-700 md:text-[15px] lg:col-span-3 lg:col-start-5"
          >
            I'm open to building reliable systems, clean codebases, and
            maintainable products.
          </p>

          <ButtonBase
            :to="contactEmail"
            variant="accent"
            icon="ph:arrow-up-right"
            class="self-start lg:col-span-2 lg:col-start-8 lg:self-auto"
          >
            LET'S TALK
          </ButtonBase>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ProjectCategory } from '~/types'
import { projects } from '~/data/projects'
import { contactEmail } from '~/data/contact'
import { filterProjectsByCategory, projectCategories, archiveCardLayout } from '~/utils/workArchive'

useSeoMeta({
  title: 'Work Archive — Rizky Rachman',
  description:
    'A focused archive of production work and learning projects across backend, web, mobile, and infrastructure.',
})

const selectedCategory = ref<ProjectCategory | 'all'>('all')

const filterOptions = computed(() => [
  { label: 'All', value: 'all' as const },
  ...projectCategories.map((category) => ({
    label: category.charAt(0).toUpperCase() + category.slice(1),
    value: category,
  })),
])

const filteredProjects = computed(() =>
  filterProjectsByCategory(projects, selectedCategory.value),
)

const archiveScope = useTemplateRef<HTMLElement>('archiveScope')
const archiveGrid = useTemplateRef<HTMLElement>('archiveGrid')
const reducedMotion = useReducedMotion()

let gridContext: gsap.Context | undefined
let revealedCards = new WeakSet<HTMLElement>()
const cardTriggers = new Map<HTMLElement, ScrollTrigger>()

function syncGridReveal() {
  if (!archiveGrid.value || reducedMotion.value) return

  for (const [card, trigger] of cardTriggers) {
    if (!card.isConnected) {
      trigger.kill()
      cardTriggers.delete(card)
    }
  }

  const pendingCards = Array.from(
    archiveGrid.value.querySelectorAll<HTMLElement>('[data-archive-card]'),
  ).filter((card) => !revealedCards.has(card))

  if (!pendingCards.length) return

  const revealPendingCards = () => {
    pendingCards.forEach((card) => {
      revealedCards.add(card)

      const tween = gsap.from(card, {
        autoAlpha: 0,
        y: 20,
        duration: 1.2,
        ease: 'editorial',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })

      if (tween.scrollTrigger) cardTriggers.set(card, tween.scrollTrigger)
    })
  }

  if (gridContext) {
    gridContext.add(revealPendingCards)
  } else {
    gridContext = gsap.context(revealPendingCards, archiveGrid.value)
  }
}

watch(filteredProjects, async () => {
  if (!archiveGrid.value || reducedMotion.value) return

  await nextTick()

  ScrollTrigger.refresh()
  syncGridReveal()
})

useScrollReveal(archiveScope, () => {
  if (!archiveScope.value) return

  const scope = archiveScope.value
  const eyebrow = scope.querySelector<HTMLElement>('[data-archive-eyebrow]')
  const headingLines = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-archive-heading-line]'),
  )
  const supportingCopy = scope.querySelector<HTMLElement>('[data-archive-copy]')
  const filterRail = scope.querySelector<HTMLElement>('[data-archive-filters]')
  const filterButtons = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-archive-filter]'),
  )
  const countLabel = scope.querySelector<HTMLElement>('[data-archive-count]')
  const closingBand = scope.querySelector<HTMLElement>('[data-archive-contact]')

  if (
    !eyebrow
    || !headingLines.length
    || !supportingCopy
    || !filterRail
    || !filterButtons.length
    || !countLabel
    || !closingBand
  ) return

  gsap.timeline()
    .from(eyebrow, {
      autoAlpha: 0,
      y: 10,
      duration: 1,
      ease: 'editorial',
    })
    .from(headingLines, {
      autoAlpha: 0,
      y: 20,
      duration: 1.2,
      ease: 'editorial',
      stagger: 0.16,
    }, '>-0.3')
    .from(supportingCopy, {
      autoAlpha: 0,
      y: 16,
      duration: 1.1,
      ease: 'editorial',
    }, '>-0.4')
    .from(countLabel, {
      autoAlpha: 0,
      y: 10,
      duration: 0.9,
      ease: 'editorial',
    }, '>-0.3')

  gsap.from(filterButtons, {
    autoAlpha: 0,
    y: 20,
    duration: 1.2,
    ease: 'editorial',
    stagger: 0.06,
    scrollTrigger: {
      trigger: filterRail,
      start: 'top 88%',
      toggleActions: 'play none none reverse',
    },
  })

  gsap.from(closingBand, {
    autoAlpha: 0,
    y: 20,
    duration: 1.2,
    ease: 'editorial',
    scrollTrigger: {
      trigger: closingBand,
      start: 'top 88%',
      toggleActions: 'play none none reverse',
    },
  })

  syncGridReveal()

  return () => {
    revealedCards = new WeakSet<HTMLElement>()
    cardTriggers.forEach((trigger) => trigger.kill())
    cardTriggers.clear()
    gridContext?.revert()
    gridContext = undefined
  }
})
</script>
