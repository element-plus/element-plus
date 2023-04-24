import MenuItem from './menu-item'

import type { RendererNode } from 'vue'

class Menu {
  constructor(public domNode: RendererNode, namespace: string) {
    this.init(namespace)
  }
  init(namespace: string): void {
    const menuChildren = this.domNode.childNodes
    Array.from<Node>(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem(child as HTMLElement, namespace)
      }
    })
  }
}

export default Menu
