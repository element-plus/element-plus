import { eventKeys, triggerEvent } from '../aria'
import SubMenu from './submenu'


class MenuItem {
  public submenu: SubMenu = null
  constructor(public domNode: HTMLElement) {
    this.submenu = null
    this.init()
  }

  init(): void {
    this.domNode.setAttribute('tabindex', '0')
    const menuChild = this.domNode.querySelector('.el-menu')
    if (menuChild) {
      this.submenu = new SubMenu(this, menuChild)
    }
    this.addListeners()
  }

  addListeners(): void {
    const keys = eventKeys
    this.domNode.addEventListener('keydown', (event: KeyboardEvent) => {
      let prevDef = false
      switch (event.keyCode) {
        case keys.down: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseenter')
          this.submenu && this.submenu.gotoSubIndex(0)
          prevDef = true
          break
        }
        case keys.up: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseenter')
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1)
          prevDef = true
          break
        }
        case keys.tab: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseleave')
          break
        }
        case keys.enter:
        case keys.space: {
          prevDef = true;

          (event.currentTarget as HTMLElement).click()
          break
        }
      }
      if (prevDef) {
        event.preventDefault()
      }
    })
  }
}

export default MenuItem
