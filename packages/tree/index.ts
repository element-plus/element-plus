import { App } from 'vue'
import Tree from './src/tree.vue'
export default (app: App): void => {
  app.component(Tree.name, Tree)
}
