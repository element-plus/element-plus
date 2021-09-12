import {
  watch,
  isRef,
  onMounted,
  computed,
  unref,
  inject,
  onUnmounted,
  provide,
  ref,
} from 'vue'
import type { Ref, WatchStopHandle, InjectionKey } from 'vue'

type VarsType = Ref<Record<string, string>> | Record<string, string>

const VAR_PREFIX = '--el-'

const setVars = (target: HTMLElement, val: Record<string, string>) => {
  Object.keys(val).forEach((key) => {
    if (key.startsWith(VAR_PREFIX)) {
      target?.style.setProperty(key, val[key])
    } else {
      target?.style.setProperty(VAR_PREFIX + key, val[key])
    }
  })
}

export const themeVarsKey: InjectionKey<VarsType> = 'themeVars' as any

/**
 * @param vars
 * @param target
 * @returns stopWatchHandler
 * @example
 *
 * If you pass a Ref vars param, it will generate a watch handler.
 *
 * In main.ts:
 *
 * ```ts
 * const themeVars = {
 *  '--el-color-primary': '#f44336',
 *  '--el-color-white': '#2196f3',
 * }
 * app.provide(themeVarsKey, themeVars)
 * ```
 * Usually you need to use this function in the root component.
 * In components' steup:
 *
 * ```ts
 * setup() {
 *  const themeVars = ref({
 *    '--el-button-default-background-color': '#f44336',
 *    '--el-button-default-font-color': '#2196f3',
 *  })
 *  useCssVar(themeVars)
 * }
 * ```
 */
export function useCssVar(
  vars: VarsType,
  target?: Ref<HTMLElement> | HTMLElement
) {
  let stopWatchCssVar: WatchStopHandle | null = null

  const elRef = computed(
    () => unref(target) || window?.document?.documentElement
  )

  const themeVars = useThemeVars()
  const customVars = { ...themeVars, ...unref(vars) }

  provide(themeVarsKey, ref(customVars))

  onMounted(() => {
    isRef(vars)
      ? (stopWatchCssVar = watch(
          vars,
          (val) => {
            setVars(elRef.value, {
              ...unref(themeVars),
              ...val,
            })
          },
          {
            immediate: true,
            deep: true,
          }
        ))
      : setVars(elRef.value, {
          ...unref(themeVars),
          ...vars,
        })
  })

  onUnmounted(() => stopWatchCssVar && stopWatchCssVar())
}

export const useThemeVars = () => {
  const themeVars = inject(themeVarsKey, {})
  return themeVars
}
