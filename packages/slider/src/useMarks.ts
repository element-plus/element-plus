import { computed, ComputedRef } from 'vue'
import { ISliderProps, Mark, Marks } from './Slider'


export const useMarks = (props: ISliderProps):Marks => {
  const markList:ComputedRef<Mark[]> = computed(() => {
    if (!props.marks) {
      return []
    }

    const marksKeys = Object.keys(props.marks)
    return marksKeys.map(parseFloat)
      .sort((a, b) => a - b)
      .filter(point => point <= props.max && point >= props.min)
      .map(point => ({
        point,
        position: (point - props.min) * 100 / (props.max - props.min),
        mark: props.marks[point],
      }))
  })
  return {
    markList,
  }
}
