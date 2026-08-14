<template>
  <header class="w-full">
    <Container as="div" class="flex h-[72px] items-center justify-between md:h-[88px]">
      <div class="flex items-center gap-3 md:gap-4">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 md:h-10 md:w-10"
        >
          <span class="font-mono text-xs font-semibold text-surface md:text-sm">R/</span>
        </div>
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        <span class="hidden font-sans text-sm font-medium text-ink-900 md:inline">
          hello@rizky.dev
        </span>
      </div>

      <div class="flex items-center gap-3 md:gap-3.5">
        <StatusBadge />
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full bg-surface md:h-[42px] md:w-[42px]"
          aria-label="Open menu"
        >
          <Icon name="ph:list" class="h-[18px] w-[18px] text-ink-900 md:h-5 md:w-5" />
        </button>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
// Header layout component. Mobile menu behavior deferred to Phase 4/5.
// TODO: wire menu button to mobile navigation overlay.
</script>
