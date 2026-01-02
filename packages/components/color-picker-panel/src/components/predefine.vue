<template>
  <div :class="rootKls">
    <div :class="colorsKls">
      <button
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        type="button"
        :disabled="disabled"
        :aria-label="ariaLabel(item.value)"
        :class="colorSelectorKls(item)"
        @click="handleSelect(index)"
      >
        <div :style="{ backgroundColor: item.value }" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { predefineProps } from '../props/predefine'
import { usePredefine, usePredefineDOM } from '../composables/use-predefine'
import { useLocale } from '@element-plus/hooks/use-locale'

defineOptions({
  name: 'ElColorPredefine',
})

const props = defineProps(predefineProps)

const { rgbaColors, handleSelect } = usePredefine(props)
const { rootKls, colorsKls, colorSelectorKls } = usePredefineDOM(props)
const { t } = useLocale()

const ariaLabel = (value: string) => {
  return t('el.colorpicker.predefineDescription', { value })
}
</script>
