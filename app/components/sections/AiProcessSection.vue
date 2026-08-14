<template>
  <section
    ref="processScope"
    class="relative w-full px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[160px]"
  >
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Introduction -->
      <div data-process-intro class="relative mb-10 lg:mb-[30px]">
        <span
          data-process-eyebrow
          aria-label="AI-assisted · Engineering-led"
          class="font-mono text-[10px] font-normal tracking-[1px] text-accent"
        >
          AI-assisted · Engineering-led
        </span>

        <div class="mt-6 flex flex-col gap-0">
          <h2 data-process-heading-line class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-ink-900 sm:text-[56px] lg:text-[64px]">
            AI moves fast.
          </h2>
          <h2 data-process-heading-line class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-[#15151580] sm:text-[56px] lg:text-[64px]">
            Engineering stays
          </h2>
          <h2 data-process-heading-line class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-[#1515152E] sm:text-[56px] lg:text-[64px]">
            accountable.
          </h2>
        </div>

        <p data-process-copy class="mt-6 max-w-[360px] text-[16px] leading-[1.5] text-ink-700 lg:absolute lg:right-0 lg:top-[42px] lg:mt-0 lg:text-[18px]">
          AI accelerates research, implementation, and debugging while architecture, testing, and reliability remain engineer-led.
        </p>
      </div>

      <!-- Process steps -->
      <div ref="processTrack" data-process-track class="relative">
        <!-- Vertical spine -->
        <div
          data-process-spine
          class="absolute left-[66px] top-[14px] h-[calc(100%-28px)] w-px -translate-x-1/2 bg-ink-200 sm:left-[86px] lg:left-[335px] lg:top-[18px] lg:h-[calc(100%-36px)]"
          aria-hidden="true"
        />
        <span
          data-process-signal-line
          aria-hidden="true"
          class="invisible pointer-events-none absolute left-[66px] top-[14px] h-[calc(100%-28px)] w-px -translate-x-1/2 origin-top bg-accent sm:left-[86px] lg:left-[335px] lg:top-[18px] lg:h-[calc(100%-36px)]"
        />
        <span
          data-process-signal-node
          aria-hidden="true"
          class="invisible pointer-events-none absolute left-[66px] top-[11px] z-20 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-accent sm:left-[86px] lg:left-[335px] lg:top-[15px]"
        />

        <ol class="relative">
          <li
            v-for="step in processSteps"
            :key="step.index"
            data-process-row
            class="relative border-t border-ink-200 py-5 lg:py-6"
          >
            <span
              data-process-row-line
              aria-hidden="true"
              class="invisible pointer-events-none absolute -top-px left-0 h-px w-full bg-accent"
            />
            <ProcessStep :step="step" />
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { processSteps } from '~/data/process'

const processScope = useTemplateRef<HTMLElement>('processScope')
const processTrack = useTemplateRef<HTMLElement>('processTrack')

useScrollReveal(processScope, () => {
  if (!processScope.value || !processTrack.value) return

  const scope = processScope.value
  const track = processTrack.value
  const intro = scope.querySelector<HTMLElement>('[data-process-intro]')
  const eyebrow = scope.querySelector<HTMLElement>('[data-process-eyebrow]')
  const headingLines = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-process-heading-line]'),
  )
  const supportingCopy = scope.querySelector<HTMLElement>('[data-process-copy]')
  const signalLine = track.querySelector<HTMLElement>('[data-process-signal-line]')
  const signalNode = track.querySelector<HTMLElement>('[data-process-signal-node]')
  const rows = Array.from(track.querySelectorAll<HTMLElement>('[data-process-row]'))

  if (
    !intro
    || !eyebrow
    || !headingLines.length
    || !supportingCopy
    || !signalLine
    || !signalNode
    || !rows.length
  ) return

  const rowTargets = rows.flatMap((row) => {
    const line = row.querySelector<HTMLElement>('[data-process-row-line]')
    const number = row.querySelector<HTMLElement>('[data-process-number]')
    const dot = row.querySelector<HTMLElement>('[data-process-dot]')
    const title = row.querySelector<HTMLElement>('[data-process-title]')
    const description = row.querySelector<HTMLElement>('[data-process-description]')

    return line && number && dot && title && description
      ? [{ line, number, numberText: number.textContent?.trim() ?? '', dot, title, description }]
      : []
  })

  if (rowTargets.length !== rows.length) return

  const eyebrowText = eyebrow.textContent?.trim() ?? ''

  gsap.set(eyebrow, {
    autoAlpha: 0.35,
    textContent: 'SYSTEM · VERIFY',
  })
  gsap.set(headingLines, { autoAlpha: 0.45 })
  gsap.set(supportingCopy, { clipPath: 'inset(0 100% 0 0)' })
  gsap.set(signalLine, { autoAlpha: 1, scaleY: 0 })
  gsap.set(signalNode, { autoAlpha: 0, y: 0 })

  rowTargets.forEach(({ line, number, dot, title, description }) => {
    gsap.set(line, {
      autoAlpha: 1,
      scaleX: 0,
    })
    gsap.set(number, { autoAlpha: 0.35, textContent: '00' })
    gsap.set(dot, { autoAlpha: 0.25, scale: 0.65 })
    gsap.set([title, description], { autoAlpha: 0.35 })
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: intro,
      endTrigger: track,
      start: 'top 84%',
      end: 'bottom 36%',
      scrub: 1.05,
      invalidateOnRefresh: true,
    },
  })

  timeline.to(eyebrow, {
    autoAlpha: 1,
    duration: 0.12,
    ease: 'none',
    scrambleText: {
      text: eyebrowText,
      chars: '01AI·—',
      speed: 0.6,
    },
  }, 0)

  headingLines.forEach((line, index) => {
    const activationPoint = 0.05 + index * 0.06

    timeline.to(line, {
      autoAlpha: 1,
      duration: 0.08,
      ease: 'none',
    }, activationPoint)

    if (index === 0) {
      timeline
        .to(line, {
          scale: 1.008,
          duration: 0.04,
          ease: 'sine.out',
          force3D: true,
          transformOrigin: 'left center',
        }, activationPoint)
        .to(line, {
          scale: 1,
          duration: 0.07,
          ease: 'sine.inOut',
          force3D: true,
        }, activationPoint + 0.04)
    }
  })

  timeline
    .to(supportingCopy, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 0.12,
      ease: 'none',
    }, 0.18)
    .to(signalLine, {
      scaleY: 1,
      duration: 0.68,
      ease: 'none',
    }, 0.26)
    .to(signalNode, {
      autoAlpha: 1,
      duration: 0.03,
      ease: 'none',
    }, 0.26)
    .to(signalNode, {
      y: () => Math.max(
        0,
        signalLine.offsetTop
          + signalLine.offsetHeight
          - signalNode.offsetTop
          - signalNode.offsetHeight / 2,
      ),
      duration: 0.68,
      ease: 'none',
      force3D: true,
    }, 0.26)

  rowTargets.forEach(({ line, number, numberText, dot, title, description }, index) => {
    const activationPoint = 0.3 + index * 0.2

    timeline
      .to(line, {
        scaleX: 1,
        transformOrigin: () => `${signalLine.offsetLeft}px center`,
        duration: 0.06,
        ease: 'none',
      }, activationPoint)
      .to(number, {
        autoAlpha: 1,
        scale: 1.06,
        duration: 0.07,
        ease: 'sine.out',
        force3D: true,
        scrambleText: {
          text: numberText,
          chars: '0123456789',
          speed: 0.8,
        },
      }, activationPoint)
      .to(dot, {
        autoAlpha: 1,
        scale: 1.7,
        duration: 0.04,
        ease: 'sine.out',
        force3D: true,
      }, activationPoint)
      .to([title, description], {
        autoAlpha: 1,
        duration: 0.08,
        ease: 'none',
      }, activationPoint + 0.03)
      .to([number, dot], {
        scale: 1,
        duration: 0.07,
        ease: 'sine.inOut',
        force3D: true,
      }, activationPoint + 0.07)
      .to(line, {
        autoAlpha: 0,
        duration: 0.05,
        ease: 'none',
      }, activationPoint + 0.09)
  })

  timeline.to([signalLine, signalNode], {
    autoAlpha: 0,
    duration: 0.08,
    ease: 'none',
  }, 1.05)
})
</script>
