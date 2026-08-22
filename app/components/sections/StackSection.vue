<template>
  <section
    ref="stackScope"
    class="relative w-full overflow-hidden px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[160px]"
  >
    <div class="mx-auto w-full max-w-[1120px]">
      <!-- Header -->
      <div
        data-stack-header
        class="relative mb-14 lg:mb-20 lg:grid lg:grid-cols-12 lg:gap-px"
      >
        <div class="flex flex-col gap-3 lg:col-span-8">
          <div class="flex items-center gap-2">
            <span
              data-stack-dot
              class="h-[6px] w-[6px] rounded-full bg-accent"
              aria-hidden="true"
            />
            <span
              data-stack-eyebrow
              class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400"
            >
              Stack / 05
            </span>
          </div>

          <h2
            data-stack-heading
            class="text-[42px] font-medium leading-[1.05] tracking-[-2.8px] text-ink-900 sm:text-[56px] lg:text-[64px]"
          >
            Tools I build with.
          </h2>

          <span
            data-stack-rule
            class="h-[3px] w-[72px] origin-left rounded-full bg-accent"
            aria-hidden="true"
          />

          <p
            data-stack-summary
            class="mt-4 max-w-[440px] text-[16px] leading-[1.5] text-ink-700 lg:text-[18px]"
          >
            Chosen for systems, products, and reliable delivery.
          </p>
        </div>

        <div class="relative mt-8 flex items-end lg:col-span-4 lg:mt-0 lg:justify-end">
          <span
            data-stack-crosshair
            class="absolute right-0 top-0 font-mono text-[15px] font-normal leading-none text-accent"
            aria-hidden="true"
          >+</span>
          <p
            data-stack-copy
            class="max-w-[300px] text-[14px] leading-[1.5] text-ink-700"
          >
            A compact toolkit for building performant applications with clarity and confidence.
          </p>
        </div>
      </div>

      <!-- Capability grid -->
      <div class="grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-12">
        <div
          v-for="category in stackCategories"
          :key="category.index"
          data-stack-cell
          :data-stack-index="category.index"
          class="relative flex flex-col overflow-hidden bg-bg md:col-span-1 min-h-[260px] md:min-h-[280px] lg:min-h-[360px]"
          :class="categoryLayoutClass(category.index)"
        >
          <!-- Ghost category word -->
          <span
            data-stack-ghost
            class="pointer-events-none absolute bottom-[-6px] left-4 z-0 select-none whitespace-nowrap text-[80px] font-medium leading-[0.8] tracking-[-4px] text-[#15151512] lg:bottom-[-4px] lg:left-6 lg:text-[104px]"
            aria-hidden="true"
          >
            {{ category.label }}
          </span>

          <!-- Oversized mark(s) -->
          <div
            v-if="category.marks.length === 1"
            data-stack-mark-wrap
            class="pointer-events-none absolute z-10 select-none"
            :class="singleMarkLayoutClass(category.marks[0].name)"
          >
            <img
              :src="category.marks[0].src"
              alt=""
              aria-hidden="true"
              class="h-auto select-none"
              :class="singleMarkImageClass(category.marks[0].name)"
            />
          </div>
          <div
            v-else
            data-stack-mark-group
            class="pointer-events-none absolute bottom-0 right-0 z-10 flex select-none"
            :class="markGroupLayoutClass(category.index)"
          >
            <img
              v-for="mark in category.marks"
              :key="mark.name"
              :src="mark.src"
              alt=""
              aria-hidden="true"
              class="h-auto select-none"
              :class="groupedMarkSizeClass(mark.name)"
            />
          </div>

          <!-- Content -->
          <div class="relative z-20 flex flex-col gap-2 p-5 lg:p-6">
            <span
              data-stack-number
              class="font-mono text-[11px] font-normal text-accent"
            >
              {{ category.index }}
            </span>
            <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400">
              {{ category.label }}
            </span>
            <ul data-stack-skills class="mt-2 flex flex-col gap-1">
              <li
                v-for="skill in category.skills"
                :key="skill"
                class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]"
              >
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>

        <!-- AI tooling strip -->
        <div class="relative bg-bg md:col-span-2 lg:col-span-12 lg:grid lg:grid-cols-12">
          <div class="flex flex-col gap-6 p-5 lg:col-span-4 lg:gap-3 lg:p-6 lg:pr-10">
            <div class="flex items-center gap-2">
              <span class="font-mono text-[11px] font-normal text-accent">06</span>
              <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-ink-400">
                AI TOOLING
              </span>
            </div>
            <ul class="flex flex-col gap-1">
              <li
                v-for="tool in aiTools"
                :key="tool.name"
                class="text-[15px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900 lg:text-[17px]"
              >
                {{ tool.name }}
              </li>
            </ul>
          </div>

          <div class="mx-5 mb-5 grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 lg:col-span-8 lg:m-0 lg:grid-cols-3">
            <a
              v-for="tool in aiTools"
              :key="tool.name"
              :href="tool.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-5 bg-bg p-5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-[-2px] lg:p-6"
            >
              <img
                :src="tool.icon"
                alt=""
                aria-hidden="true"
                data-stack-ai-icon
                class="h-12 w-12 shrink-0 select-none lg:h-16 lg:w-16"
              />
              <span class="flex flex-col gap-1.5 lg:gap-2">
                <span class="flex items-center gap-2">
                  <span class="text-[17px] font-medium leading-[1.2] tracking-[-0.3px] text-ink-900">
                    {{ tool.name }}
                  </span>
                  <span class="inline-flex">
                    <Icon
                      name="ph:arrow-up-right"
                      class="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </span>
                <span class="max-w-[180px] text-[13px] leading-[1.4] text-ink-700">
                  {{ tool.description }}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { aiTools, stackCategories } from '~/data/stack'

