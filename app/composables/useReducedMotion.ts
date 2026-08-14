import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

export function useReducedMotion() {
  const reducedMotion = ref(false)
  let mediaQuery: MediaQueryList | undefined

  const updatePreference = () => {
    reducedMotion.value = mediaQuery?.matches ?? false
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', updatePreference)
  })

  return readonly(reducedMotion)
}
