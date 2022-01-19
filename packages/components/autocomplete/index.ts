import Autocomplete from './src/index.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Autocomplete.install = (app: App): void => {
  app.component(Autocomplete.name, Autocomplete)
}

const _Autocomplete = Autocomplete as SFCWithInstall<typeof Autocomplete>

export default _Autocomplete
export const ElAutocomplete = _Autocomplete