const stackScope = useTemplateRef<HTMLElement>('stackScope')

function categoryLayoutClass(index: string) {
  switch (index) {
    case '01':
      return 'lg:col-span-7 lg:min-h-[320px]'
    case '02':
      return 'lg:col-span-5 lg:min-h-[320px]'
    case '03':
      return 'lg:col-span-5 lg:min-h-[270px]'
    case '04':
      return 'lg:col-span-4 lg:min-h-[270px]'
    case '05':
      return 'md:col-span-2 lg:col-span-3 lg:min-h-[270px]'
    default:
      return ''
  }
}

function singleMarkLayoutClass(name: string) {
  switch (name) {
    case 'Go':
      return 'bottom-[-4px] right-[-10px] w-[64%] max-w-[390px] lg:w-[68%]'
    case 'TypeScript':
      return 'bottom-[-20px] right-[-18px] w-[72%] max-w-[340px] lg:w-[76%]'
    case 'Docker':
      return 'bottom-[-26px] right-[-24px] w-[68%] max-w-[300px] lg:w-[78%]'
    default:
      return 'bottom-0 right-0 w-[40%]'
  }
}

function singleMarkImageClass(name: string) {
  switch (name) {
    case 'Go':
      return 'w-full rotate-[4deg]'
    case 'TypeScript':
      return 'w-full rotate-[-8deg]'
    default:
      return 'w-full'
  }
}

function markGroupLayoutClass(index: string) {
  switch (index) {
    case '03':
      return 'bottom-[-6px] w-[62%] items-end gap-[16px]'
    case '04':
      return 'bottom-[-6px] w-[62%] items-end gap-[14px]'
    default:
      return 'bottom-0 w-[62%] items-end gap-[12px]'
  }
}

function groupedMarkSizeClass(name: string) {
  switch (name) {
    case 'PostgreSQL':
      return 'w-[58%] max-w-[200px]'
    case 'Redis':
      return 'w-[38%] max-w-[150px]'
    case 'Flutter':
      return 'w-[56%] max-w-[190px]'
    case 'Expo':
      return 'w-[42%] max-w-[160px]'
    default:
      return 'w-[50%]'
  }
}

