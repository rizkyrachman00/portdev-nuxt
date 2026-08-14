<template>
  <section
    ref="selectedWorkScope"
    class="flex w-full flex-col items-center gap-16 px-5 py-[100px] md:px-10 md:py-[120px] lg:gap-[120px] lg:px-20 lg:py-[160px]"
  >
    <div data-work-header class="relative w-full max-w-[1120px] lg:h-[300px]">
      <div data-work-heading class="relative flex flex-col gap-1">
        <span
          data-work-focus-rail
          aria-hidden="true"
          class="invisible pointer-events-none absolute -left-3 top-0 h-full w-px origin-top bg-accent"
        />
        <span
          data-work-focus-node
          aria-hidden="true"
          class="invisible pointer-events-none absolute -left-[15px] top-0 h-1.5 w-1.5 rounded-full bg-accent"
        />
        <h2
          data-work-heading-line
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          Selected work.
        </h2>
        <h2
          data-work-heading-line
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151580] md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          Built from backend
        </h2>
        <h2
          data-work-heading-line
          class="font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#1515152E] md:text-[72px] md:tracking-[-3px] lg:text-[92px] lg:tracking-[-4px]"
        >
          to production.
        </h2>
      </div>

      <p
        data-work-copy
        class="mt-6 max-w-[360px] font-sans text-[14px] font-normal leading-[1.5] text-ink-700 lg:absolute lg:right-0 lg:top-[224px] lg:mt-0"
      >
        Production work and selected projects across backend, web, mobile, and infrastructure.
      </p>

      <span
        data-work-counter
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
import { gsap } from 'gsap'
import { projects } from '~/data/projects'

const selectedWorkScope = useTemplateRef<HTMLElement>('selectedWorkScope')

useScrollReveal(selectedWorkScope, () => {
  if (!selectedWorkScope.value) return

  const header = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-header]')
  const heading = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-heading]')
  const focusRail = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-focus-rail]')
  const focusNode = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-focus-node]')
  const headingLines = Array.from(
    selectedWorkScope.value.querySelectorAll<HTMLElement>('[data-work-heading-line]'),
  )
  const supportingCopy = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-copy]')
  const projectCounter = selectedWorkScope.value.querySelector<HTMLElement>('[data-work-counter]')

  if (
    !header
    || !heading
    || !focusRail
    || !focusNode
    || !headingLines.length
    || !supportingCopy
    || !projectCounter
  ) return

  gsap.set(focusRail, { autoAlpha: 1, scaleY: 0 })
  gsap.set(focusNode, { autoAlpha: 0, y: 0 })
  gsap.set(headingLines, { autoAlpha: 0.55 })
  gsap.set(supportingCopy, { clipPath: 'inset(0 100% 0 0)' })
  gsap.set(projectCounter, { autoAlpha: 0.25 })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: 'top 86%',
      end: 'bottom 42%',
      scrub: 0.9,
      invalidateOnRefresh: true,
    },
  })

  timeline
    .to(focusRail, { scaleY: 1, duration: 0.86, ease: 'none' }, 0)
    .to(focusNode, { autoAlpha: 1, duration: 0.03, ease: 'none' }, 0)
    .to(focusNode, {
      y: () => Math.max(0, heading.clientHeight - focusNode.offsetHeight),
      duration: 0.86,
      ease: 'none',
      force3D: true,
    }, 0)

  headingLines.forEach((line, index) => {
    const activationPoint = 0.06 + index * 0.28

    timeline
      .to(line, {
        autoAlpha: 1,
        scale: 1.008,
        duration: 0.05,
        ease: 'sine.out',
        force3D: true,
        transformOrigin: 'left center',
      }, activationPoint)
      .to(line, {
        scale: 1,
        duration: 0.09,
        ease: 'sine.inOut',
        force3D: true,
      }, activationPoint + 0.05)
  })

  timeline
    .to(supportingCopy, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 0.14,
      ease: 'none',
    }, 0.76)
    .to(projectCounter, { autoAlpha: 1, duration: 0.08, ease: 'none' }, 0.82)
    .to([focusRail, focusNode], { autoAlpha: 0, duration: 0.1, ease: 'none' }, 0.9)
})

const lovaryProject = projects.find((project) => project.id === 'lovary-commerce')
const blackboxProject = projects.find((project) => project.id === 'blackboxgym')
const miniecomProject = projects.find((project) => project.id === 'miniecom-api')
const minibookticketProject = projects.find((project) => project.id === 'minibookticket')
const offlineAttendanceProject = projects.find((project) => project.id === 'offline-attendance')
const vpsMigrationProject = projects.find((project) => project.id === 'vps-migration')
</script>
