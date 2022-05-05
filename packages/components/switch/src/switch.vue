<template>
  <div :class="switchKls" @click.prevent="switchValue">
    <input
      :id="inputId"
      ref="input"
      :class="ns.e('input')"
      type="checkbox"
      role="switch"
      :aria-checked="checked"
      :aria-disabled="switchDisabled"
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
        ns.e('label'),
        ns.em('label', 'left'),
        ns.is('active', !checked),
      ]"
    >
      <el-icon v-if="inactiveIcon"><component :is="inactiveIcon" /></el-icon>
      <span v-if="!inactiveIcon && inactiveText" :aria-hidden="checked">{{
        inactiveText
      }}</span>
    </span>
    <span ref="core" :class="ns.e('core')" :style="coreStyle">
      <div v-if="inlinePrompt" :class="ns.e('inner')">
        <template v-if="activeIcon || inactiveIcon">
          <el-icon
            v-if="activeIcon"
            :class="[ns.is('icon'), checked ? ns.is('show') : ns.is('hide')]"
          >
            <component :is="activeIcon" />
          </el-icon>
          <el-icon
            v-if="inactiveIcon"
            :class="[ns.is('icon'), !checked ? ns.is('show') : ns.is('hide')]"
          >
            <component :is="inactiveIcon" />
          </el-icon>
        </template>
        <template v-else-if="activeText || inactiveIcon">
          <span
            v-if="activeText"
            :class="[ns.is('text'), checked ? ns.is('show') : ns.is('hide')]"
            :aria-hidden="!checked"
          >
            {{ activeText.substring(0, 3) }}
          </span>
          <span
            v-if="inactiveText"
            :class="[ns.is('text'), !checked ? ns.is('show') : ns.is('hide')]"
            :aria-hidden="checked"
          >
            {{ inactiveText.substring(0, 3) }}
          </span>
        </template>
      </div>
      <div :class="ns.e('action')">
        <el-icon v-if="loading" :class="ns.is('loading')"><loading /></el-icon>
      </div>
    </span>
    <span
      v-if="!inlinePrompt && (activeIcon || activeText)"
      :class="[
        ns.e('label'),
        ns.em('label', 'right'),
        ns.is('active', checked),
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
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { isPromise } from '@vue/shared'
import { addUnit, debugWarn, isBoolean, throwError } from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import {
  useDisabled,
  useFormItem,
  useFormItemInputId,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import { switchEmits, switchProps } from './switch'

import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElSwitch'

export default defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon, Loading },

  props: switchProps,
  emits: switchEmits,

  setup(props, { emit }) {
    const { formItem } = useFormItem()
    const switchDisabled = useDisabled(computed(() => props.loading))
    const ns = useNamespace('switch')

    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem,
    })

    const switchSize = useSize()
    const isModelValue = ref(props.modelValue !== false)
    const input = ref<HTMLInputElement>()
    const core = ref<HTMLSpanElement>()

    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is('disabled', switchDisabled.value),
      ns.is('checked', checked.value),
    ])

    const coreStyle = computed<CSSProperties>(() => ({
      width: addUnit(props.width),
    }))

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
        formItem?.validate?.('change').catch((err) => debugWarn(err))
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

      const isExpectType = [
        isPromise(shouldChange),
        isBoolean(shouldChange),
      ].some((i) => i)
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
      ns,
      input,
      inputId,
      core,
      switchDisabled,
      checked,
      switchKls,
      coreStyle,
      handleChange,
      switchValue,
      focus,
    }
  },
})
</script>
