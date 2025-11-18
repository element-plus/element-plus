import { ref } from 'vue'

export function useHovering() {
  const hovering = ref(false)

  const handleMouseEnter = () => {
    hovering.value = true
  }

  const handleMouseLeave = () => {
    hovering.value = false
  }

  return {
    hovering,
    handleMouseEnter,
    handleMouseLeave,
  }
}
