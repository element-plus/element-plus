import { App } from 'vue'
import { Option } from '@element-plus/select'

Option.install = (app: App): void => {
  app.component(Option.name, Option)
}

export default Option
