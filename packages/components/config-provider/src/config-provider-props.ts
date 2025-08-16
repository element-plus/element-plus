import { buildProps, definePropType } from '@element-plus/utils'
import { useEmptyValuesProps, useSizeProp } from '@element-plus/hooks'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { Language } from '@element-plus/locale'
import type { ButtonConfigContext } from '@element-plus/components/button'
import type { CardConfigContext } from '@element-plus/components/card'
import type { DialogConfigContext } from '@element-plus/components/dialog'
import type { MessageConfigContext } from '@element-plus/components/message'
import type { LinkConfigContext } from '@element-plus/components/link'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ExperimentalFeatures = {
  // TO BE Defined
}

export const configProviderProps = buildProps({
  /**
   * @description Controlling if the users want a11y features
   */
  a11y: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Locale Object
   */
  locale: {
    type: definePropType<Language>(Object),
    default: undefined,
  },
  /**
   * @description global component size
   */
  size: useSizeProp,
  /**
   * @description button related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#button-attribute)
   */
  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
  /**
   * @description card related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#card-attribute)
   */
  card: {
    type: definePropType<CardConfigContext>(Object),
  },
  /**
   * @description dialog related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#dialog-attribute)
   */
  dialog: {
    type: definePropType<DialogConfigContext>(Object),
  },
  /**
   * @description link related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#link-attribute)
   */
  link: {
    type: definePropType<LinkConfigContext>(Object),
  },
  /**
   * @description features at experimental stage to be added, all features are default to be set to false, [see the following table](https://element-plus.org/en-US/component/config-provider.html#experimental-features)                                                                            | ^[object]
   */
  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
  },
  /**
   * @description Controls if we should handle keyboard navigation
   */
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },
  /**
   * @description message related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#message-attribute)
   */
  message: {
    type: definePropType<MessageConfigContext>(Object),
  },
  /**
   * @description global Initial zIndex
   */
  zIndex: Number,
  /**
   * @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
   */
  namespace: {
    type: String,
    default: 'el',
  },
  ...useEmptyValuesProps,
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
export type ConfigProviderPropsPublic = __ExtractPublicPropTypes<
  typeof configProviderProps
>