function cellMotionPreset(cellIndex: string) {
  switch (cellIndex) {
    case '01':
      return { x: -55, y: 0, rotation: -7, scale: 0.94 }
    case '02':
      return { x: 55, y: -18, rotation: 8, scale: 0.92 }
    case '05':
      return { x: 0, y: 48, rotation: -5, scale: 0.95 }
    default:
      return { x: 0, y: 0, rotation: 0, scale: 0.96 }
  }
}

function cellStartPoint(index: number) {
  if (index === 0) return 'top 88%'
  if (index === 4) return 'top 80%'
  return 'top 84%'
}

function animateCell(cell: HTMLElement) {
  const cellIndex = cell.dataset.stackIndex ?? ''
  const number = cell.querySelector<HTMLElement>('[data-stack-number]')
  const skills = cell.querySelector<HTMLElement>('[data-stack-skills]')
  const mark = cell.querySelector<HTMLElement>('[data-stack-mark-wrap], [data-stack-mark-group]')
  const numberText = number?.textContent?.trim() ?? ''

  const preset = cellMotionPreset(cellIndex)
  const grouped = Boolean(cell.querySelector('[data-stack-mark-group]'))
  const orderIndex = Number.parseInt(cellIndex, 10) - 1

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: cell,
      start: cellStartPoint(orderIndex),
      end: 'bottom 52%',
      scrub: 0.85,
      invalidateOnRefresh: true,
    },
  })

  if (number) {
    timeline
      .fromTo(
        number,
        { autoAlpha: 0.35, textContent: '00' },
        {
          autoAlpha: 1,
          duration: 0.04,
          ease: 'none',
          scrambleText: {
            text: numberText,
            chars: '0123456789',
            speed: 0.8,
          },
        },
        0.04,
      )
  }

  if (skills) {
    const skillItems = Array.from(skills.children) as HTMLElement[]

    timeline.fromTo(
      skills,
      { autoAlpha: 0.75, filter: 'blur(1px)' },
      { autoAlpha: 1, filter: 'blur(0px)', duration: 0.06, ease: 'none' },
      0.02,
    )

    if (cellIndex === '01' || cellIndex === '02') {
      const fromX = cellIndex === '01' ? -8 : 8
      skillItems.forEach((item, i) => {
        timeline.fromTo(
          item,
          { x: fromX },
          { x: 0, duration: 0.05, ease: 'sine.out' },
          0.06 + i * 0.03,
        )
      })
    }
  }

  if (mark) {
    const { x, y, rotation, scale } = preset

    timeline.fromTo(
      mark,
      { autoAlpha: 0, x, y, rotation, scale },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.14,
        ease: 'sine.out',
      },
      0.06,
    )

    if (grouped) {
      const marks = Array.from(mark.querySelectorAll('img'))

      marks.forEach((img, imgIndex) => {
        const from = cellIndex === '03'
          ? { x: imgIndex === 0 ? -28 : 28, rotation: imgIndex === 0 ? -4 : 4 }
          : { y: imgIndex === 0 ? 26 : -22, rotation: imgIndex === 0 ? -3 : 3 }

        timeline.fromTo(
          img,
          from,
          { x: 0, y: 0, rotation: 0, duration: 0.11, ease: 'sine.out' },
          0.06,
        )
      })
    }
  }
}

