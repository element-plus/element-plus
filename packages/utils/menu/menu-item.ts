import { EVENT_CODE, triggerEvent } from '@element-plus/utils-v2'
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
    this.domNode.addEventListener('keydown', (event: KeyboardEvent) => {
      let prevDef = false
      switch (event.code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseenter')
          this.submenu && this.submenu.gotoSubIndex(0)
          prevDef = true
          break
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseenter')
          this.submenu &&
            this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1)
          prevDef = true
          break
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget as HTMLElement, 'mouseleave')
          break
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.space: {
          prevDef = true
          ;(event.currentTarget as HTMLElement).click()
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
