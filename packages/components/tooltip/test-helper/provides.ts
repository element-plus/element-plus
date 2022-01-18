import { ref } from 'vue'

export const genTooltipProvides = () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  const onToggle = jest.fn()
  const onShow = jest.fn()
  const onHide = jest.fn()
  const id = ref('test_id')
  const open = ref(false)
  const controlled = ref(false)
  const trigger = ref('hover')

  return {
    onToggle,
    onOpen,
    onClose,
    onShow,
    onHide,
    id,
    open,
    controlled,
    trigger,
  }
}
