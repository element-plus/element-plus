<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  provide,
  renderSlot,
  toRefs,
  watch,
} from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { debugWarn, isValidComponentSize } from '@element-plus/utils'
import { useNamespace, useSize } from '@element-plus/hooks'
import { useCheckboxGroup } from './useCheckbox'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export default defineComponent({
  name: 'ElCheckboxGroup',

  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckboxGroup()
    const checkboxGroupSize = useSize()
    const ns = useNamespace('checkbox')

    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'ElCheckboxGroup',
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })

    watch(
      () => props.modelValue,
      () => {
        elFormItem.validate?.('change').catch((err) => debugWarn(err))
      }
    )
    return () => {
      return h(
        props.tag,
        {
          class: ns.b('group'),
          role: 'group',
          'aria-label': 'checkbox-group',
        },
        [renderSlot(slots, 'default')]
      )
    }
  },
})
</script>
