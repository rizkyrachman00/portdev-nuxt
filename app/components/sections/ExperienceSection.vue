<template>
  <section
    ref="experienceScope"
    class="relative w-full px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[160px]"
  >
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Headline block -->
      <div data-experience-header class="mb-16 flex flex-col gap-6 md:mb-20 md:gap-8 lg:relative lg:mb-[120px] lg:block lg:h-[210px]">
        <span
          data-experience-metric
          aria-label="Approximately 2 years"
          class="text-[80px] font-medium leading-[0.85] tracking-[-4px] text-accent md:text-[100px] lg:absolute lg:left-0 lg:top-0 lg:text-[132px] lg:tracking-[-7px]"
        >
          <span data-experience-metric-mark aria-hidden="true">≈</span><span data-experience-metric-number aria-hidden="true">2</span>
        </span>

        <div class="flex flex-col lg:absolute lg:left-[190px] lg:top-[20px]">
          <h2 data-experience-heading-line class="text-[40px] font-medium leading-[1.1] tracking-[-2px] text-ink-900 md:text-[56px] lg:leading-[1.3] lg:text-[68px] lg:tracking-[-2.8px]">
            YEARS OF PRODUCT
          </h2>
          <h2 data-experience-heading-line class="text-[40px] font-medium leading-[1.1] tracking-[-2px] text-[#15151540] md:text-[56px] lg:leading-[1.3] lg:text-[68px] lg:tracking-[-2.8px]">
            ENGINEERING.
          </h2>
        </div>

        <p data-experience-copy class="max-w-[302px] text-[14px] leading-[1.5] text-ink-700 lg:absolute lg:bottom-0 lg:right-0">
          Hands-on experience across business systems, APIs, mobile workflows, infrastructure, and production delivery.
        </p>
      </div>

      <!-- Timeline -->
      <div data-experience-timeline class="relative">
        <!-- Vertical spine -->
        <div
          data-experience-spine
          class="absolute left-[90px] top-[24px] h-[calc(100%-48px)] w-px -translate-x-1/2 bg-ink-200 sm:left-[138px] md:left-[138px] lg:left-[243px]"
          aria-hidden="true"
        />
        <span
          data-experience-progress-line
          aria-hidden="true"
          class="invisible pointer-events-none absolute left-[90px] top-[24px] h-[calc(100%-48px)] w-px -translate-x-1/2 origin-top bg-accent sm:left-[138px] md:left-[138px] lg:left-[243px]"
        />

        <ol class="relative flex flex-col">
          <li
            v-for="(item, index) in experienceItems"
            :key="item.id"
            data-experience-row
            class="border-t border-ink-200 py-6 lg:min-h-[118px] lg:py-7"
          >
            <TimelineItem :item="item" :index="index" />
          </li>
        </ol>
      </div>

      <!-- Skills index -->
      <div data-experience-skills class="mt-12 border-t border-ink-200 pt-8 lg:mt-16 lg:pt-10">
        <ul class="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          <li
            v-for="group in skillGroups"
            :key="group.index"
            data-experience-skill
            class="flex flex-col gap-[6px]"
          >
            <span data-experience-skill-index aria-hidden="true" class="font-mono text-[11px] font-normal leading-[1] text-accent">
              {{ group.index }}
            </span>
            <span data-experience-skill-label class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]">
              {{ group.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { experienceItems } from '~/data/experience'
import { skillGroups } from '~/data/skills'

const experienceScope = useTemplateRef<HTMLElement>('experienceScope')

useScrollReveal(experienceScope, () => {
  if (!experienceScope.value) return

  const scope = experienceScope.value
  const header = scope.querySelector<HTMLElement>('[data-experience-header]')
  const metricMark = scope.querySelector<HTMLElement>('[data-experience-metric-mark]')
  const metricNumber = scope.querySelector<HTMLElement>('[data-experience-metric-number]')
  const headingLines = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-experience-heading-line]'),
  )
  const supportingCopy = scope.querySelector<HTMLElement>('[data-experience-copy]')
  const timelineTrack = scope.querySelector<HTMLElement>('[data-experience-timeline]')
  const progressLine = scope.querySelector<HTMLElement>('[data-experience-progress-line]')
  const rows = Array.from(scope.querySelectorAll<HTMLElement>('[data-experience-row]'))
  const skills = scope.querySelector<HTMLElement>('[data-experience-skills]')

  if (
    !header
    || !metricMark
    || !metricNumber
    || !headingLines.length
    || !supportingCopy
    || !timelineTrack
    || !progressLine
    || !rows.length
    || !skills
  ) return

  gsap.set(metricMark, { autoAlpha: 0.35 })
  gsap.set(metricNumber, { autoAlpha: 0.35, textContent: '0' })
  gsap.set(headingLines, {
    autoAlpha: 0.4,
    fontVariationSettings: '"wght" 420',
  })
  gsap.set(supportingCopy, { clipPath: 'inset(0 100% 0 0)' })
  gsap.set(progressLine, { autoAlpha: 1, scaleY: 0 })

  const metricState = { value: 0 }
  const headerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: 'top 84%',
      end: 'bottom 40%',
      scrub: 0.95,
      invalidateOnRefresh: true,
    },
  })

  headerTimeline
    .to(metricMark, {
      autoAlpha: 1,
      duration: 0.12,
      ease: 'none',
    }, 0)
    .to(metricNumber, {
      autoAlpha: 1,
      duration: 0.26,
      ease: 'none',
    }, 0.04)
    .to(metricState, {
      value: 2,
      duration: 0.26,
      ease: 'none',
      onUpdate: () => {
        metricNumber.textContent = String(Math.round(metricState.value))
      },
    }, 0.04)

  headingLines.forEach((line, index) => {
    const activationPoint = 0.14 + index * 0.16

    headerTimeline.to(line, {
      autoAlpha: 1,
      fontVariationSettings: '"wght" 500',
      duration: index === 0 ? 0.3 : 0.38,
      ease: 'none',
    }, activationPoint)
  })

  headerTimeline.to(supportingCopy, {
    clipPath: 'inset(0 0% 0 0)',
    duration: 0.18,
    ease: 'none',
  }, 0.48)

  gsap.timeline({
    scrollTrigger: {
      trigger: timelineTrack,
      start: 'top 82%',
      end: 'bottom 38%',
      scrub: 0.95,
      invalidateOnRefresh: true,
    },
  })
    .to(progressLine, {
      scaleY: 1,
      duration: 0.9,
      ease: 'none',
    }, 0)
    .to(progressLine, {
      autoAlpha: 0,
      duration: 0.1,
      ease: 'none',
    }, 0.9)

  rows.forEach((row) => {
    const date = row.querySelector<HTMLElement>('[data-experience-date]')
    const dot = row.querySelector<HTMLElement>('[data-experience-dot]')
    const role = row.querySelector<HTMLElement>('[data-experience-role]')
    const description = row.querySelector<HTMLElement>('[data-experience-description]')

    if (!date || !dot || !role || !description) return

    const restingWeight = getComputedStyle(role).fontWeight

    gsap.set([date, role, description], { filter: 'blur(1px)' })
    gsap.set(date, { letterSpacing: '1.2px' })
    gsap.set(dot, { autoAlpha: 0.25, scale: 0.65 })

    gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top 82%',
        end: 'bottom 38%',
        scrub: 0.9,
        invalidateOnRefresh: true,
      },
    })
      .to([date, role, description], {
        filter: 'blur(0px)',
        duration: 0.42,
        ease: 'none',
      }, 0)
      .to(date, {
        letterSpacing: '0.4px',
        duration: 0.42,
        ease: 'none',
      }, 0)
      .to(role, {
        fontWeight: 650,
        scale: 1.008,
        duration: 0.24,
        ease: 'sine.out',
        force3D: true,
        transformOrigin: 'left center',
      }, 0.12)
      .to(dot, {
        autoAlpha: 1,
        scale: 1.7,
        duration: 0.12,
        ease: 'sine.out',
        force3D: true,
      }, 0.16)
      .to([role, dot], {
        scale: 1,
        duration: 0.18,
        ease: 'sine.inOut',
        force3D: true,
      }, 0.36)
      .to(role, {
        fontWeight: restingWeight,
        duration: 0.22,
        ease: 'none',
      }, 0.48)
  })

  const skillTargets = Array.from(
    skills.querySelectorAll<HTMLElement>('[data-experience-skill]'),
  ).flatMap((item) => {
    const index = item.querySelector<HTMLElement>('[data-experience-skill-index]')
    const label = item.querySelector<HTMLElement>('[data-experience-skill-label]')

    return index && label
      ? [{ index, indexText: index.textContent?.trim() ?? '', label }]
      : []
  })

  if (skillTargets.length !== skillGroups.length) return

  skillTargets.forEach(({ index, label }) => {
    gsap.set(index, { autoAlpha: 0.35, textContent: '00' })
    gsap.set(label, { fontWeight: 400 })
  })

  const skillTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: skills,
      start: 'top 86%',
      end: 'bottom 55%',
      scrub: 0.85,
      invalidateOnRefresh: true,
    },
  })
  const checksumOrder = [0, 1, 2, 3, 4]

  checksumOrder.forEach((targetIndex, orderIndex) => {
    const target = skillTargets[targetIndex]
    if (!target) return

    const activationPoint = orderIndex * 0.14

    skillTimeline
      .to(target.index, {
        autoAlpha: 1,
        duration: 0.1,
        ease: 'none',
        scrambleText: {
          text: target.indexText,
          chars: '0123456789',
          speed: 0.8,
        },
      }, activationPoint)
      .to(target.label, {
        fontWeight: 600,
        duration: 0.08,
        ease: 'sine.out',
      }, activationPoint)
      .to(target.label, {
        fontWeight: 500,
        duration: 0.1,
        ease: 'sine.inOut',
      }, activationPoint + 0.08)
  })
})
</script>
