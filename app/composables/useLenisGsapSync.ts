import type Lenis from 'lenis'
import type { Ref } from 'vue'
import { watchEffect } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type LenisRoot = {
  lenis?: Lenis
}

export function useLenisGsapSync(lenisRoot: Ref<LenisRoot | null>) {
  watchEffect((onCleanup) => {
    const lenis = lenisRoot.value?.lenis

    if (!lenis) return

    const update = (time: number) => lenis.raf(time * 1000)
    const stopScrollSync = lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    onCleanup(() => {
      stopScrollSync()
      gsap.ticker.remove(update)
    })
  })
}
