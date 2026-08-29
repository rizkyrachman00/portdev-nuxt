<template>
  <main ref="archiveScope" class="flex min-h-screen flex-col font-sans">
    <AppHeader />

    <section class="relative overflow-hidden px-5 pt-20 md:px-10 md:pt-24 lg:px-20">
      <div class="relative mx-auto w-full max-w-[1120px]">
        <div data-archive-header class="relative">
          <div data-archive-intro class="relative">
          <span
            data-archive-work
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

              <h1 data-archive-heading class="mt-6 flex flex-col gap-0 lg:mt-8">
                <span
                  class="text-[44px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[64px] md:tracking-[-3px] lg:text-[80px] lg:tracking-[-3.6px]"
                >
                  Projects built for
                </span>
                <span
                  class="text-[44px] font-medium leading-[1] tracking-[-2px] text-[#15151566] md:text-[64px] md:tracking-[-3px] lg:text-[80px] lg:tracking-[-3.6px]"
                >
                  products, systems,
                </span>
                <span
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
          :variant="archiveCardLayout(filteredProjects.length, index).variant"
          :class="archiveCardLayout(filteredProjects.length, index).spanClass"
        />
      </div>
    </section>

    <section class="px-5 pb-14 md:px-10 md:pb-16 lg:px-20">
      <div
        data-archive-contact
        class="relative mx-auto w-full max-w-[1120px] overflow-hidden border-t border-ink-200"
      >
        <span
          data-archive-mark
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 right-2 z-0 select-none font-sans text-[120px] font-medium leading-[0.8] tracking-[-0.04em] text-[#15151508] md:right-4 md:text-[160px] lg:text-[200px]"
        >
          R/
        </span>

        <div class="relative z-10 flex flex-col gap-6 py-8 md:py-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-0">
          <h2 data-archive-contact-heading class="flex flex-col gap-0 lg:col-span-4">
            <span class="text-[36px] font-medium leading-[1] tracking-[-1.4px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:whitespace-nowrap">
              Have a project
            </span>
            <span class="text-[36px] font-medium leading-[1] tracking-[-1.4px] text-[#15151566] md:text-[48px] md:tracking-[-2px] lg:whitespace-nowrap">
              in mind?
            </span>
          </h2>

          <p
            data-archive-contact-copy
            class="max-w-[380px] font-sans text-[14px] font-normal leading-[1.5] text-ink-700 md:text-[15px] lg:col-span-3 lg:col-start-5"
          >
            I'm open to building reliable systems, clean codebases, and
            maintainable products.
          </p>

          <ButtonBase
            data-archive-contact-cta
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
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { projects } from '~/data/projects'
import { contactEmail } from '~/data/contact'
import { filterProjectsByCategory, projectCategories, archiveCardLayout } from '~/utils/workArchive'

gsap.registerPlugin(Flip, ScrollTrigger, SplitText)

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

watch(
  filteredProjects,
  async () => {
    if (!archiveGrid.value) return
    if (reducedMotion.value) return

    const currentCards = archiveGrid.value.querySelectorAll<HTMLElement>('[data-archive-card]')
    const state = Flip.getState(currentCards)
    await nextTick()

    const nextCards = archiveGrid.value.querySelectorAll<HTMLElement>('[data-archive-card]')

    Flip.from(state, {
      targets: nextCards,
      duration: 0.55,
      ease: 'power3.inOut',
      stagger: 0.02,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        ),
      onComplete: () => ScrollTrigger.refresh(),
    })
  },
)

