import { inject, computed, ref } from 'vue'
import { generateId } from '@element-plus/utils/util'
import { eventKeys } from '@element-plus/utils/aria'
import { on } from '@element-plus/utils/dom'
import { IElDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const ELEMENT = null
  const elDropdown = inject<IElDropdownInstance>('elDropdown', {})
  const _elDropdownSize = computed(() => (elDropdown || {}).dropdownSize)

  return {
    ELEMENT,
    elDropdown,
    _elDropdownSize,
  }
}

export const initDropdownDomEvent = (dropdownChildren, triggerElm, _instance) => {
  const menuItems = ref<Nullable<NodeList>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownElm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownElm.value = dropdownChildren?.subTree.el

  function removeTabindex() {
    triggerElm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach(item => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabindex(ele) {
    removeTabindex()
    ele?.setAttribute('tabindex', '0')
  }

  function handleTriggerKeyDown(ev: KeyboardEvent) {
    const keyCode = ev.keyCode
    if ([eventKeys.up, eventKeys.down].includes(keyCode)) { // up/down
      removeTabindex()
      resetTabindex(menuItems.value[0])
      ;(menuItems.value[0] as HTMLButtonElement).focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (keyCode === eventKeys.enter) { // space enter
      _instance.handleClick()
    } else if ([eventKeys.tab, eventKeys.esc].includes(keyCode)) { // tab || esc
      _instance.hide()
    }
  }

  function handleItemKeyDown(ev) {
    const keyCode = ev.keyCode
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target)
    const max = menuItemsArray.value.length - 1
    let nextIndex
    if ([eventKeys.up, eventKeys.down].includes(keyCode)) { // up/down
      if (keyCode === eventKeys.up) { // up
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else { // down
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabindex()
      resetTabindex(menuItems.value[nextIndex])
      ;(menuItems.value[nextIndex] as HTMLButtonElement).focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (keyCode === eventKeys.enter) { // enter
      triggerElmFocus()
      target.click()
      if (_instance.props.hideOnClick) { // click
        _instance.hide()
      }
    } else if ([eventKeys.tab, eventKeys.esc].includes(keyCode)) { // tab // esc
      _instance.hide()
      triggerElmFocus()
    }
  }

  function initAria() {
    dropdownElm.value.setAttribute('id', listId.value)
    triggerElm.setAttribute('aria-haspopup', 'list')
    triggerElm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerElm.setAttribute('role', 'button')
      triggerElm.setAttribute('tabindex', _instance.tabindex)
      triggerElm.classList.add('el-dropdown-selfdefine')
    }
  }

  function initEvent() {
    on(triggerElm, 'keydown', handleTriggerKeyDown)
    on(dropdownElm.value, 'keydown', handleItemKeyDown, true)
  }

  function initDomOperation() {
    menuItems.value = dropdownElm.value.querySelectorAll("[tabindex='-1']")
    menuItemsArray.value = [].slice.call(menuItems.value)

    initEvent()
    initAria()
  }

  function triggerElmFocus() {
    triggerElm?.focus?.()
  }

  initDomOperation()
}
