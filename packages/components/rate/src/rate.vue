<template>
  <div
    :class="rateKls"
    role="slider"
    :aria-valuenow="currentValue"
    :aria-valuetext="text"
    aria-valuemin="0"
    :aria-valuemax="max"
    tabindex="0"
    @keydown="handleKey"
  >
    <span
      v-for="(item, key) in max"
      :key="key"
      :class="ns.e('item')"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <el-icon
        :class="[ns.e('icon'), { hover: hoverIndex === item }]"
        :style="getIconStyle(item)"
      >
        <component
          :is="iconComponents[item - 1]"
          v-if="!showDecimalIcon(item)"
        />
        <el-icon
          v-if="showDecimalIcon(item)"
          :style="decimalStyle"
          :class="[ns.e('icon'), ns.e('decimal')]"
        >
          <component :is="decimalIconComponent" />
        </el-icon>
      </el-icon>
    </span>
    <span
      v-if="showText || showScore"
      :class="ns.e('text')"
      :style="{ color: textColor }"
    >
      {{ text }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, computed, ref, watch } from 'vue'
import { isObject, isArray } from '@vue/shared'
import { formContextKey } from '@element-plus/tokens'
import { hasClass } from '@element-plus/utils'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { ElIcon } from '@element-plus/components/icon'
import { StarFilled, Star } from '@element-plus/icons-vue'
import { useNamespace, useSize } from '@element-plus/hooks'
import { rateProps, rateEmits } from './rate'
import type { FormContext } from '@element-plus/tokens'

function getValueFromMap<T>(
  value: number,
  map: Record<string, T | { excluded?: boolean; value: T }>
) {
  const isExcludedObject = (
    val: unknown
  ): val is { excluded?: boolean } & Record<any, unknown> => isObject(val)

  const matchedKeys = Object.keys(map)
    .map((key) => +key)
    .filter((key) => {
      const val = map[key]
      const excluded = isExcludedObject(val) ? val.excluded : false
      return excluded ? value < key : value <= key
    })
    .sort((a, b) => a - b)
  const matchedValue = map[matchedKeys[0]]
  return (isExcludedObject(matchedValue) && matchedValue.value) || matchedValue
}

export default defineComponent({
  name: 'ElRate',
  components: {
    ElIcon,
    StarFilled,
    Star,
  },
  props: rateProps,
  emits: rateEmits,

  setup(props, { emit }) {
    const elForm = inject(formContextKey, {} as FormContext)

    const rateSize = useSize()
    const ns = useNamespace('rate')

    const currentValue = ref(props.modelValue)
    const hoverIndex = ref(-1)
    const pointerAtLeftHalf = ref(true)

    const rateKls = computed(() => [ns.b(), ns.m(rateSize.value)])

    const rateDisabled = computed(() => props.disabled || elForm.disabled)
    const text = computed(() => {
      let result = ''
      if (props.showScore) {
        result = props.scoreTemplate.replace(
          /\{\s*value\s*\}/,
          rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`
        )
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1]
      }
      return result
    })
    const valueDecimal = computed(
      () => props.modelValue * 100 - Math.floor(props.modelValue) * 100
    )
    const colorMap = computed(() =>
      isArray(props.colors)
        ? {
            [props.lowThreshold]: props.colors[0],
            [props.highThreshold]: { value: props.colors[1], excluded: true },
            [props.max]: props.colors[2],
          }
        : props.colors
    )
    const activeColor = computed(() =>
      getValueFromMap(currentValue.value, colorMap.value)
    )
    const decimalStyle = computed(() => {
      let width = ''
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`
      } else if (props.allowHalf) {
        width = '50%'
      }
      return {
        color: activeColor.value,
        width,
      }
    })
    const componentMap = computed(() =>
      isArray(props.icons)
        ? {
            [props.lowThreshold]: props.icons[0],
            [props.highThreshold]: {
              value: props.icons[1],
              excluded: true,
            },
            [props.max]: props.icons[2],
          }
        : props.icons
    )
    const decimalIconComponent = computed(() =>
      getValueFromMap(props.modelValue, componentMap.value)
    )
    const voidComponent = computed(() =>
      rateDisabled.value ? props.disabledvoidIcon : props.voidIcon
    )
    const activeComponent = computed(() =>
      getValueFromMap(currentValue.value, componentMap.value)
    )
    const iconComponents = computed(() => {
      const result = Array(props.max)
      const threshold = currentValue.value
      result.fill(activeComponent.value, 0, threshold)
      result.fill(voidComponent.value, threshold, props.max)
      return result
    })

    function showDecimalIcon(item: number) {
      const showWhenDisabled =
        rateDisabled.value &&
        valueDecimal.value > 0 &&
        item - 1 < props.modelValue &&
        item > props.modelValue
      const showWhenAllowHalf =
        props.allowHalf &&
        pointerAtLeftHalf.value &&
        item - 0.5 <= currentValue.value &&
        item > currentValue.value
      return showWhenDisabled || showWhenAllowHalf
    }

    function getIconStyle(item: number) {
      const voidColor = rateDisabled.value
        ? props.disabledVoidColor
        : props.voidColor
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor,
      }
    }

    function selectValue(value: number) {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit(UPDATE_MODEL_EVENT, currentValue.value)
        if (props.modelValue !== currentValue.value) {
          emit('change', currentValue.value)
        }
      } else {
        emit(UPDATE_MODEL_EVENT, value)
        if (props.modelValue !== value) {
          emit('change', value)
        }
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (rateDisabled.value) {
        return
      }
      let _currentValue = currentValue.value
      const code = e.code
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5
        } else {
          _currentValue += 1
        }
        e.stopPropagation()
        e.preventDefault()
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5
        } else {
          _currentValue -= 1
        }
        e.stopPropagation()
        e.preventDefault()
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue
      _currentValue = _currentValue > props.max ? props.max : _currentValue
      emit(UPDATE_MODEL_EVENT, _currentValue)
      emit('change', _currentValue)
      return _currentValue
    }

    function setCurrentValue(value: number, event: MouseEvent) {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf) {
        // TODO: use cache via computed https://github.com/element-plus/element-plus/pull/5456#discussion_r786472092
        let target = event.target as HTMLElement
        if (hasClass(target, ns.e('item'))) {
          target = target.querySelector(`.${ns.e('icon')}`)!
        }
        if (target.clientWidth === 0 || hasClass(target, ns.e('decimal'))) {
          target = target.parentNode as HTMLElement
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value
      } else {
        currentValue.value = value
      }
      hoverIndex.value = value
    }

    function resetCurrentValue() {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value =
          props.modelValue !== Math.floor(props.modelValue)
      }
      currentValue.value = props.modelValue
      hoverIndex.value = -1
    }

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val
        pointerAtLeftHalf.value =
          props.modelValue !== Math.floor(props.modelValue)
      }
    )

    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0)
    }

    return {
      ns,
      hoverIndex,
      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconComponent,
      iconComponents,
      rateKls,

      showDecimalIcon,
      getIconStyle,
      selectValue,
      handleKey,
      setCurrentValue,
      resetCurrentValue,
    }
  },
})
</script>
