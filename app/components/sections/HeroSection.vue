<template>
  <section
    class="flex min-h-[520px] w-full flex-col items-center justify-center gap-5 px-5 py-10 md:min-h-[600px] md:gap-[30px] md:py-[52px] lg:min-h-[690px]"
  >
    <div class="flex w-full max-w-[1040px] flex-col items-center gap-1 md:gap-2">
      <div class="flex items-center gap-3 md:gap-4">
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          Hi, I'm
        </span>
        <div
          class="h-12 w-12 overflow-hidden rounded-full border border-ink-200 shadow-[0_3px_12px_rgba(21,21,21,0.06)] md:h-14 md:w-14 lg:h-16 lg:w-16"
        >
          <NuxtImg
            src="/images/rizky-inline-portrait.png"
            alt="Rizky portrait"
            class="h-full w-full object-cover"
            sizes="64px"
          />
        </div>
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          Rizky.
        </span>
      </div>

      <span
        class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-900 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
      >
        Full-Stack & Mobile Engineer
      </span>

      <div class="flex items-center gap-2 md:gap-3.5">
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-ink-400 md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          building reliable products
        </span>
        <span
          class="font-sans text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-accent md:text-[48px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.5px]"
        >
          with AI.
        </span>
      </div>
    </div>

    <p
      class="max-w-[90%] text-center font-sans text-[15px] font-normal leading-[1.5] text-ink-700 md:max-w-[650px] md:text-[17px]"
    >
      I combine engineering judgment with AI-assisted workflows to build
      dependable web and mobile products faster.
    </p>

    <div class="flex flex-col items-center gap-3 md:flex-row md:gap-[18px]">
      <ButtonBase variant="primary" icon="ph:arrow-down" iconPosition="right">
        View selected work
      </ButtonBase>
      <ButtonBase
        variant="secondary"
        icon="ph:download-simple"
        iconPosition="left"
      >
        Download resume
      </ButtonBase>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section - static layout only, no motion yet.
// TODO: Phase 4 - add clip-path line reveal and "with AI" underline draw.
</script>
