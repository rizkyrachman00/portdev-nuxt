<template>
  <section
    ref="heroScope"
    class="flex min-h-[520px] w-full flex-col items-center justify-center gap-5 px-5 py-[80px] md:min-h-[600px] md:gap-[30px] md:py-[100px] lg:min-h-[690px] lg:py-[120px]"
  >
    <div
      ref="headingScope"
      class="relative flex w-full max-w-[1040px] flex-col items-center gap-1 md:gap-2"
    >
      <div class="flex items-center gap-3 md:gap-4">
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type>Hi, I'm</span>
        </span>
        <div
          class="relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
        >
          <div
            data-hero-portrait-frame
            class="absolute inset-0 overflow-hidden rounded-full border border-ink-200 shadow-[0_3px_12px_rgba(21,21,21,0.06)]"
          >
            <NuxtImg
              src="/images/rizky-inline-portrait.png"
              alt="Rizky portrait"
              class="h-full w-full object-cover"
              sizes="72px"
            />
          </div>
        </div>
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type data-hero-row-end>Rizky.</span>
        </span>
      </div>

      <span
        class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
      >
        <span data-hero-type data-hero-row-end>Full-Stack & Mobile Engineer</span>
      </span>

      <div class="flex items-center gap-2 md:gap-3.5">
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-400 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type>building reliable products</span>
        </span>
        <UnderlineDraw
          ref="underline"
          :autoplay="false"
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-accent md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          <span data-hero-type>with AI.</span>
        </UnderlineDraw>
      </div>

      <span
        ref="cursor"
        aria-hidden="true"
        class="pointer-events-none invisible absolute left-0 top-0 h-[0.78em] w-[0.2em] bg-current font-sans text-[36px] md:text-[48px] lg:text-[60px]"
      />
    </div>

    <p
      ref="description"
      data-hero-followup
      class="max-w-[90%] text-center font-sans text-[15px] font-normal leading-[1.5] text-ink-700 md:max-w-[650px] md:text-[17px]"
    >
      I combine engineering judgment with AI-assisted workflows to build
      dependable web and mobile products faster.
    </p>

    <div
      ref="actions"
      data-hero-followup
      class="flex flex-col items-center gap-3 md:flex-row md:gap-[18px]"
    >
      <ButtonBase variant="primary" icon="ph:arrow-down" iconPosition="right" class="font-light">
        View selected work
      </ButtonBase>
      <ButtonBase
        variant="secondary"
        icon="ph:download-simple"
        iconPosition="left"
        class="font-light"
      >
        Download resume
      </ButtonBase>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

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
const cursor = useTemplateRef<HTMLSpanElement>('cursor')
const underline = useTemplateRef<UnderlineController>('underline')
const description = useTemplateRef<HTMLParagraphElement>('description')
const actions = useTemplateRef<HTMLDivElement>('actions')

useScrollReveal(heroScope, () => {
  if (
    !heroScope.value
    || !headingScope.value
    || !cursor.value
    || !description.value
    || !actions.value
  ) return

  const targets = Array.from(
    heroScope.value.querySelectorAll<HTMLElement>('[data-hero-type]'),
  ).map((element) => ({
    element,
    text: element.textContent?.trim() ?? '',
    width: element.getBoundingClientRect().width,
  }))

  const portraitFrame = heroScope.value.querySelector<HTMLElement>('[data-hero-portrait-frame]')
  const buttons = Array.from(actions.value.children)
  let wordPulseTimeline: gsap.core.Timeline | undefined
  let wordSplit: SplitText | undefined

  targets.forEach(({ element, width }) => {
    element.style.display = 'inline-block'
    element.style.width = `${width}px`
    element.style.visibility = 'visible'
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

  const positionCursor = (target: HTMLElement) => {
    if (!headingScope.value || !cursor.value) return

    const headingBounds = headingScope.value.getBoundingClientRect()
    const targetBounds = target.getBoundingClientRect()
    const cursorBounds = cursor.value.getBoundingClientRect()
    const range = document.createRange()
    range.selectNodeContents(target)
    const textBounds = range.getBoundingClientRect()

    gsap.set(cursor.value, {
      x: (textBounds.width ? textBounds.right : targetBounds.left) - headingBounds.left + 2,
      y: targetBounds.top - headingBounds.top + (targetBounds.height - cursorBounds.height) / 2,
      color: getComputedStyle(target).color,
      autoAlpha: 1,
    })
  }

  const blink = gsap.to(cursor.value, {
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
    const finalTarget = targets.at(-1)?.element
    if (finalTarget) positionCursor(finalTarget)

    wordPulseTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.8 })

    words.forEach((word, index) => {
      const pulseTargets = word.textContent === 'AI.'
        ? [word, cursor.value]
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

  targets.forEach(({ element, text }, targetIndex) => {
    timeline.call(() => positionCursor(element), [], time)

    let typed = ''
    const characters = Array.from(text)

    characters.forEach((character, characterIndex) => {
      typed += character
      const nextText = typed

      timeline.call(() => {
        element.textContent = nextText
        positionCursor(element)
      }, [], time)

      if (characterIndex < characters.length - 1) {
        time += CHARACTER_DELAY
      }
    })

    if (targetIndex < targets.length - 1) {
      time += element.hasAttribute('data-hero-row-end')
        ? ROW_DELAY
        : CHARACTER_DELAY
    }
  })

  timeline.call(() => {
    targets.forEach(({ element }) => {
      element.style.removeProperty('display')
      element.style.removeProperty('width')
    })

    const finalTarget = targets.at(-1)?.element
    if (finalTarget) positionCursor(finalTarget)

    underline.value?.play()
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
    blink.kill()
    timeline.kill()
    wordPulseTimeline?.revert()
    wordSplit?.revert()

    targets.forEach(({ element, text }) => {
      element.textContent = text
      element.style.removeProperty('display')
      element.style.removeProperty('width')
      element.style.removeProperty('visibility')
    })

    cursor.value?.removeAttribute('style')
  }
})
</script>
