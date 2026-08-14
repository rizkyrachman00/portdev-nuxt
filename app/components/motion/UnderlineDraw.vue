<template>
  <span ref="scope" class="relative inline-block">
    <slot />
    <svg
      aria-hidden="true"
      class="pointer-events-none absolute -left-px top-full h-2 w-[calc(100%+6px)] overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 8"
    >
      <path
        ref="path"
        data-underline-path
        d="M0 5 C 24 2, 76 2, 100 5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { autoplay = true } = defineProps<{
  autoplay?: boolean
}>()

const scope = useTemplateRef<HTMLSpanElement>('scope')
const path = useTemplateRef<SVGPathElement>('path')
let animation: gsap.core.Tween | undefined

const reducedMotion = useScrollReveal(scope, () => {
  if (!scope.value || !path.value) return

  const length = path.value.getTotalLength()
  gsap.set(path.value, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })

  if (autoplay) {
    animation = gsap.to(path.value, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: 'editorial',
      onStart: () => gsap.set(path.value, { visibility: 'visible' }),
      scrollTrigger: {
        trigger: scope.value,
        start: 'top 82%',
        once: true,
      },
    })
  }

  return () => {
    animation?.kill()
    animation = undefined
  }
})

function play() {
  if (!path.value || reducedMotion.value) return

  animation?.kill()
  gsap.set(path.value, { visibility: 'visible' })
  animation = gsap.to(path.value, {
    strokeDashoffset: 0,
    duration: 0.6,
    ease: 'editorial',
  })
}

defineExpose({ play })
</script>
