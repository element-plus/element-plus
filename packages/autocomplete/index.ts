import { App } from 'vue'
import Autocomplete from './src/index.vue'

Autocomplete.install = (app: App): void => {
  app.component(Autocomplete.name, Autocomplete)
}

export default Autocomplete
