<template>
  <component :is="as" class="mx-auto w-full max-w-[1120px] px-5 md:px-10 lg:px-20">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: 'div' | 'section' | 'header' | 'footer' | 'article'
}

withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>
