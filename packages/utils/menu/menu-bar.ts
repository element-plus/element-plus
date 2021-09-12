import MenuItem from './menu-item'

import type { RendererNode } from 'vue'

class Menu {
  constructor(public domNode: RendererNode) {
    this.init()
  }
  init(): void {
    const menuChildren = this.domNode.childNodes
    Array.from(menuChildren, (child: Node) => {
      if (child.nodeType === 1) {
        new MenuItem(child as HTMLElement)
      }
    })
  }
}

export default Menu
