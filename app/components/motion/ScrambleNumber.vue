<template>
  <span ref="scope" :aria-label="value">{{ value }}</span>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { value } = defineProps<{
  value: string
}>()

const scope = useTemplateRef<HTMLSpanElement>('scope')

useScrollReveal(scope, () => {
  if (!scope.value) return

  gsap.fromTo(
    scope.value,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.8,
      ease: 'editorial',
      scrambleText: {
        text: value,
        chars: '0123456789',
        revealDelay: 0.1,
        speed: 0.8,
      },
      scrollTrigger: {
        trigger: scope.value,
        start: 'top 82%',
        once: true,
      },
    },
  )
})
</script>
