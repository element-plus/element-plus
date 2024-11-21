import { onBeforeUpdate, reactive, useSlots } from 'vue'

export const useFormSlots = () => {
  // To avoid potential extra logic or rendering caused by slot content changes,
  // only record whether the slot exists, not the actual content
  const getCurrentExistingSlots = () => {
    const existingSlotsTemp: Record<string, boolean> = {}
    const slots = useSlots()
    Object.keys(slots).forEach(
      (slotName) => (existingSlotsTemp[slotName] = true)
    )
    return existingSlotsTemp
  }

  const existingSlots = reactive(getCurrentExistingSlots())

  onBeforeUpdate(() => {
    // Reset the records
    Object.keys(existingSlots).forEach(
      (slotName) => delete existingSlots[slotName]
    )

    Object.assign(existingSlots, getCurrentExistingSlots())
  })

  return existingSlots
}
