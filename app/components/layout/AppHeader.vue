<template>
  <header class="relative z-30 w-full">
    <Container as="div" class="flex h-[72px] items-center justify-between md:h-[88px]">
      <div class="flex items-center gap-3 md:gap-4">
        <NuxtLink
          to="/"
          aria-label="Back to home"
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 transition-colors duration-300 hover:bg-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-10 md:w-10"
        >
          <span class="font-mono text-xs font-semibold text-surface md:text-sm">R/</span>
        </NuxtLink>
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        <a
          :href="contactEmail"
          class="hidden font-sans text-sm font-medium text-ink-900 transition-colors duration-200 hover:text-accent md:inline"
        >
          {{ contactEmailAddress }}
        </a>
      </div>

      <div class="relative flex items-center gap-3 md:gap-3.5">
        <StatusBadge />

        <div ref="workMenuScope" class="relative">
          <button
            ref="workMenuTrigger"
            type="button"
            :aria-label="isWorkMenuOpen ? 'Close work menu' : 'Open work menu'"
            aria-controls="work-menu"
            :aria-expanded="isWorkMenuOpen"
            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-surface transition-[background-color,transform] duration-300 hover:bg-ink-200/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.96] md:h-[42px] md:w-[42px]"
            @click="toggleWorkMenu"
          >
            <Icon
              :name="isWorkMenuOpen ? 'ph:x' : 'ph:list'"
              class="h-[18px] w-[18px] text-ink-900 md:h-5 md:w-5"
            />
          </button>

          <!-- Handwritten annotation, precisely aimed at the button -->
          <div
            v-if="route.path === '/'"
            aria-hidden="true"
            class="pointer-events-none absolute right-0 top-[42px] h-[72px] w-[196px] text-accent transition-opacity duration-200 motion-reduce:transition-none sm:h-[82px] sm:w-[210px] md:top-[46px] md:h-[118px] md:w-[250px]"
            :class="isWorkMenuOpen ? 'opacity-0' : 'opacity-100'"
          >
            <svg
              viewBox="0 0 67 87"
              fill="none"
              class="absolute right-[5px] top-[2px] h-[46px] w-[48px] sm:right-[4px] sm:top-[2px] sm:h-[54px] sm:w-[50px] md:right-0 md:top-[-2px] md:h-[87px] md:w-[67px]"
            >
              <path
                d="M13 78C31 69 45 47 46 12"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M36 24L46 10L57 24"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              class="absolute bottom-[4px] right-[40px] whitespace-nowrap font-hand text-[26px] font-medium leading-none text-accent sm:bottom-[6px] sm:right-[48px] sm:text-[31px] md:bottom-0 md:right-[56px] md:text-[46px]"
              style="transform: rotate(-4deg)"
            >
              another menu
            </span>
          </div>

          <Transition
            :disabled="reducedMotion"
            enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            enter-from-class="opacity-0 -translate-y-2 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-2 scale-[0.97]"
          >
            <nav
              v-if="isWorkMenuOpen"
              id="work-menu"
              aria-label="Work"
              class="absolute right-0 top-[52px] z-50 w-[min(320px,calc(100vw-40px))] rounded-[20px] border border-ink-200 bg-surface p-4 md:top-[60px]"
            >
              <NuxtLink
                to="/work"
                class="group flex w-full cursor-pointer flex-col gap-3 rounded-[14px] p-3 transition-colors duration-300 hover:bg-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                @click="closeWorkMenu"
              >
                <div class="flex items-center justify-between">
                  <span class="font-mono text-[11px] font-normal uppercase tracking-[0.8px] text-accent">
                    WORK / INDEX
                  </span>
                  <span class="font-mono text-[11px] font-normal text-ink-400 transition-colors duration-200 motion-reduce:transition-none group-hover:text-accent">
                    01
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="font-sans text-[17px] font-medium leading-[1.2] text-ink-900 transition-transform duration-200 motion-reduce:transform-none group-hover:translate-x-0.5 md:text-[19px]">
                    Curated work
                  </span>
                  <Icon
                    name="ph:arrow-up-right"
                    class="h-[17px] w-[17px] text-ink-900 transition-transform duration-300 motion-reduce:transform-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p class="font-sans text-[13px] font-normal leading-[1.5] text-ink-700">
                  Selected case studies across web, mobile, and backend systems.
                </p>
              </NuxtLink>
            </nav>
          </Transition>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { contactEmail, contactEmailAddress } from '~/data/contact'

const route = useRoute()
const isWorkMenuOpen = ref(false)
const reducedMotion = useReducedMotion()
const workMenuScope = useTemplateRef<HTMLElement>('workMenuScope')
const workMenuTrigger = useTemplateRef<HTMLButtonElement>('workMenuTrigger')

function toggleWorkMenu() {
  isWorkMenuOpen.value = !isWorkMenuOpen.value
}

function closeWorkMenu() {
  isWorkMenuOpen.value = false
}

function onDocumentPointerDown(event: PointerEvent) {
  if (!workMenuScope.value) return
  if (!workMenuScope.value.contains(event.target as Node)) closeWorkMenu()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isWorkMenuOpen.value) {
    isWorkMenuOpen.value = false
    workMenuTrigger.value?.focus()
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>
