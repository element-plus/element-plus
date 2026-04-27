import { renderSlot } from 'vue'
import ElEmpty from '@element-plus/components/empty'

import type { CSSProperties, FunctionalComponent, HTMLAttributes } from 'vue'

type EmptyRendererProps = {
  class?: HTMLAttributes['class']
  style?: CSSProperties
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
