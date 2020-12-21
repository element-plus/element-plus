import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Tree from './src/tree.vue'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

const _Tree: SFCWithInstall<typeof Tree> = Tree

export default _Tree
