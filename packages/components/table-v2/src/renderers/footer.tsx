import type { CSSProperties, FunctionalComponent, HTMLAttributes } from 'vue'

type FooterRendererProps = {
  class?: HTMLAttributes['class']
  style: CSSProperties
}

const Footer: FunctionalComponent<FooterRendererProps> = (props, { slots }) => {
  return (
    <div class={props.class} style={props.style}>
      {slots.default?.()}
    </div>
  )
}

Footer.displayName = 'ElTableV2Footer'

export default Footer
