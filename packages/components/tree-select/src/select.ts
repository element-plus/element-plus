// @ts-nocheck
import { computed, nextTick, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@element-plus/components/select'
import { useNamespace } from '@element-plus/hooks'
import type { Ref } from 'vue'
import type ElTree from '@element-plus/components/tree'

export const useSelect = (
  props,
  { attrs, emit },
  {
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof ElSelect> | undefined>
    tree: Ref<InstanceType<typeof ElTree> | undefined>
    key: Ref<string>
  }
) => {
  const ns = useNamespace('tree-select')

  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    // attrs is not reactive, when v-model binding source changes,
    // this listener is still old, see the bug(or test 'v-model source change'):
    // https://github.com/element-plus/element-plus/issues/14204
    'onUpdate:modelValue': (value) => emit('update:modelValue', value),
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e('popper')]
      if (props.popperClass) classes.push(props.popperClass)
      return classes.join(' ')
    }),
    filterMethod: (keyword = '') => {
      if (props.filterMethod) props.filterMethod(keyword)

      nextTick(() => {
        // let tree node expand only, same with tree filter
        tree.value?.filter(keyword)
      })
    },
    // clear filter text when visible change
    onVisibleChange: (visible: boolean) => {
      attrs.onVisibleChange?.(visible)

      if (props.filterable && visible) {
        result.filterMethod()
      }
    },
  }

  return result
}
