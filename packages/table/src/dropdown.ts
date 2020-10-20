import isServer from '@element-plus/utils/isServer'
const dropdowns = []

!isServer && document.addEventListener('click', function (event: Event) {
  dropdowns.forEach(function (dropdown) {
    const target = event.target
    if (!dropdown || !dropdown.$el) return
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event)
  })
})

function useDropdown(instance) {
  const open = () => {
    if (instance) {
      dropdowns.push(instance)
    }
  }

  const close = () => {
    const index = dropdowns.indexOf(instance)
    if (index !== -1) {
      dropdowns.splice(instance, 1)
    }
  }

  return {
    open,
    close,
  }
}

export default useDropdown
