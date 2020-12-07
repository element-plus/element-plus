import {
  getCurrentInstance,
  reactive,
  shallowRef,
  watchEffect,
} from 'vue'
import { entries } from '@element-plus/utils/util'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: string[]
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export default (params: Params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params
  const instance = getCurrentInstance()
  const attrs = shallowRef({})
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  // Since attrs are not reactive, make it reactive instead of doing in `onUpdated` hook for better performance
  instance.attrs = reactive(instance.attrs)

  watchEffect(() => {
    const res = entries(instance.attrs)
      .reduce((acm, [key, val]) => {
        if (
          !allExcludeKeys.includes(key) &&
          !(excludeListeners && LISTENER_PREFIX.test(key))
        ) {
          acm[key] = val
        }

        return acm
      }, {})

    attrs.value = res
  })

  return attrs
}
