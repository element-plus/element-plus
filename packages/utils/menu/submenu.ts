import { EVENT_CODE, triggerEvent } from '../aria'
import type MenuItem from './menu-item'

class SubMenu {
  public subMenuItems: NodeList
  public subIndex = 0
  constructor(public parent: MenuItem, public domNode: ParentNode) {
    this.subIndex = 0
    this.init()
  }

  init(): void {
    this.subMenuItems = this.domNode.querySelectorAll('li')
    this.addListeners()
  }

  gotoSubIndex(idx: number): void {
    if (idx === this.subMenuItems.length) {
      idx = 0
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1
    }
    ;(this.subMenuItems[idx] as HTMLElement).focus()
    this.subIndex = idx
  }

  addListeners(): void {
    const parentNode = this.parent.domNode
    Array.prototype.forEach.call(this.subMenuItems, (el: Element) => {
      el.addEventListener('keydown', (event: KeyboardEvent) => {
        let prevDef = false
        switch (event.code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1)
            prevDef = true
            break
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1)
            prevDef = true
            break
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode as HTMLElement, 'mouseleave')
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
          event.stopPropagation()
        }
        return false
      })
    })
  }
}

export default SubMenu
