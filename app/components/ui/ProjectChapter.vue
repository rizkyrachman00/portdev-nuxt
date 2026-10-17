<template>
  <article
    ref="chapterScope"
    class="relative w-full lg:pb-14"
    :data-project-image-position="imagePosition"
  >
    <div
      v-if="topAsideProject"
      data-project-aside
      class="relative z-30 order-1 w-full lg:order-none lg:absolute lg:top-[44px] lg:w-[360px]"
      :class="imagePosition === 'left' ? 'lg:left-0' : 'lg:right-0'"
    >
      <div class="relative border-t border-ink-200">
        <span
          data-project-aside-line
          aria-hidden="true"
          class="invisible pointer-events-none absolute -top-px left-0 h-px w-full bg-accent"
        />
        <ProjectIndexRow :project="topAsideProject" align="baseline" />
      </div>
    </div>

    <h3
      v-if="ghostTitle"
      data-project-ghost
      class="pointer-events-none z-0 order-2 mb-0 pt-8 font-sans text-[48px] font-medium leading-[1] tracking-[-2px] text-[#15151512] md:pt-10 md:text-[64px] lg:order-none lg:absolute lg:top-0 lg:mb-0 lg:w-full lg:pt-0 lg:text-[94px] lg:tracking-[-4.5px]"
      :class="imagePosition === 'left' ? 'lg:text-right' : 'lg:text-left'"
    >
      {{ ghostTitle }}
    </h3>

    <div
      data-project-main
      class="relative z-10 order-3 flex w-full flex-col gap-8 pt-6 md:pt-8 lg:order-none lg:flex-row lg:items-start lg:gap-5 lg:pt-[120px]"
      :class="imagePosition === 'left' ? 'lg:flex-row-reverse' : ''"
    >
      <NuxtLink
        data-project-copy
        to="/work"
        class="group block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:w-[370px] lg:shrink-0"
      >
        <FeaturedProjectCard :project="project" />
      </NuxtLink>

      <NuxtLink
        v-if="project.image"
        data-project-media
        to="/work"
        class="group block w-full overflow-hidden rounded-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:flex-1"
      >
        <NuxtImg
          data-project-image
          :src="project.image"
          :alt="project.title"
          class="h-auto w-full rounded-[14px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="100vw lg:730px"
        />
      </NuxtLink>
    </div>

    <div
      v-if="bottomAsideProject"
      data-project-aside
      class="relative z-20 order-4 mt-6 w-full md:mt-8 lg:order-none lg:absolute lg:bottom-0 lg:mt-0 lg:w-[360px]"
      :class="imagePosition === 'left' ? 'lg:right-0' : 'lg:left-0'"
    >
      <div class="relative border-t border-ink-200">
        <span
          data-project-aside-line
          aria-hidden="true"
          class="invisible pointer-events-none absolute -top-px left-0 h-px w-full bg-accent"
        />
        <ProjectIndexRow :project="bottomAsideProject" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '~/types'

interface Props {
  project: Project
  imagePosition?: 'left' | 'right'
  ghostTitle?: string
  topAsideProject?: Project
  bottomAsideProject?: Project
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'right',
})

const chapterScope = useTemplateRef<HTMLElement>('chapterScope')

useScrollReveal(chapterScope, () => {
  if (!chapterScope.value) return

  const chapter = chapterScope.value
  const media = chapter.querySelector<HTMLElement>('[data-project-media]')
  const image = chapter.querySelector<HTMLImageElement>('[data-project-image]')
  const copy = chapter.querySelector<HTMLElement>('[data-project-copy]')
  const ghostTitle = chapter.querySelector<HTMLElement>('[data-project-ghost]')
  const asideLines = Array.from(
    chapter.querySelectorAll<HTMLElement>('[data-project-aside-line]'),
  )

  if (!media || !image || !copy) return

  gsap.from(media, {
    autoAlpha: 0,
    y: 24,
    duration: 1.2,
    ease: 'editorial',
    scrollTrigger: {
      trigger: media,
      start: 'top 88%',
      toggleActions: 'play none none reverse',
    },
  })

  const mediaQueries = gsap.matchMedia()

  const createChapterTimeline = (
    start: string,
    end: string,
    scrub: number,
    triggerElement: HTMLElement = chapter,
  ) => {
    asideLines.forEach((line, index) => {
      const drawsFromRight = index === 0
        ? props.imagePosition === 'right'
        : props.imagePosition === 'left'

      gsap.set(line, {
        autoAlpha: 1,
        scaleX: 0,
        transformOrigin: drawsFromRight ? 'right center' : 'left center',
      })
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
      },
    })

    asideLines.forEach((line, index) => {
      timeline.to(line, {
        scaleX: 1,
        duration: 0.42,
        ease: 'none',
      }, 0.1 + index * 0.14)
    })

    timeline
      .to(copy, {
        scale: 1.008,
        duration: 0.05,
        ease: 'sine.out',
        force3D: true,
        transformOrigin: 'left center',
      }, 0.64)
      .to(copy, {
        scale: 1,
        duration: 0.09,
        ease: 'sine.inOut',
        force3D: true,
      }, 0.69)
      .to(asideLines, {
        autoAlpha: 0,
        duration: 0.1,
        ease: 'none',
      }, 0.82)
  }

  mediaQueries.add('(min-width: 1024px)', () => {
    const ghostStart = props.imagePosition === 'right' ? 12 : -12

    createChapterTimeline('top 85%', 'top 28%', 1.05)

    if (ghostTitle) {
      gsap.fromTo(ghostTitle, {
        x: ghostStart,
      }, {
        x: -ghostStart,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: chapter,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      })
    }
  })

  mediaQueries.add('(max-width: 1023.98px)', () => {
    createChapterTimeline('top 88%', 'top 40%', 0.9, media)

    if (ghostTitle) {
      gsap.fromTo(ghostTitle, {
        y: 6,
      }, {
        y: -6,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: chapter,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }
  })

  const refreshScrollTriggers = () => ScrollTrigger.refresh()
  if (!image.complete) image.addEventListener('load', refreshScrollTriggers, { once: true })

  return () => {
    image.removeEventListener('load', refreshScrollTriggers)
    mediaQueries.revert()
  }
})
</script>
