import { withInstall } from '@element-plus/utils'
import Autocomplete from './src/autocomplete.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default ElAutocomplete

export * from './src/autocomplete'
