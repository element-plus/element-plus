import { computed, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '../../select/src/select.vue'
import type ElTree from '../../tree/src/tree.vue'
import type { Ref } from 'vue'

export const useSelect = (
  props,
  { attrs },
  {
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof ElSelect> | undefined>
    tree: Ref<InstanceType<typeof ElTree> | undefined>
    key: Ref<string>
  }
) => {
  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    valueKey: key,
    popperClass: computed(() => {
      const classes = ['el-tree-select__popper']
      if (props.popperClass) classes.push(props.popperClass)
      return classes.join(' ')
    }),
    filterMethod: (keyword = '') => {
      tree.value?.filter(keyword)
    },
    // clear filter text when visible change
    onVisibleChange: (visible: boolean) => {
      ;(attrs.onVisibleChange as (visible: boolean) => void)?.(visible)

      if (props.filterable && visible) {
        result.filterMethod()
      }
    },
  }

  return result
}
