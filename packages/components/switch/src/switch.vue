<template>
  <div :class="switchKls" :style="styles" @click.prevent="switchValue">
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
          <el-icon :class="ns.is('icon')">
            <component :is="checked ? activeIcon : inactiveIcon" />
          </el-icon>
        </template>
        <template v-else-if="activeText || inactiveText">
          <span :class="ns.is('text')" :aria-hidden="!checked">
            {{ checked ? activeText : inactiveText }}
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
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
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
  useDeprecated,
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

const vm = getCurrentInstance()!
const { formItem } = useFormItem()
const switchSize = useSize()
const ns = useNamespace('switch')

useDeprecated(
  {
    from: '"value"',
    replacement: '"model-value" or "v-model"',
    scope: COMPONENT_NAME,
    version: '2.3.0',
    ref: 'https://element-plus.org/en-US/component/switch.html#attributes',
    type: 'Attribute',
  },
  computed(() => !!vm.vnode.props?.value)
)

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const switchDisabled = useDisabled(computed(() => props.loading))
const isControlled = ref(props.modelValue !== false)
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
    isControlled.value = true
  }
)

watch(
  () => props.value,
  () => {
    isControlled.value = false
  }
)

const actualValue = computed(() => {
  return isControlled.value ? props.modelValue : props.value
})

const checked = computed(() => actualValue.value === props.activeValue)

if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
  emit(UPDATE_MODEL_EVENT, props.inactiveValue)
  emit(CHANGE_EVENT, props.inactiveValue)
  emit(INPUT_EVENT, props.inactiveValue)
}

watch(checked, (val) => {
  input.value!.checked = val

  if (props.validateEvent) {
    formItem?.validate?.('change').catch((err) => debugWarn(err))
  }
})

const handleChange = () => {
  const val = checked.value ? props.inactiveValue : props.activeValue
  emit(UPDATE_MODEL_EVENT, val)
  emit(CHANGE_EVENT, val)
  emit(INPUT_EVENT, val)
  nextTick(() => {
    input.value!.checked = checked.value
  })
}

const switchValue = () => {
  if (switchDisabled.value) return

  const { beforeChange } = props
  if (!beforeChange) {
    handleChange()
    return
  }

  const shouldChange = beforeChange()

  const isPromiseOrBool = [
    isPromise(shouldChange),
    isBoolean(shouldChange),
  ].includes(true)
  if (!isPromiseOrBool) {
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
