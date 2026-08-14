<template>
  <section
    ref="statsScope"
    class="flex w-full justify-center px-5 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16"
  >
    <div
      ref="statsRail"
      class="relative flex w-full max-w-[980px] flex-col gap-6 border-t border-ink-200 pt-[22px] md:flex-row md:items-center md:justify-between md:gap-0"
    >
      <span
        data-stats-signal-line
        aria-hidden="true"
        class="pointer-events-none absolute -top-px left-0 h-px w-full origin-left bg-accent"
      />
      <span
        data-stats-signal-node
        aria-hidden="true"
        class="pointer-events-none absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full bg-accent"
      />

      <div data-stats-item class="flex flex-col gap-[7px]">
        <SectionEyebrow data-stats-label>EXPERIENCE</SectionEyebrow>
        <span data-stats-value class="font-sans text-[13px] font-semibold text-ink-900">
          Nearly 2 years shipping
        </span>
      </div>

      <div data-stats-item class="flex flex-col gap-[7px]">
        <SectionEyebrow data-stats-label>CAPABILITY</SectionEyebrow>
        <span data-stats-value class="font-sans text-[13px] font-semibold text-ink-900">
          Web · API · Mobile
        </span>
      </div>

      <div data-stats-item class="flex flex-col gap-[7px]">
        <SectionEyebrow data-stats-label>WORKFLOW</SectionEyebrow>
        <span data-stats-value class="font-sans text-[13px] font-semibold text-ink-900">
          AI-assisted · Engineering-led
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const statsScope = useTemplateRef<HTMLElement>('statsScope')
const statsRail = useTemplateRef<HTMLDivElement>('statsRail')

useScrollReveal(statsScope, () => {
  if (!statsScope.value || !statsRail.value) return

  const rail = statsRail.value
  const signalLine = rail.querySelector<HTMLElement>('[data-stats-signal-line]')
  const signalNode = rail.querySelector<HTMLElement>('[data-stats-signal-node]')
  const statItems = Array.from(rail.querySelectorAll<HTMLElement>('[data-stats-item]'))

  if (!signalLine || !signalNode || !statItems.length) return

  gsap.set(signalLine, { autoAlpha: 1, scaleX: 0 })
  gsap.set(signalNode, { autoAlpha: 0, x: 0 })

  statItems.forEach((item) => {
    gsap.set(item.querySelector('[data-stats-label]'), { autoAlpha: 0.35 })
    gsap.set(item.querySelector('[data-stats-value]'), { autoAlpha: 0.45 })
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: statsScope.value,
      start: 'top 90%',
      end: 'bottom 58%',
      scrub: 0.9,
      invalidateOnRefresh: true,
    },
  })

  timeline
    .to(signalLine, { scaleX: 1, duration: 0.9, ease: 'none' }, 0)
    .to(signalNode, { autoAlpha: 1, duration: 0.04, ease: 'none' }, 0)
    .to(signalNode, {
      x: () => Math.max(0, rail.clientWidth - signalNode.offsetWidth),
      duration: 0.9,
      ease: 'none',
      force3D: true,
    }, 0)

  statItems.forEach((item, index) => {
    const activationPoint = 0.08 + index * 0.32
    const label = item.querySelector<HTMLElement>('[data-stats-label]')
    const value = item.querySelector<HTMLElement>('[data-stats-value]')

    if (!label || !value) return

    timeline
      .to([label, value], { autoAlpha: 1, duration: 0.08, ease: 'none' }, activationPoint)
      .to(item, {
        scale: 1.015,
        duration: 0.04,
        ease: 'sine.out',
        force3D: true,
        transformOrigin: 'left center',
      }, activationPoint)
      .to(item, {
        scale: 1,
        duration: 0.08,
        ease: 'sine.inOut',
        force3D: true,
      }, activationPoint + 0.04)
  })

  timeline.to([signalLine, signalNode], {
    autoAlpha: 0,
    duration: 0.1,
    ease: 'none',
  }, 0.9)
})
</script>
