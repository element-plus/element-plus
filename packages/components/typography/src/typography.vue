<template>
  <main
    ref="_ref"
    role="typography"
    :class="[ns.b()]"
    :style="{ color: props.color, fontFamily: props.font }"
  >
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { defineExpose, defineProps, provide, reactive, ref, toRef } from 'vue'
import { typographyContextKey, typographyProps } from './typography'
import { ns } from './util'
defineOptions({
  name: 'ElTypography',
})
const _ref = ref<HTMLButtonElement>()

const props = defineProps(typographyProps)

provide(
  typographyContextKey,
  reactive({
    editable: toRef(props, 'editable'),
    copyable: toRef(props, 'copyable'),
  })
)
defineExpose({
  ref: _ref,
})
</script>
