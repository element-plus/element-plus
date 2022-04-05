import { computed, getCurrentInstance } from 'vue'
import { useDeprecated } from '@element-plus/hooks'
import { isBoolean } from '@element-plus/utils'

export function useDeprecateAppendToBody(scope: string, from: string) {
  const vm = getCurrentInstance()!

  const compatTeleported = computed(() => {
    return (
      isBoolean(vm.props[from]) ? vm.props[from] : vm.props.teleported
    ) as boolean
  })

  useDeprecated(
    {
      scope,
      from,
      replacement: 'teleported',
      version: '2.1.0',
      ref: 'https://element-plus.org/en-US/component/tooltip.html#attributes',
    },
    computed(() => isBoolean(vm.props[from]))
  )

  return {
    compatTeleported,
  }
}
