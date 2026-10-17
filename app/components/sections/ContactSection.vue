<template>
  <section
    ref="contactScope"
    class="relative w-full overflow-hidden px-5 pb-0 pt-[100px] md:px-10 md:pt-[120px] lg:px-20 lg:pt-[160px]"
  >
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Headline -->
      <div class="mb-10 flex flex-col gap-0 lg:mb-14">
        <h2 data-contact-heading-line="left" class="text-[48px] font-medium leading-[1] tracking-[-2px] text-ink-900 md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
          LET'S BUILD
        </h2>
        <h2 data-contact-heading-line="right" class="text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151566] md:text-[72px] md:tracking-[-3px] lg:text-[96px] lg:tracking-[-4.4px]">
          SOMETHING RELIABLE.
        </h2>
      </div>

      <!-- Copy + CTA -->
      <div class="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <p data-contact-copy class="max-w-[650px] text-[16px] leading-[1.5] text-ink-700 md:text-[18px]">
          Open to engineering roles and thoughtful product collaborations across web and mobile.
        </p>

        <div data-contact-cta class="flex self-start lg:self-auto">
          <ButtonBase
            variant="accent"
            :to="contactEmail"
            icon="ph:arrow-up-right"
            icon-position="right"
            class="-rotate-1 font-extralight lg:-rotate-2 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5"
          >
            LET'S TALK
          </ButtonBase>
        </div>
      </div>

      <!-- Footer -->
      <div class="relative pt-6 lg:pt-8">
        <span
          data-contact-footer-rule
          class="absolute left-0 top-0 h-px w-full origin-center bg-ink-200"
          aria-hidden="true"
        />
        <div data-contact-footer-content class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div class="flex items-center gap-2">
            <span data-contact-stamp class="h-[6px] w-[6px] rounded-full bg-accent" aria-hidden="true" />
            <span class="text-[14px] font-normal leading-[1.2] text-ink-700">
              {{ footerCopy }}
            </span>
          </div>

          <nav class="flex items-center gap-6">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-1.5 text-[14px] font-medium leading-[1.2] text-ink-900 transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon
                :name="link.icon"
                class="h-[18px] w-[18px] transition-transform duration-300 motion-reduce:transform-none group-hover:scale-110"
              />
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
        data-contact-wordmark
        class="absolute left-1/2 top-0 -translate-x-1/2 translate-y-[12px] whitespace-nowrap text-center text-[140px] font-medium leading-[0.75] tracking-[-8px] text-[#15151510] md:translate-y-[22px] md:text-[220px] md:tracking-[-14px] lg:translate-y-[44px] lg:text-[400px] lg:tracking-[-24px]"
      >
        RIZKY
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { contactEmail, footerCopy, socialLinks } from '~/data/contact'

const contactScope = useTemplateRef<HTMLElement>('contactScope')

useScrollReveal(contactScope, () => {
  if (!contactScope.value) return

  const scope = contactScope.value
  const headingLines = Array.from(
    scope.querySelectorAll<HTMLElement>('[data-contact-heading-line]'),
  )
  const copy = scope.querySelector<HTMLElement>('[data-contact-copy]')
  const cta = scope.querySelector<HTMLElement>('[data-contact-cta]')
  const footerRule = scope.querySelector<HTMLElement>('[data-contact-footer-rule]')
  const footerContent = scope.querySelector<HTMLElement>('[data-contact-footer-content]')
  const stamp = scope.querySelector<HTMLElement>('[data-contact-stamp]')
  const wordmark = scope.querySelector<HTMLElement>('[data-contact-wordmark]')

  if (
    headingLines.length !== 2
    || !copy
    || !cta
    || !footerRule
    || !footerContent
    || !stamp
    || !wordmark
  ) return

  gsap.set(headingLines[0]!, {
    clipPath: 'inset(0 100% 0 0)',
    x: -14,
  })
  gsap.set(headingLines[1]!, {
    clipPath: 'inset(0 0 0 100%)',
    x: 14,
  })
  gsap.set(copy, { clipPath: 'inset(0 100% 0 0)' })
  gsap.set(cta, {
    autoAlpha: 0,
    x: 32,
    y: 22,
    rotate: 4,
    scale: 0.96,
  })
  gsap.set(footerRule, { scaleX: 0 })
  gsap.set(footerContent, { autoAlpha: 0.35, y: 8 })

  gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: 'top 82%',
      end: 'bottom bottom',
      scrub: 1.1,
      invalidateOnRefresh: true,
    },
  })
    .to(headingLines[0]!, {
      clipPath: 'inset(0 0% 0 0)',
      x: 0,
      duration: 0.18,
      ease: 'none',
    }, 0.12)
    .to(headingLines[1]!, {
      clipPath: 'inset(0 0 0 0%)',
      x: 0,
      duration: 0.18,
      ease: 'none',
    }, 0.22)
    .to(copy, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 0.14,
      ease: 'none',
    }, 0.42)
    .to(cta, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.24,
      ease: 'sine.out',
    }, 0.56)
    .to(footerRule, {
      scaleX: 1,
      duration: 0.16,
      ease: 'none',
    }, 0.86)
    .to(footerContent, {
      autoAlpha: 1,
      y: 0,
      duration: 0.1,
      ease: 'none',
    }, 0.98)
    .to(stamp, {
      scale: 1.8,
      duration: 0.03,
      ease: 'sine.out',
      force3D: true,
    }, 1.08)
    .to(stamp, {
      scale: 1,
      duration: 0.03,
      ease: 'sine.inOut',
      force3D: true,
    }, 1.11)

  gsap.fromTo(wordmark, {
    yPercent: 14,
  }, {
    yPercent: -4,
    ease: 'none',
    scrollTrigger: {
      trigger: scope,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  })
})
</script>
