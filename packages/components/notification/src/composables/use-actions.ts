import { computed, ref } from 'vue'
import { resolveUnref as toValue } from '@vueuse/core'
import { debugWarn, isFunction, isString, keysOf } from '@element-plus/utils'
import type { Ref } from 'vue'
import type { MaybeComputedRef } from '@vueuse/core'
import type { Mutable } from '@element-plus/utils'
import type { ButtonProps } from '@element-plus/components/button'
import type { NotificationAction, NotificationProps } from '../notification'

type IntervalNotificationAction = {
  label: string
  button: Partial<ButtonProps>
  disabled: Ref<boolean>
  onClick: (event: MouseEvent) => Promise<void>
}

export function useActions(
  actions: MaybeComputedRef<NotificationProps['actions']>,
  closeNotification: () => void
) {
  const _actions = computed(() => {
    const actionsValue = toValue(actions)
    if (!actionsValue) {
      return []
    }
    const preparedActions = actionsValue
      .filter(
        (action) =>
          isFunction(action.execute) && isString(action.label) && action.label
      )
      .reduce((actions, action) => {
        const { label } = action
        if (!actions[label]) {
          actions[label] = makeAction(action, closeNotification)
        } else {
          debugWarn(
            'ElNotification',
            `Duplicated action label: \`${label}\`. Please change action label.`
          )
        }
        return actions
      }, {} as Record<string, IntervalNotificationAction>)

    return Object.values(preparedActions)
  })

  return {
    mustShow: computed(() => _actions.value.length > 0),
    actions: _actions,
  }
}

function makeAction(
  action: NotificationAction,
  closeNotification: () => void
): IntervalNotificationAction {
  const { keepOpen = false, disableAfterExecute = keepOpen !== true } = action

  const button: Mutable<Partial<ButtonProps>> = { size: 'small' }
  if (action.button) {
    for (const key of keysOf(action.button).filter(
      (key) => key.toLowerCase() !== 'onclick'
    )) {
      // @ts-expect-error TypeScript does not recognize key as a valid ButtonProps key
      button[key] = action.button[key]
    }
  }

  const disabled = ref(button.disabled ?? false)

  return {
    label: action.label,
    button,
    disabled,
    async onClick() {
      if (disabled.value) {
        return
      }
      try {
        const maybePromise = action.execute()
        if (disableAfterExecute) {
          disabled.value = true
        }
        if (keepOpen === 'until-resolved') {
          await maybePromise
        }
      } finally {
        if (keepOpen !== true) {
          closeNotification()
        }
      }
    },
  }
}
