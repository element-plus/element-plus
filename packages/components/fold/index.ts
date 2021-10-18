import { App } from "vue"
import fold from "./index.vue"

export default {
  install: (app: App<Element>) => {
    app.component("fold", fold)
  }
}
