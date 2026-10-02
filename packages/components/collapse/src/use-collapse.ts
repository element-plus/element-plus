import { computed, provide, ref, watch } from 'vue'
import {
  debugWarn,
  ensureArray,
  isBoolean,
  isPromise,
  throwError,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { collapseContextKey } from './constants'

import type { SetupContext } from 'vue'
import type {
  CollapseActiveName,
  CollapseEmits,
  CollapseProps,
} from './collapse'

const SCOPE = 'ElCollapse'
export const useCollapse = (
  props: CollapseProps,
  emit: SetupContext<CollapseEmits>['emit']
) => {
  const activeNames = ref(ensureArray(props.modelValue))

  const setActiveNames = (_activeNames: CollapseActiveName[]) => {
    activeNames.value = _activeNames
    const value = props.accordion ? activeNames.value[0] : activeNames.value
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  const handleChange = (name: CollapseActiveName) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
    } else {
      const _activeNames = [...activeNames.value]
      const index = _activeNames.indexOf(name)

      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
    }
  }

  const handleItemClick = async (name: CollapseActiveName) => {
    const { beforeCollapse } = props
    if (!beforeCollapse) {
      handleChange(name)
      return
    }

    const shouldChange = beforeCollapse(name)
    const isPromiseOrBool = [
      isPromise(shouldChange),
      isBoolean(shouldChange),
    ].includes(true)
    if (!isPromiseOrBool) {
      throwError(
        SCOPE,
        'beforeCollapse must return type `Promise<boolean>` or `boolean`'
      )
    }

    if (isPromise(shouldChange)) {
      shouldChange
        .then((result) => {
          if (result !== false) {
            handleChange(name)
          }
        })
        .catch((e) => {
          debugWarn(SCOPE, `some error occurred: ${e}`)
        })
    } else if (shouldChange) {
      handleChange(name)
    }
  }

  watch(
    () => props.modelValue,
    () => (activeNames.value = ensureArray(props.modelValue)),
    { deep: true }
  )

  provide(collapseContextKey, {
    activeNames,
    handleItemClick,
  })
  return {
    activeNames,
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
