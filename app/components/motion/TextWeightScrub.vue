<template>
  <span ref="scope"><slot /></span>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const scope = useTemplateRef<HTMLSpanElement>('scope')

useScrollReveal(scope, () => {
  if (!scope.value) return

  gsap.fromTo(
    scope.value,
    { fontVariationSettings: '"wght" 350' },
    {
      fontVariationSettings: '"wght" 650',
      ease: 'none',
      scrollTrigger: {
        trigger: scope.value,
        start: 'top 85%',
        end: 'top 35%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    },
  )
})
</script>
