<template>
  <div
    class="el-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
  >
    <input
      :id="id"
      ref="input"
      class="el-switch__input"
      type="checkbox"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @change="handleChange"
      @keydown.enter="switchValue"
    />
    <span
      v-if="!inlinePrompt && (inactiveIcon || inactiveText)"
      :class="[
        'el-switch__label',
        'el-switch__label--left',
        !checked ? 'is-active' : '',
      ]"
    >
      <el-icon v-if="inactiveIcon"><component :is="inactiveIcon" /></el-icon>
      <span v-if="!inactiveIcon && inactiveText" :aria-hidden="checked">{{
        inactiveText
      }}</span>
    </span>
    <span
      ref="core"
      class="el-switch__core"
      :style="{ width: (width || 40) + 'px' }"
    >
      <div v-if="inlinePrompt" class="el-switch__inner">
        <template v-if="activeIcon || inactiveIcon">
          <el-icon
            v-if="activeIcon"
            class="is-icon"
            :class="checked ? 'is-show' : 'is-hide'"
          >
            <component :is="activeIcon" />
          </el-icon>
          <el-icon
            v-if="inactiveIcon"
            class="is-icon"
            :class="!checked ? 'is-show' : 'is-hide'"
          >
            <component :is="inactiveIcon" />
          </el-icon>
        </template>
        <template v-else-if="activeText || inactiveIcon">
          <span
            v-if="activeText"
            class="is-text"
            :class="checked ? 'is-show' : 'is-hide'"
            :aria-hidden="!checked"
          >
            {{ activeText.substr(0, 1) }}
          </span>
          <span
            v-if="inactiveText"
            class="is-text"
            :class="!checked ? 'is-show' : 'is-hide'"
            :aria-hidden="checked"
          >
            {{ inactiveText.substr(0, 1) }}
          </span>
        </template>
      </div>
      <div class="el-switch__action">
        <el-icon v-if="loading" class="is-loading"><loading /></el-icon>
      </div>
    </span>
    <span
      v-if="!inlinePrompt && (activeIcon || activeText)"
      :class="[
        'el-switch__label',
        'el-switch__label--right',
        checked ? 'is-active' : '',
      ]"
    >
      <el-icon v-if="activeIcon"><component :is="activeIcon" /></el-icon>
      <span v-if="!activeIcon && activeText" :aria-hidden="!checked">{{
        activeText
      }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, nextTick, watch } from 'vue'
import { isPromise } from '@vue/shared'
import { isBool } from '@element-plus/utils/util'
import { throwError, debugWarn } from '@element-plus/utils/error'
import ElIcon from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'
import {
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  INPUT_EVENT,
} from '@element-plus/utils/constants'
import { useDisabled, useFormItem } from '@element-plus/hooks'
import { switchProps, switchEmits } from './switch'

const COMPONENT_NAME = 'ElSwitch'

export default defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon, Loading },

  props: switchProps,
  emits: switchEmits,

  setup(props, { emit }) {
    const { formItem } = useFormItem()
    const switchDisabled = useDisabled(computed(() => props.loading))

    const isModelValue = ref(props.modelValue !== false)
    const input = ref<HTMLInputElement>()
    const core = ref<HTMLSpanElement>()

    watch(
      () => props.modelValue,
      () => {
        isModelValue.value = true
      }
    )

    watch(
      () => props.value,
      () => {
        isModelValue.value = false
      }
    )

    const actualValue = computed(() => {
      return isModelValue.value ? props.modelValue : props.value
    })

    const checked = computed(() => actualValue.value === props.activeValue)

    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue)
      emit(CHANGE_EVENT, props.inactiveValue)
      emit(INPUT_EVENT, props.inactiveValue)
    }

    watch(checked, () => {
      input.value!.checked = checked.value

      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor()
      }

      if (props.validateEvent) {
        formItem?.validate?.('change')
      }
    })

    const handleChange = (): void => {
      const val = checked.value ? props.inactiveValue : props.activeValue
      emit(UPDATE_MODEL_EVENT, val)
      emit(CHANGE_EVENT, val)
      emit(INPUT_EVENT, val)
      nextTick(() => {
        input.value!.checked = checked.value
      })
    }

    const switchValue = (): void => {
      if (switchDisabled.value) return

      const { beforeChange } = props
      if (!beforeChange) {
        handleChange()
        return
      }

      const shouldChange = beforeChange()

      const isExpectType = [isPromise(shouldChange), isBool(shouldChange)].some(
        (i) => i
      )
      if (!isExpectType) {
        throwError(
          COMPONENT_NAME,
          'beforeChange must return type `Promise<boolean>` or `boolean`'
        )
      }

      if (isPromise(shouldChange)) {
        shouldChange
          .then((result) => {
            if (result) {
              handleChange()
            }
          })
          .catch((e) => {
            debugWarn(COMPONENT_NAME, `some error occurred: ${e}`)
          })
      } else if (shouldChange) {
        handleChange()
      }
    }

    const setBackgroundColor = (): void => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor
      const coreEl = core.value
      if (props.borderColor) coreEl!.style.borderColor = props.borderColor
      else if (!props.borderColor) coreEl!.style.borderColor = newColor
      coreEl!.style.backgroundColor = newColor
      ;(coreEl!.children[0] as HTMLDivElement).style.color = newColor
    }

    const focus = (): void => {
      input.value?.focus?.()
    }

    onMounted(() => {
      if (props.activeColor || props.inactiveColor || props.borderColor) {
        setBackgroundColor()
      }

      input.value!.checked = checked.value
    })

    return {
      input,
      core,
      switchDisabled,
      checked,
      handleChange,
      switchValue,
      focus,
    }
  },
})
</script>
