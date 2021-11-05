import { useLocaleProps } from '@element-plus/hooks'
import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
import type { ButtonConfigContext } from '@element-plus/components/button'

export const configProviderProps = {
  ...useLocaleProps,
  // Add more configs
  button: buildProp({
    type: definePropType<ButtonConfigContext>(Object),
    default: () => {
      return mutable({
        autoInsertSpace: true,
      } as const)
    },
  }),
}
