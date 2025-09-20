import { reactive, ref, watch } from 'vue'
import Color from '../utils/color'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type AlphaSlider from '../components/alpha-slider.vue'
import type HueSlider from '../components/hue-slider.vue'
import type SvPanel from '../components/sv-panel.vue'

type CommonColorProps = {
  modelValue?: string | null
  showAlpha: boolean
  colorFormat?: string
}
type CommonColorEmits = (event: 'update:modelValue', ...args: any[]) => void

export const useCommonColor = <
  P extends CommonColorProps,
  E extends CommonColorEmits
>(
  props: P,
  emit: E
) => {
  const hueRef = ref<InstanceType<typeof HueSlider>>()
  const svRef = ref<InstanceType<typeof SvPanel>>()
  const alphaRef = ref<InstanceType<typeof AlphaSlider>>()

  const color = reactive(
    new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || '',
      value: props.modelValue,
    })
  ) as Color

  function updateComposites() {
    hueRef.value?.update()
    svRef.value?.update()
    alphaRef.value?.update()
  }

  watch(
    () => [props.colorFormat, props.showAlpha],
    () => {
      color.enableAlpha = props.showAlpha
      color.format = props.colorFormat || color.format
      color.doOnChange()
      emit(UPDATE_MODEL_EVENT, color.value)
    }
  )

  return {
    hueRef,
    svRef,
    alphaRef,
    updateComposites,
    color,
  }
}
