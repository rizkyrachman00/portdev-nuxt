<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    class="inline-flex items-center justify-center gap-2 md:gap-3 font-sans text-[14px] font-semibold transition-colors duration-200 md:text-[15px]"
    :class="variantClasses"
  >
    <Icon v-if="icon && iconPosition === 'left'" :name="icon" class="h-[17px] w-[17px]" />
    <span><slot /></span>
    <Icon v-if="icon && iconPosition === 'right'" :name="icon" class="h-[17px] w-[17px]" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonIcon = 'ph:arrow-down' | 'ph:download-simple' | 'ph:arrow-up-right'

interface Props {
  variant: 'primary' | 'secondary' | 'accent'
  to?: string
  icon?: ButtonIcon
  iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  iconPosition: 'right',
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'rounded-full bg-ink-900 text-surface px-4 py-3 hover:bg-ink-700 md:px-5 md:py-3.5'
    case 'secondary':
      return 'text-ink-900 hover:text-accent'
    case 'accent':
      return 'rounded-full bg-accent text-ink-900 px-4 py-3.5 hover:bg-accent/90 md:px-5 md:py-4'
    default:
      return ''
  }
})
</script>
