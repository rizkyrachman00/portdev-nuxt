<template>
  <main class="flex min-h-screen flex-col font-sans">
    <AppHeader />
    <section class="flex flex-1 flex-col justify-center px-5 py-[120px] md:px-10 lg:px-20">
      <div class="mx-auto w-full max-w-[1120px]">
        <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-accent">
          WORK / INDEX
        </span>

          <h1 class="mt-6 flex flex-col gap-0 lg:mt-10">
            <span class="text-[48px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
              CURATED WORK.
            </span>
            <span class="text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151566] md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
              BEING PREPARED.
            </span>
          </h1>

        <p class="mt-10 max-w-[650px] text-[16px] leading-[1.5] text-ink-700 md:text-[18px]">
          A focused collection of product, backend, and mobile case studies is
          being assembled. Return to the portfolio for now.
        </p>

        <NuxtLink
          to="/"
          class="mt-12 inline-flex items-center gap-2 font-sans text-[14px] font-normal text-ink-900 transition-colors duration-200 hover:text-accent md:text-[15px]"
        >
          <Icon name="ph:arrow-left" class="h-[17px] w-[17px]" />
          Back to portfolio
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// TODO: replace placeholder with curated project case studies.
useSeoMeta({
  title: 'Curated Work — Rizky Rachman',
  description:
    'A curated collection of product, backend, and mobile engineering case studies.',
})
</script>
