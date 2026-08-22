<template>
  <section
    ref="heroScope"
    class="relative isolate flex min-h-[520px] w-full flex-col items-center justify-center gap-5 overflow-hidden px-5 py-[80px] md:min-h-[600px] md:gap-[30px] md:py-[100px] lg:min-h-[690px] lg:py-[120px]"
  >
    <span
      aria-hidden="true"
      class="pointer-events-none absolute left-1/2 top-[48%] z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-sans text-[clamp(96px,18vw,260px)] font-[650] leading-none tracking-[-0.07em] text-[#1515150A]"
    >
      INDONESIA
    </span>
    <div
      ref="headingScope"
      class="relative z-10 flex w-full max-w-[1040px] flex-col items-center gap-1 md:gap-2"
    >
      <div class="flex max-w-full items-center gap-3 md:gap-4">
        <span
          class="min-w-0 font-sans text-[clamp(28px,9vw,36px)] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type class="relative inline-grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)] align-baseline">
            <span data-hero-sizer aria-hidden="true" class="invisible col-start-1 row-start-1 min-w-0">Hi, I'm</span>
            <span data-hero-typed-layer class="col-start-1 row-start-1 min-w-0">
              <span data-hero-text>Hi, I'm</span>
            </span>
          </span>
        </span>
        <div
          class="relative h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20"
        >
          <div
            data-hero-portrait-frame
            class="absolute inset-0 overflow-hidden rounded-full border border-ink-200 shadow-[0_3px_12px_rgba(21,21,21,0.06)]"
          >
            <NuxtImg
              src="/images/rizky-inline-portrait.png"
              alt="Rizky portrait"
              class="h-full w-full object-cover"
              sizes="80px"
            />
          </div>
        </div>
        <span
          class="min-w-0 font-sans text-[clamp(28px,9vw,36px)] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type data-hero-row-end class="relative inline-grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)] align-baseline">
            <span data-hero-sizer aria-hidden="true" class="invisible col-start-1 row-start-1 min-w-0">Rizky.</span>
            <span data-hero-typed-layer class="col-start-1 row-start-1 min-w-0">
              <span data-hero-text>Rizky.</span>
            </span>
          </span>
        </span>
      </div>

      <span
        class="w-full max-w-full text-center font-sans text-[clamp(28px,9vw,36px)] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
      >
        <span data-hero-type data-hero-row-end class="relative inline-grid w-full min-w-0 max-w-full grid-cols-[minmax(0,1fr)] align-baseline">
          <span data-hero-sizer aria-hidden="true" class="invisible col-start-1 row-start-1 min-w-0">Full-Stack & Mobile Engineer</span>
          <span data-hero-typed-layer class="col-start-1 row-start-1 min-w-0">
            <span data-hero-text>Full-Stack & Mobile Engineer</span>
          </span>
        </span>
      </span>

      <div class="flex w-full max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 md:w-auto md:flex-nowrap md:gap-3.5">
        <span
          class="w-full min-w-0 max-w-full text-center font-sans text-[clamp(28px,9vw,36px)] font-medium leading-[1.1] tracking-[-1.5px] text-ink-400 md:w-auto md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type class="relative inline-grid w-full min-w-0 max-w-full grid-cols-[minmax(0,1fr)] align-baseline md:w-auto">
            <span data-hero-sizer aria-hidden="true" class="invisible col-start-1 row-start-1 min-w-0">building reliable products</span>
            <span data-hero-typed-layer class="col-start-1 row-start-1 min-w-0">
              <span data-hero-text>building reliable products</span>
            </span>
          </span>
        </span>
        <UnderlineDraw
          ref="underline"
          :autoplay="false"
          class="min-w-0 max-w-full font-sans text-[clamp(28px,9vw,36px)] font-medium leading-[1.1] tracking-[-1.5px] text-accent md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type class="relative inline-grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)] align-baseline">
            <span data-hero-sizer aria-hidden="true" class="invisible col-start-1 row-start-1 min-w-0">with AI.</span>
            <span data-hero-typed-layer class="relative col-start-1 row-start-1 min-w-0">
              <span data-hero-text>with AI.</span>
              <span
                ref="finalCursor"
                aria-hidden="true"
                class="pointer-events-none invisible absolute left-[calc(100%+2px)] top-1/2 h-[0.78em] w-[0.2em] -translate-y-1/2 bg-accent font-sans text-[clamp(28px,9vw,36px)] md:text-[48px] lg:text-[60px]"
              />
            </span>
          </span>
        </UnderlineDraw>
      </div>

      <span
        ref="typingCursor"
        aria-hidden="true"
        class="pointer-events-none invisible absolute left-0 top-0 h-[0.78em] w-[0.2em] bg-current font-sans text-[clamp(28px,9vw,36px)] md:text-[48px] lg:text-[60px]"
      />
    </div>

    <p
      ref="description"
      data-hero-followup
      class="relative z-10 max-w-[90%] text-center font-sans text-[15px] font-normal leading-[1.5] text-ink-700 md:max-w-[650px] md:text-[17px]"
    >
      I combine engineering judgment with AI-assisted workflows to build
      dependable web and mobile products faster.
    </p>

    <div
      ref="actions"
      data-hero-followup
      class="relative z-10 flex flex-col items-center gap-3 md:flex-row md:gap-[18px]"
    >
      <ButtonBase
        variant="primary"
        to="#selected-work"
        icon="ph:arrow-down"
        iconPosition="right"
        class="font-light"
        @click.prevent="scrollToSelectedWork"
      >
        View selected work
      </ButtonBase>
      <ButtonBase
        variant="secondary"
        :to="resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
        icon="ph:arrow-up-right"
        iconPosition="left"
        class="font-light"
      >
        View resume
      </ButtonBase>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLenis } from 'lenis/vue'
