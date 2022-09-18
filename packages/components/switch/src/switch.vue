<template>
  <div :class="switchKls" :style="styles" @click.prevent="handleToggle">
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
      :tabindex="tabindex"
      @change="toggleSwitch"
      @keydown.enter="handleToggle"
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

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import {
  addUnit,
  debugWarn,
  isBoolean,
  rAF,
  throwError,
} from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'
import { CHANGE_EVENT } from '@element-plus/constants'
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
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { formItem } = useFormItem()
const switchSize = useSize()
const switchDisabled = useDisabled(computed(() => props.loading))
const ns = useNamespace('switch')
const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const value = useVModel(props, 'modelValue', emit)
const checked = computed({
  get: () => value.value === props.activeValue,
  set: (checked) => {
    const val = checked ? props.activeValue : props.inactiveValue
    value.value = val
    emit(CHANGE_EVENT, val)
  },
})

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

const toggleSwitch = () => {
  checked.value = !checked.value
  rAF(() => {
    input.value!.checked = checked.value
  })
}

const handleToggle = async () => {
  if (switchDisabled.value) return

  const { beforeChange } = props
  if (!beforeChange) {
    toggleSwitch()
    return
  }

  let shouldChange: boolean
  try {
    shouldChange = await beforeChange()
  } catch (e) {
    debugWarn(COMPONENT_NAME, `some error occurred: ${e}`)
    return
  }

  if (!isBoolean(shouldChange)) {
    throwError(
      COMPONENT_NAME,
      'beforeChange must return type `Promise<boolean>` or `boolean`'
    )
  } else if (!shouldChange) return
  toggleSwitch()
}

const styles = computed(() => {
  return ns.cssVarBlock({
    ...(props.activeColor ? { 'on-color': props.activeColor } : null),
    ...(props.inactiveColor ? { 'off-color': props.inactiveColor } : null),
    ...(props.borderColor ? { 'border-color': props.borderColor } : null),
  })
})

const focus = (): void => {
  input.value?.focus?.()
}

onMounted(() => {
  input.value!.checked = checked.value
})

watch(checked, (val) => {
  input.value!.checked = val

  if (props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err))
  }
})

watch(
  value,
  (value) => {
    if (![props.activeValue, props.inactiveValue].includes(value)) {
      checked.value = false
    }
  },
  { immediate: true }
)

defineExpose({
  /**
   *  @description manual focus to the switch component
   **/
  focus,
  /**
   * @description whether Switch is checked
   */
  checked,
})
</script>
