<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../../store/theme'
import defaultTheme from '../../utils/theme/store/default'

import type { EpThemeColor } from '../../utils/theme/types'

const props = defineProps<{ name: EpThemeColor }>()
const store = useThemeStore()
const { t } = useI18n()
const color = computed(() => store.fullTheme.colors[props.name])
const draft = ref(color.value)
const invalid = ref(false)
const label = computed(() => t(`editor.colors.${props.name}`))

watch(
  () => store.fullTheme,
  () => {
    draft.value = color.value
    invalid.value = false
  }
)

function apply(value: string | null) {
  invalid.value = !store.updateColor(
    props.name,
    value ?? defaultTheme.colors[props.name]!
  )
  if (!invalid.value) draft.value = color.value
}
</script>

<template>
  <div>
    <label :for="`theme-color-${name}`" class="block text-sm mb-2">{{
      label
    }}</label>
    <div class="flex items-center gap-2">
      <el-color-picker
        :model-value="color"
        :aria-label="label"
        @update:model-value="apply"
      />
      <el-input
        :id="`theme-color-${name}`"
        v-model="draft"
        :aria-invalid="invalid"
        :aria-describedby="invalid ? `theme-color-${name}-error` : undefined"
        @change="apply"
      />
    </div>
    <p
      v-if="invalid"
      :id="`theme-color-${name}-error`"
      class="text-xs text-$el-color-danger mt-1"
      role="alert"
    >
      {{ t('editor.invalid-color') }}
    </p>
  </div>
</template>
