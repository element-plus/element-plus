import { markRaw } from 'vue'
import { mapValues } from 'lodash-unified'
import { Aim, Loading } from '@element-plus/icons-vue'
import { installerFactory } from './installer'
import Components from './component'
import Plugins from './plugin'
import type { IconUsed } from '@element-plus/hooks'

const defaultIcons: IconUsed = mapValues(
  {
    Aim,
    Loading,
  },
  (icon) => markRaw(icon)
)

export const defaultInstaller = installerFactory(
  [...Components, ...Plugins],
  defaultIcons
)
