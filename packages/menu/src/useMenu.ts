import { computed, inject, ComponentInternalInstance } from 'vue'
import { RootMenuProvider } from './menu'

export default function useMenu(
  instance: ComponentInternalInstance,
  currentIndex: string,
) {
  const rootMenu = inject<RootMenuProvider>('rootMenu')

  const indexPath = computed(() => {
    let parent = instance.parent
    const path = [currentIndex]
    while (parent.type.name !== 'ElMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index as string)
      }
      parent = parent.parent
    }
    return path
  })

  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.type.name) === -1) {
      parent = parent.parent
    }
    return parent
  })
  const paddingStyle = computed(() => {
    let parent = instance.parent
    if (rootMenu.props.mode !== 'vertical') return {}

    let padding = 20

    if (rootMenu.props.collapse) {
      padding = 20
    } else {
      while (parent && parent.type.name !== 'ElMenu') {
        if (parent.type.name === 'ElSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
    }
    return { paddingLeft: padding + 'px' }
  })
  return { parentMenu, paddingStyle, indexPath }
}
