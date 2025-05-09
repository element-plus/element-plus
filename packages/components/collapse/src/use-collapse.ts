import { computed, provide, ref } from 'vue'
import { ensureArray } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { collapseContextKey } from './constants'

import type { SetupContext } from 'vue'
import type {
  CollapseActiveName,
  CollapseEmits,
  CollapseProps,
} from './collapse'

export const useCollapse = (
  props: CollapseProps,
  emit: SetupContext<CollapseEmits>['emit']
) => {
  const activeNames = ref<CollapseActiveName[]>([])

  const computedActiveNames = computed(() => {
    const activeKeys = props.modelValue ?? activeNames.value
    return ensureArray(activeKeys)
  })

  const setActiveNames = (_activeNames: CollapseActiveName[]) => {
    activeNames.value = _activeNames
    const value = props.accordion ? activeNames.value[0] : activeNames.value
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  const handleItemClick = (name: CollapseActiveName) => {
    if (props.accordion) {
      setActiveNames([computedActiveNames.value[0] === name ? '' : name])
    } else {
      const _activeNames = [...computedActiveNames.value]
      const index = _activeNames.indexOf(name)

      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
    }
  }

  provide(collapseContextKey, {
    activeNames: computedActiveNames,
    handleItemClick,
  })
  return {
    activeNames: computedActiveNames,
    setActiveNames,
  }
}

export const useCollapseDOM = (props: CollapseProps) => {
  const ns = useNamespace('collapse')

  const rootKls = computed(() => [
    ns.b(),
    ns.b(`icon-position-${props.expandIconPosition}`),
  ])

  return {
    rootKls,
  }
}
