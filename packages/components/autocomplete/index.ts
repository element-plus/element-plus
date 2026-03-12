import { withInstall } from '@element-plus/utils'
import Autocomplete from './src/autocomplete.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default GAutocomplete

export * from './src/autocomplete'
