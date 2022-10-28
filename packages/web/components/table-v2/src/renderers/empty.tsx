import ElEmpty from '@element-plus/components/empty'
import type { CSSProperties, FunctionalComponent } from 'vue'

type EmptyRendererProps = {
  class?: JSX.IntrinsicAttributes['class']
  style?: CSSProperties
}

const Footer: FunctionalComponent<EmptyRendererProps> = (props, { slots }) => {
  return (
    <div class={props.class} style={props.style}>
      {slots.default ? slots.default() : <ElEmpty />}
    </div>
  )
}

Footer.displayName = 'ElTableV2Empty'

export default Footer
