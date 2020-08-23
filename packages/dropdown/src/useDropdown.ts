import { inject, computed, ref } from 'vue'
import { generateId } from '@element-plus/utils/util'

export const useDropdown = () => {
  const ELEMENT = null
  const elDropdown = inject('elDropdown', {}) as any
  const _elDropdownSize = computed(() => (elDropdown || {}).dropdownSize)

  return {
    ELEMENT,
    elDropdown,
    _elDropdownSize,
  }
}

export const useDropdownDomEvent = async (dropdownChildren, triggerElm, _instance) => {
  const menuItems = ref(null)
  const menuItemsArray = ref(null)
  const dropdownElm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownElm.value = dropdownChildren.subTree.el

  function handleTriggerKeyDown(ev: KeyboardEvent) {
    const keyCode = ev.keyCode
    if ([38, 40].includes(keyCode)) { // up/down
      _instance.removeTabindex()
      _instance.resetTabindex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (keyCode === 13) { // space enter
      _instance.handleClick()
    } else if ([9, 27].includes(keyCode)) { // tab || esc
      _instance.hide()
    }
  }

  function handleItemKeyDown(ev) {
    const keyCode = ev.keyCode
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target)
    const max = menuItemsArray.value.length - 1
    let nextIndex
    if ([38, 40].includes(keyCode)) { // up/down
      if (keyCode === 38) { // up
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else { // down
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      _instance.removeTabindex()
      _instance.resetTabindex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (keyCode === 13) { // enter
      triggerElmFocus()
      target.click()
      if (_instance.props.hideOnClick) { // click
        _instance.visible.value = false
      }
    } else if ([9, 27].includes(keyCode)) { // tab // esc
      _instance.hide()
      triggerElmFocus()
    }
  }

  function initAria() {
    dropdownElm.value.setAttribute('id', listId.value)
    triggerElm.setAttribute('aria-haspopup', 'list')
    triggerElm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) { // 自定义
      triggerElm.setAttribute('role', 'button')
      triggerElm.setAttribute('tabindex', _instance.tabindex)
      triggerElm.classList.add('el-dropdown-selfdefine')
    }
  }

  function initEvent() {
    triggerElm?.addEventListener('keydown', handleTriggerKeyDown)
    dropdownElm.value.addEventListener('keydown', handleItemKeyDown, true)
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
