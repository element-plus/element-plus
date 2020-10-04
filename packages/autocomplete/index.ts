import { App } from 'vue'
import Autocomplete from './src/index.vue'

export default (app: App): void => {
  app.component(Autocomplete.name, Autocomplete)
}

export { Autocomplete }
