<template>
  <span ref="scope"><slot /></span>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const scope = useTemplateRef<HTMLSpanElement>('scope')

useScrollReveal(scope, () => {
  if (!scope.value) return

  const split = SplitText.create(scope.value, {
    type: 'lines',
    mask: 'lines',
    aria: 'auto',
    autoSplit: true,
    onSplit: ({ lines }) => gsap.from(lines, {
      yPercent: 110,
      duration: 0.9,
      ease: 'editorial',
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope.value,
        start: 'top 82%',
        once: true,
      },
    }),
  })

  return () => split.revert()
})
</script>
