import MenuItem from './menu-item'
import { RendererNode } from 'vue'

class Menu {
  constructor(public domNode: RendererNode) {
    this.init()
  }
  init(): void {
    const menuChildren = this.domNode.childNodes
    ;[].filter
      .call(menuChildren, (child: Node) => child.nodeType === 1)
      .forEach((child: Node) => {
        new MenuItem(child as HTMLElement)
      })
  }
}
export default Menu