import { resumeUrl } from '~/data/contact'

const lenis = useLenis()

function scrollToSelectedWork() {
  const target = document.querySelector<HTMLElement>('#selected-work')
  if (!target) return

  if (lenis.value) {
    lenis.value.scrollTo(target)
    return
  }

  target.scrollIntoView()
}

type UnderlineController = {
  play: () => void
}

const CHARACTER_DELAY = 0.035
const ROW_DELAY = 0.12
const UNDERLINE_DURATION = 0.6
const FOLLOWUP_DELAY = 0.08
const PORTRAIT_PULSE_SCALE = 1.075
const PORTRAIT_REST_SCALE = 1 / PORTRAIT_PULSE_SCALE

const heroScope = useTemplateRef<HTMLElement>('heroScope')
const headingScope = useTemplateRef<HTMLElement>('headingScope')
const typingCursor = useTemplateRef<HTMLSpanElement>('typingCursor')
const finalCursor = useTemplateRef<HTMLSpanElement>('finalCursor')
const underline = useTemplateRef<UnderlineController>('underline')
const description = useTemplateRef<HTMLParagraphElement>('description')
const actions = useTemplateRef<HTMLDivElement>('actions')

useScrollReveal(heroScope, () => {
  if (
    !heroScope.value
    || !headingScope.value
    || !typingCursor.value
    || !finalCursor.value
    || !description.value
    || !actions.value
  ) return

  const targets = Array.from(
    heroScope.value.querySelectorAll<HTMLElement>('[data-hero-type]'),
  ).flatMap((container) => {
    const element = container.querySelector<HTMLElement>('[data-hero-text]')

    return element
      ? [{ container, element, text: element.textContent?.trim() ?? '' }]
      : []
  })

  if (!targets.length) return

  const portraitFrame = heroScope.value.querySelector<HTMLElement>('[data-hero-portrait-frame]')
  const buttons = Array.from(actions.value.children)
  let wordPulseTimeline: gsap.core.Timeline | undefined
  let wordSplit: SplitText | undefined
  let activeTypingTarget: HTMLElement | undefined
  let typingComplete = false

  targets.forEach(({ container, element }) => {
    container.style.visibility = 'visible'
    element.textContent = ''
  })

  gsap.set(description.value, {
    autoAlpha: 0,
    filter: 'blur(6px)',
    visibility: 'visible',
  })
  gsap.set(buttons, {
    clipPath: (index) => index === 0
      ? 'inset(0 100% 0 0 round 999px)'
      : 'inset(0 0 0 100% round 999px)',
    autoAlpha: (index) => index === 0 ? 1 : 0,
  })
  gsap.set(actions.value, { visibility: 'visible' })

  const positionTypingCursor = (target: HTMLElement) => {
    if (!headingScope.value || !typingCursor.value) return

    activeTypingTarget = target

    const headingBounds = headingScope.value.getBoundingClientRect()
    const targetBounds = target.getBoundingClientRect()
    const layerBounds = target.closest<HTMLElement>('[data-hero-typed-layer]')
      ?.getBoundingClientRect() ?? targetBounds
    const cursorBounds = typingCursor.value.getBoundingClientRect()
    const range = document.createRange()
    range.selectNodeContents(target)
    const textBounds = Array.from(range.getClientRects()).at(-1)
    const lineHeight = textBounds?.height
      || Number.parseFloat(getComputedStyle(target).lineHeight)
      || layerBounds.height
    const lineTop = textBounds?.top ?? layerBounds.top

    gsap.set(typingCursor.value, {
      x: (textBounds?.right ?? layerBounds.left) - headingBounds.left + 2,
      y: lineTop - headingBounds.top + (lineHeight - cursorBounds.height) / 2,
      color: getComputedStyle(target).color,
      autoAlpha: 1,
    })
  }

  const headingObserver = new ResizeObserver(() => {
    if (!typingComplete && activeTypingTarget) {
      positionTypingCursor(activeTypingTarget)
    }
  })
  headingObserver.observe(headingScope.value)

  const blink = gsap.to(finalCursor.value, {
    autoAlpha: 0,
    duration: 0.55,
    ease: 'steps(1)',
    repeat: -1,
    yoyo: true,
    paused: true,
  })

  if (portraitFrame) {
    gsap.set(portraitFrame, {
      inset: '-3.75%',
      scale: PORTRAIT_REST_SCALE,
      force3D: true,
      transformOrigin: 'center',
    })

    gsap.to(portraitFrame, {
      scale: 1,
      duration: 3.2,
      ease: 'sine.inOut',
      force3D: true,
      repeat: -1,
      yoyo: true,
    })
  }

  const startWordPulses = () => {
    if (wordSplit) return

    wordSplit = SplitText.create(
      targets.map(({ element }) => element),
      {
        type: 'words',
        wordsClass: 'hero-pulse-word',
        aria: 'auto',
      },
    )

    const words = gsap.utils.shuffle([...(wordSplit.words as HTMLElement[])])
    wordPulseTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.8 })

    words.forEach((word, index) => {
      const pulseTargets = word.textContent === 'AI.'
        ? [word, finalCursor.value]
        : word

      wordPulseTimeline?.to(pulseTargets, {
        scale: 1.01,
        duration: 0.28,
        ease: 'sine.out',
        force3D: true,
        transformOrigin: 'center',
      }, index === 0 ? 0 : '+=0.12').to(pulseTargets, {
        scale: 1,
        duration: 0.45,
        ease: 'sine.inOut',
        force3D: true,
      })
    })
  }

  const timeline = gsap.timeline()
  let time = 0

  targets.forEach(({ container, element, text }, targetIndex) => {
    timeline.call(() => positionTypingCursor(element), [], time)

    let typed = ''
    const characters = Array.from(text)

    characters.forEach((character, characterIndex) => {
      typed += character
      const nextText = typed

      timeline.call(() => {
        element.textContent = nextText
        positionTypingCursor(element)
      }, [], time)

      if (characterIndex < characters.length - 1) {
        time += CHARACTER_DELAY
      }
    })

    if (targetIndex < targets.length - 1) {
      time += container.hasAttribute('data-hero-row-end')
        ? ROW_DELAY
        : CHARACTER_DELAY
    }
  })

  timeline.call(() => {
    typingComplete = true
    underline.value?.play()
    gsap.set(typingCursor.value, { autoAlpha: 0 })
    gsap.set(finalCursor.value, { autoAlpha: 1 })
    blink.play(0)
  }, [], time)

  timeline.to(description.value, {
    autoAlpha: 1,
    filter: 'blur(0px)',
    duration: 1.3,
    ease: 'editorial',
  }, time + UNDERLINE_DURATION + FOLLOWUP_DELAY)

  const [primaryButton, secondaryButton] = buttons

  if (primaryButton) {
    timeline.to(primaryButton, {
      clipPath: 'inset(0 0% 0 0 round 999px)',
      duration: 0.55,
      ease: 'editorial',
    }, '>')
  }

  if (secondaryButton) {
    timeline.to(secondaryButton, {
      clipPath: 'inset(0 0% 0 0 round 999px)',
      autoAlpha: 1,
      duration: 0.65,
      ease: 'editorial',
    }, '<+0.18')
  }

  timeline.call(startWordPulses, [], '>')

  return () => {
    headingObserver.disconnect()
    blink.kill()
    timeline.kill()
    wordPulseTimeline?.revert()
    wordSplit?.revert()

    targets.forEach(({ container, element, text }) => {
      element.textContent = text
      container.style.removeProperty('visibility')
    })

    typingCursor.value?.removeAttribute('style')
    finalCursor.value?.removeAttribute('style')
  }
})
</script>