useScrollReveal(archiveScope, () => {
  if (!archiveScope.value) return

  const scope = archiveScope.value
  const header = scope.querySelector<HTMLElement>('[data-archive-header]')
  const intro = scope.querySelector<HTMLElement>('[data-archive-intro]')
  const eyebrow = scope.querySelector<HTMLElement>('[data-archive-eyebrow]')
  const heading = scope.querySelector<HTMLElement>('[data-archive-heading]')
  const copy = scope.querySelector<HTMLElement>('[data-archive-copy]')
  const filters = scope.querySelector<HTMLElement>('[data-archive-filters]')
  const filterButtons = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-archive-filter]'),
  )
  const count = scope.querySelector<HTMLElement>('[data-archive-count]')
  const work = scope.querySelector<HTMLElement>('[data-archive-work]')
  const contact = scope.querySelector<HTMLElement>('[data-archive-contact]')
  const contactHeading = scope.querySelector<HTMLElement>('[data-archive-contact-heading]')
  const contactCopy = scope.querySelector<HTMLElement>('[data-archive-contact-copy]')
  const contactCta = scope.querySelector<HTMLElement>('[data-archive-contact-cta]')
  const mark = scope.querySelector<HTMLElement>('[data-archive-mark]')
  const cards = Array.from(scope.querySelectorAll<HTMLElement>('[data-archive-card]'))

  if (
    !header || !intro || !eyebrow || !heading || !copy || !filters ||
    !count || !work || !contact || !contactHeading || !contactCopy || !contactCta || !mark
  ) return

  let split: SplitText | undefined

  split = SplitText.create(heading, { type: 'words' })
  const words = split.words as HTMLElement[]
  const wordFrom = [
    { x: -3, y: -9, rotation: -0.5 },
    { x: 2, y: -8, rotation: 0.4 },
    { x: -2, y: -10, rotation: -0.35 },
    { x: 3, y: 1, rotation: 0.5 },
    { x: -3, y: -1, rotation: -0.4 },
    { x: 2, y: 1, rotation: 0.35 },
    { x: -2, y: 9, rotation: -0.45 },
    { x: 3, y: 10, rotation: 0.4 },
    { x: -3, y: 8, rotation: -0.5 },
    { x: 2, y: 9, rotation: 0.35 },
  ]
  const pillFrom = [
    { y: 2, rotation: -0.15 },
    { y: -2, rotation: 0.15 },
    { y: 2, rotation: -0.1 },
    { y: -2, rotation: 0.1 },
    { y: 2, rotation: -0.15 },
    { y: -2, rotation: 0.15 },
  ]

  gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: 0,
      end: () => window.innerHeight * 0.45,
      scrub: true,
      invalidateOnRefresh: true,
    },
  })
    .fromTo(
      eyebrow,
      { x: -8, autoAlpha: 0.7 },
      { x: 0, autoAlpha: 1, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      words,
      {
        x: (index: number) => wordFrom[index % wordFrom.length]?.x ?? 0,
        y: (index: number) => wordFrom[index % wordFrom.length]?.y ?? 0,
        rotation: (index: number) => wordFrom[index % wordFrom.length]?.rotation ?? 0,
      },
      { x: 0, y: 0, rotation: 0, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      copy,
      { x: 10, y: 6, rotation: 0.25, autoAlpha: 0.82 },
      { x: 0, y: 0, rotation: 0, autoAlpha: 1, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      filterButtons,
      {
        y: (index: number) => pillFrom[index % pillFrom.length]?.y ?? 0,
        rotation: (index: number) => pillFrom[index % pillFrom.length]?.rotation ?? 0,
      },
      { y: 0, rotation: 0, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      count,
      { y: 4, autoAlpha: 0.85 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'none' },
      0,
    )

  const cardFrom = [
    { x: -7, y: 4, rotation: -1.2, scale: 0.985 },
    { x: 6, y: -5, rotation: 1, scale: 0.98 },
    { x: -5, y: 6, rotation: -0.8, scale: 0.99 },
    { x: 8, y: -3, rotation: 1.2, scale: 0.985 },
  ]

  cards.forEach((card, index) => {
    const preset = cardFrom[index % cardFrom.length] ?? { x: 0, y: 0, rotation: 0, scale: 0.985 }
    const number = card.querySelector<HTMLElement>('[data-archive-card-index]')
    const summary = card.querySelector<HTMLElement>('[data-archive-card-summary]')
    const image = card.querySelector<HTMLElement>('[data-archive-card-image]')
    const arrow = card.querySelector<HTMLElement>('[data-archive-card-arrow]')
    const numberText = number?.textContent?.trim() ?? ''
    const fromLeft = index % 2 === 0

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 92%',
        end: 'clamp(bottom 52%)',
        scrub: 0.7,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.progress === 1) timeline.progress(1)
        },
      },
    })

    timeline.fromTo(
      card,
      { autoAlpha: 0.95, x: preset.x, y: preset.y, rotation: preset.rotation, scale: preset.scale },
      { autoAlpha: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 0.55, ease: 'none' },
      0.02,
    )

    if (number) {
      timeline.fromTo(
        number,
        { autoAlpha: 0.45, textContent: '00' },
        {
          autoAlpha: 1,
          duration: 0.3,
          ease: 'none',
          scrambleText: {
            text: numberText,
            chars: '0123456789',
            speed: 0.8,
          },
        },
        0.06,
      )
    }

    if (summary) {
      timeline.fromTo(
        summary,
        { autoAlpha: 0.92 },
        { autoAlpha: 1, duration: 0.3, ease: 'none' },
        0.08,
      )
    }

    if (image) {
      timeline.fromTo(
        image,
        { x: fromLeft ? -6 : 6, scale: 1.015 },
        { x: 0, scale: 1, duration: 0.5, ease: 'none' },
        0.1,
      )
    }

    if (arrow) {
      timeline.fromTo(
        arrow,
        { rotation: fromLeft ? -5 : 5 },
        { rotation: 0, duration: 0.4, ease: 'none' },
        0.12,
      )
    }
  })

  const contactSplit = SplitText.create(contactHeading, { type: 'words' })
  const contactWords = contactSplit.words as HTMLElement[]
  const contactWordFrom = [
    { x: -3, y: -9, rotation: -0.5 },
    { x: 2, y: -8, rotation: 0.4 },
    { x: -2, y: -10, rotation: -0.35 },
    { x: 3, y: 9, rotation: 0.45 },
    { x: -3, y: 10, rotation: -0.4 },
  ]
  const contactCopySplit = SplitText.create(contactCopy, { type: 'lines' })
  const contactCopyLines = contactCopySplit.lines as HTMLElement[]
  const contactCopyLineFrom = [
    { x: -4, y: 3, rotation: -0.3 },
    { x: 3, y: -2, rotation: 0.25 },
    { x: -3, y: 2, rotation: -0.2 },
  ]
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: 'top bottom',
      end: 'clamp(bottom 52%)',
      scrub: 0.9,
      invalidateOnRefresh: true,
    },
  })

  contactTimeline
    .fromTo(
      contactWords,
      {
        x: (index: number) => contactWordFrom[index % contactWordFrom.length]?.x ?? 0,
        y: (index: number) => contactWordFrom[index % contactWordFrom.length]?.y ?? 0,
        rotation: (index: number) => contactWordFrom[index % contactWordFrom.length]?.rotation ?? 0,
      },
      { x: 0, y: 0, rotation: 0, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      contactCopyLines,
      {
        x: (index: number) => contactCopyLineFrom[index % contactCopyLineFrom.length]?.x ?? 0,
        y: (index: number) => contactCopyLineFrom[index % contactCopyLineFrom.length]?.y ?? 0,
        rotation: (index: number) => contactCopyLineFrom[index % contactCopyLineFrom.length]?.rotation ?? 0,
      },
      { x: 0, y: 0, rotation: 0, duration: 1, ease: 'none' },
      0,
    )
    .fromTo(
      contactCta,
      { x: 6, y: 4, rotation: 0.5, scale: 0.99 },
      { x: 0, y: 0, rotation: 0, scale: 1, duration: 1, ease: 'none' },
      0,
    )

  gsap.fromTo(work, { x: -6 }, {
    x: 6,
    ease: 'none',
    scrollTrigger: {
      trigger: scope,
      start: 'top bottom',
      end: 'clamp(bottom top)',
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  })

  gsap.fromTo(mark, { x: 6 }, {
    x: -6,
    ease: 'none',
    scrollTrigger: {
      trigger: scope,
      start: 'top bottom',
      end: 'clamp(bottom top)',
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  })

  return () => {
    split?.revert()
    contactSplit.revert()
    contactCopySplit.revert()
  }
})
</script>
