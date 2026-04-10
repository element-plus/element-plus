import { renderSlot } from 'vue'
import ElEmpty from '@element-plus/components/empty'

import type { ClassValue, FunctionalComponent, StyleValue } from 'vue'

type EmptyRendererProps = {
  class?: ClassValue
  style?: StyleValue
}

const Footer: FunctionalComponent<EmptyRendererProps> = (props, { slots }) => {
  const defaultSlot = renderSlot(slots, 'default', {}, () => [<ElEmpty />])
  return (
    <div class={props.class} style={props.style}>
      {defaultSlot}
    </div>
  )
}

Footer.displayName = 'ElTableV2Empty'

export default Footer
