import { renderSlot } from 'vue'
import GEmpty from '@element-plus/components/empty'

import type { CSSProperties, FunctionalComponent } from 'vue'

type EmptyRendererProps = {
  class?: JSX.IntrinsicAttributes['class']
  style?: CSSProperties
}

const Footer: FunctionalComponent<EmptyRendererProps> = (props, { slots }) => {
  const defaultSlot = renderSlot(slots, 'default', {}, () => [<GEmpty />])
  return (
    <div class={props.class} style={props.style}>
      {defaultSlot}
    </div>
  )
}

Footer.displayName = 'GTableV2Empty'

export default Footer
