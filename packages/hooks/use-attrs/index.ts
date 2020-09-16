import {
  getCurrentInstance,
  onMounted,
  reactive,
  shallowRef,
  watch,
  watchEffect,
} from 'vue'
import { entries, isUndefined, isEqual } from '@element-plus/utils/util'
import { addClass, removeClass, setStyle, removeStyle } from '@element-plus/utils/dom'
import type { ComponentInternalInstance } from 'vue'

interface Attrs extends Record<string, unknown> {
  class?: string
  style?: Hash<string>
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

function syncAttribute<T extends string, P = Attrs[T]>(
  instance: ComponentInternalInstance,
  attributeName: T,
  handler: (instance: ComponentInternalInstance, newVal: P, oldVal?: P) => void,
) {
  const attrs = instance.attrs
  const initialValue = attrs[attributeName]

  if (isUndefined(attrs[attributeName])) return

  onMounted(handler.bind(null, instance, initialValue))
  watch(
    () => attrs[attributeName],
    handler.bind(null, instance),
  )
}

function syncClass(
  instance: ComponentInternalInstance,
  newClass: string,
  oldClass?: string,
) {
  const el = instance.vnode.el as HTMLElement

  if (!el) return

  oldClass && removeClass(el, oldClass)
  newClass && addClass(el, newClass)
}

function syncStyle(
  instance: ComponentInternalInstance,
  newStyle: CSSStyleDeclaration,
  oldStyle?: CSSStyleDeclaration,
) {
  const el = instance.vnode.el as HTMLElement

  if (!el || isEqual(newStyle, oldStyle)) return

  oldStyle && removeStyle(el, oldStyle)
  newStyle && setStyle(el, newStyle)
}

export default (excludeListeners = false, excludeKeys: string[] = []) => {
  const instance = getCurrentInstance()
  const { inheritAttrs } = instance.type
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

  if (!inheritAttrs) {
    syncAttribute(instance, 'class', syncClass)
    syncAttribute(instance, 'style', syncStyle)
  }

  return attrs
}