useScrollReveal(stackScope, () => {
  if (!stackScope.value) return

  const scope = stackScope.value
  const cells = Array.from(scope.querySelectorAll<HTMLElement>('[data-stack-cell]'))
  const ghosts = Array.from(scope.querySelectorAll<HTMLElement>('[data-stack-ghost]'))

  let split: SplitText | undefined

  const header = scope.querySelector<HTMLElement>('[data-stack-header]')
  if (header) {
    const heading = header.querySelector<HTMLElement>('[data-stack-heading]')
    const rule = header.querySelector<HTMLElement>('[data-stack-rule]')
    const dot = header.querySelector<HTMLElement>('[data-stack-dot]')
    const crosshair = header.querySelector<HTMLElement>('[data-stack-crosshair]')
    const copy = header.querySelector<HTMLElement>('[data-stack-copy]')
    const eyebrow = header.querySelector<HTMLElement>('[data-stack-eyebrow]')
    const summary = header.querySelector<HTMLElement>('[data-stack-summary]')

    if (heading && rule && dot && crosshair && copy && eyebrow && summary) {
      split = SplitText.create(heading, { type: 'words' })

      const words = split.words as HTMLElement[]
      const wordFrom = [
        { x: -18, y: 10, rotation: -2.5 },
        { y: -12, rotation: 2 },
        { y: 14, rotation: -1.5 },
        { x: 18, y: 8, rotation: 2.5 },
      ]

      gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 88%',
          end: 'top 40%',
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(
          eyebrow,
          { x: -12, rotation: -2, autoAlpha: 0.35 },
          { x: 0, rotation: 0, autoAlpha: 1, duration: 0.08, ease: 'sine.out' },
          0,
        )
        .fromTo(
          words,
          {
            x: (index: number) => wordFrom[index]?.x ?? 0,
            y: (index: number) => wordFrom[index]?.y ?? 0,
            rotation: (index: number) => wordFrom[index]?.rotation ?? 0,
          },
          { x: 0, y: 0, rotation: 0, duration: 0.16, ease: 'sine.out', stagger: 0.02 },
          0.06,
        )
        .fromTo(dot, { scale: 0.7 }, { scale: 1, duration: 0.04, ease: 'sine.out' }, 0.12)
        .fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.08, ease: 'none' }, 0.16)
        .fromTo(
          summary,
          { y: 10, rotation: 0.5, filter: 'blur(1px)', autoAlpha: 0.55 },
          { y: 0, rotation: 0, filter: 'blur(0px)', autoAlpha: 1, duration: 0.08, ease: 'sine.out' },
          0.2,
        )
        .fromTo(
          crosshair,
          { autoAlpha: 0, rotation: 45 },
          { autoAlpha: 1, rotation: 0, duration: 0.05, ease: 'sine.out' },
          0.24,
        )
        .fromTo(
          copy,
          { autoAlpha: 0.75, filter: 'blur(1px)' },
          { autoAlpha: 1, filter: 'blur(0px)', duration: 0.05, ease: 'none' },
          0.28,
        )
    }
  }

  cells.forEach(animateCell)

  const aiIcons = Array.from(scope.querySelectorAll<HTMLElement>('[data-stack-ai-icon]'))

  aiIcons.forEach((icon, index) => {
    const from = index === 0
      ? { rotation: -8, x: -10 }
      : index === 1
        ? { rotation: 6, scale: 0.92 }
        : { rotation: -6, x: 16 }

    gsap.timeline({
      scrollTrigger: {
        trigger: icon,
        start: 'top 88%',
        end: 'bottom 55%',
        scrub: 0.85,
        invalidateOnRefresh: true,
      },
    })
      .fromTo(
        icon,
        from,
        { rotation: 0, scale: 1, x: 0, duration: 0.12, ease: 'sine.out' },
        0.04,
      )
      .to(icon, { scale: 1.035, duration: 0.03, ease: 'sine.out' }, 0.16)
      .to(icon, { scale: 1, duration: 0.05, ease: 'sine.inOut' }, 0.19)
  })

  ghosts.forEach((ghost, index) => {
    gsap.fromTo(ghost, {
      x: index % 2 === 0 ? -10 : 10,
    }, {
      x: index % 2 === 0 ? 10 : -10,
      ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
    })
  })

  return () => split?.revert()
})
</script>
