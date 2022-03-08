import { getCurrentInstance, onMounted, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '../../select/src/select.vue'
import type { ComponentInternalInstance, Ref } from 'vue'
import type { ComponentPropsType, RecordRef } from './type'

type ElSelectPropsType = RecordRef<ComponentPropsType<typeof ElSelect>>

export const useSelect = (
  allProps,
  attrs,
  select: Ref<InstanceType<typeof ElSelect> | undefined>
) => {
  const props = pick(
    toRefs(allProps),
    Object.keys(ElSelect.props)
  ) as ElSelectPropsType

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
    const methods = ['focus', 'blur']
    const instance = getCurrentInstance() as ComponentInternalInstance
    methods.forEach((item) => (instance[item] = select.value?.[item]))
  })

  return {
    props,
    listeners,
  }
}
