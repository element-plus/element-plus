// @ts-nocheck
import { computed, nextTick, toRefs, watch } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@element-plus/components/select'
import { useNamespace } from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { Ref } from 'vue'
import type ElTree from '@element-plus/components/tree'

export const useSelect = (
  props,
  { attrs, emit },
  {
    select,
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof ElSelect> | undefined>
    tree: Ref<InstanceType<typeof ElTree> | undefined>
    key: Ref<string>
  }
) => {
  const ns = useNamespace('tree-select')

  // update tree data when use filterMethod/remoteMethod
  watch(
    () => props.data,
    () => {
      if (props.filterable) {
        nextTick(() => {
          // let tree node expand only, same with tree filter
          tree.value?.filter(select.value?.states.inputValue)
        })
      }
    },
    { flush: 'post' }
  )

  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    class: computed(() => attrs.class),
    style: computed(() => attrs.style),
    // attrs is not reactive, when v-model binding source changes,
    // this listener is still old, see the bug(or test 'v-model source change'):
    // https://github.com/element-plus/element-plus/issues/14204
    'onUpdate:modelValue': (value) => emit(UPDATE_MODEL_EVENT, value),
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e('popper')]
      if (props.popperClass) classes.push(props.popperClass)
      return classes.join(' ')
    }),
    filterMethod: (keyword = '') => {
      if (props.filterMethod) {
        props.filterMethod(keyword)
      } else if (props.remoteMethod) {
        props.remoteMethod(keyword)
      } else {
        // let tree node expand only, same with tree filter
        tree.value?.filter(keyword)
      }
    },
  }

  return result
}
