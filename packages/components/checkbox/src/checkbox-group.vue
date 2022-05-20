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
import { debugWarn } from '@element-plus/utils'
import { useNamespace, useSize } from '@element-plus/hooks'
import {
  useCheckboxGroup,
  useCheckboxGroupId,
  useCheckboxGroupProps,
} from './checkbox'

export default defineComponent({
  name: 'ElCheckboxGroup',

  props: useCheckboxGroupProps,

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckboxGroup()
    const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
      elFormItem,
    })
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
          id: groupId.value,
          class: ns.b('group'),
          role: 'group',
          'aria-label': !isLabeledByFormItem.value
            ? props.label || 'checkbox-group'
            : undefined,
          'aria-labelledby': isLabeledByFormItem.value
            ? elFormItem.labelId
            : undefined,
        },
        [renderSlot(slots, 'default')]
      )
    }
  },
})
</script>
