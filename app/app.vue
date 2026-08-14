<template>
  <VueLenis ref="lenisRoot" root :auto-raf="false" :options="lenisOptions">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VueLenis>
</template>

<script setup lang="ts">
import type Lenis from 'lenis'
import type { LenisOptions } from 'lenis'

const lenisRoot = shallowRef<{ lenis?: Lenis } | null>(null)
const lenisOptions: LenisOptions = {
  anchors: true,
  respectReducedMotion: true,
}

useLenisGsapSync(lenisRoot)
</script>
