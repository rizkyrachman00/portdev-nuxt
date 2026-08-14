import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { gsap } from 'gsap'

type MotionSetup = () => void | (() => void)

export function useScrollReveal(
  scope: Readonly<Ref<HTMLElement | null>>,
  setup: MotionSetup,
) {
  const reducedMotion = useReducedMotion()
  let context: gsap.Context | undefined
  let teardown: (() => void) | undefined
  let stopPreferenceWatch: (() => void) | undefined

  const clear = () => {
    context?.revert()
    teardown?.()
    context = undefined
    teardown = undefined
  }

  onMounted(() => {
    stopPreferenceWatch = watch(
      reducedMotion,
      (reduce) => {
        clear()

        if (!reduce && scope.value) {
          context = gsap.context(() => {
            teardown = setup() || undefined
          }, scope.value)
        }
      },
      { immediate: true },
    )
  })

  onBeforeUnmount(() => {
    stopPreferenceWatch?.()
    clear()
  })

  return reducedMotion
}
