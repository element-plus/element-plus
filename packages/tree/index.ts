import { App } from 'vue'
import Tree from './src/tree.vue'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

export default Tree
