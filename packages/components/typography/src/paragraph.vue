<template>
  <section
    ref="_ref"
    :class="[ns.e('paragraph')]"
    :style="{ color: props.color, font: props.font }"
  >
    <slot />
    <slot name="suffix">
      {{ props.suffix }}
    </slot>
  </section>
</template>

<script setup lang="ts">
import { defineExpose, defineProps, provide, reactive, ref, toRef } from 'vue'
import { ns } from './util'
import { commonInjection, paragraphContextKey } from './typography'
import type { ComponentPublicInstance } from 'vue'
const props = defineProps({
  ...commonInjection,
  suffix: String,
})
const _ref = ref<ComponentPublicInstance>()
provide(
  paragraphContextKey,
  reactive({
    color: toRef(props, 'color'),
  })
)
defineExpose({
  ref: '_ref',
})
</script>
