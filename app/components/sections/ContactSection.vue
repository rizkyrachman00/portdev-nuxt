<template>
  <section class="relative w-full overflow-hidden px-5 pb-0 pt-[100px] md:px-10 md:pt-[120px] lg:px-20 lg:pt-[160px]">
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Headline -->
      <div class="mb-10 flex flex-col gap-0 lg:mb-14">
        <h2 class="text-[48px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
          LET'S BUILD
        </h2>
        <h2 class="text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151566] md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
          SOMETHING RELIABLE.
        </h2>
      </div>

      <!-- Copy + CTA -->
      <div class="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <p class="max-w-[650px] text-[16px] leading-[1.5] text-ink-700 md:text-[18px]">
          Open to engineering roles and thoughtful product collaborations across web and mobile.
        </p>

        <ButtonBase
          variant="accent"
          :to="contactEmail"
          icon="ph:arrow-up-right"
          icon-position="right"
          class="font-extralight"
        >
          Email me
        </ButtonBase>
      </div>

      <!-- Footer -->
      <div class="border-t border-ink-200 pt-6 lg:pt-8">
        <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div class="flex items-center gap-2">
            <span class="h-[6px] w-[6px] rounded-full bg-accent" aria-hidden="true" />
            <span class="text-[13px] font-normal leading-[1.2] text-ink-700">
              {{ footerCopy }}
            </span>
          </div>

          <nav class="flex items-center gap-6">
            <a
              v-for="link in footerLinks"
              :key="link.label"
              :href="link.href"
              class="text-[13px] font-medium leading-[1.2] text-ink-900 transition-colors duration-200 hover:text-accent"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </div>
    </div>

    <!-- Ghost wordmark -->
    <div
      class="pointer-events-none relative mx-auto mt-10 h-[100px] w-full max-w-[1120px] overflow-hidden md:mt-12 md:h-[150px] lg:mt-16 lg:h-[260px]"
      aria-hidden="true"
    >
      <span
        class="absolute left-1/2 top-0 -translate-x-1/2 translate-y-[12px] whitespace-nowrap text-center text-[140px] font-medium leading-[0.75] tracking-[-8px] text-[#15151510] md:translate-y-[22px] md:text-[220px] md:tracking-[-14px] lg:translate-y-[44px] lg:text-[400px] lg:tracking-[-24px]"
      >
        RIZKY
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contactEmail, footerCopy, footerLinks } from '~/data/contact'
</script>
