import { getCurrentInstance, onMounted, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElTree from '../../tree/src/tree.vue'
import type { ComponentPropsType, RecordRef } from './type'
import type { ComponentInternalInstance, Ref } from 'vue'

type ElTreePropsType = RecordRef<ComponentPropsType<typeof ElTree>>

export const useTree = (
  allProps,
  attrs,
  tree: Ref<InstanceType<typeof ElTree> | undefined>
) => {
  const props = pick(
    toRefs(allProps),
    Object.keys(ElTree.props)
  ) as ElTreePropsType

  const listeners = pick(attrs, [
    'onChange',
    'onVisibleChange',
    'onRemoveTag',
    'onClear',
    'onBlur',
    'onFocus',
  ])

  // set same methods when mounted
  onMounted(() => {
    const methods = [
      'filter',
      'updateKeyChildren',
      'getCheckedNodes',
      'setCheckedNodes',
      'getCheckedKeys',
      'setCheckedKeys',
      'setChecked',
      'getHalfCheckedNodes',
      'getHalfCheckedKeys',
      'getCurrentKey',
      'getCurrentNode',
      'setCurrentKey',
      'setCurrentNode',
      'getNode',
      'remove',
      'append',
      'insertBefore',
      'insertAfter',
    ]
    const instance = getCurrentInstance() as ComponentInternalInstance
    methods.forEach((item) => (instance[item] = tree.value?.[item]))
  })

  return {
    props,
    listeners,
  }
}
