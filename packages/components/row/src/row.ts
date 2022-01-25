import { defineComponent, computed, h, provide } from 'vue'
import { buildProps } from '@element-plus/utils/props'
import { useNamespace } from '@element-plus/hooks'
import type { ExtractPropTypes, CSSProperties } from 'vue'

export const rowProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    values: ['start', 'center', 'end', 'space-around', 'space-between'],
    default: 'start',
  },
  align: {
    type: String,
    values: ['top', 'middle', 'bottom'],
    default: 'top',
  },
} as const)
export type RowProps = ExtractPropTypes<typeof rowProps>

const Row = defineComponent({
  name: 'ElRow',
  props: rowProps,

  setup(props, { slots }) {
    const ns = useNamespace('row')

    const gutter = computed(() => props.gutter)
    provide('ElRow', {
      gutter,
    })

    const style = computed(() => {
      const styles: CSSProperties = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        styles.marginLeft = `-${props.gutter / 2}px`
        styles.marginRight = styles.marginLeft
      }
      return styles
    })

    return () =>
      h(
        props.tag,
        {
          class: [
            ns.b(),
            ns.is(`justify-${props.justify}`, props.justify !== 'start'),
            ns.is(`align-${props.align}`, props.align !== 'top'),
          ],
          style: style.value,
        },
        slots.default?.()
      )
  },
})

export default Row
export type RowInstance = InstanceType<typeof Row>
