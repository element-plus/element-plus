import { computed, inject, ref, watch, watchEffect } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { PredefineProps } from '../props/predefine'
import { colorPickerPanelContextKey } from '../color-picker-panel'
import Color from '../utils/color'

import type { Ref } from 'vue'

export const usePredefine = (props: PredefineProps) => {
  const { currentColor } = inject(colorPickerPanelContextKey)!

  const rgbaColors = ref(parseColors(props.colors, props.color)) as Ref<Color[]>

  watch(
    () => currentColor.value,
    (val) => {
      const color = new Color({
        value: val,
      })

      rgbaColors.value.forEach((item) => {
        item.selected = color.compare(item)
      })
    }
  )

  watchEffect(() => {
    rgbaColors.value = parseColors(props.colors, props.color)
  })

  function handleSelect(index: number) {
    props.color.fromString(props.colors[index])
  }

  function parseColors(colors: string[], color: Color) {
    return colors.map((value) => {
      const c = new Color({
        value,
        enableAlpha: props.enableAlpha,
      })
      c.selected = c.compare(color)
      return c
    })
  }

  return {
    rgbaColors,
    handleSelect,
  }
}

export const usePredefineDOM = (props: PredefineProps) => {
  const ns = useNamespace('color-predefine')

  const rootKls = computed(() => [ns.b(), ns.is('disabled', props.disabled)])

  const colorsKls = computed(() => ns.e('colors'))

  function colorSelectorKls(item: Color) {
    return [
      ns.e('color-selector'),
      ns.is('alpha', item.get('alpha') < 100),
      { selected: item.selected },
    ]
  }

  return {
    rootKls,
    colorsKls,
    colorSelectorKls,
  }
}
