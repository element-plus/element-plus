import type { ClassValue, FunctionalComponent, StyleValue } from 'vue'

type FooterRendererProps = {
  class?: ClassValue
  style?: StyleValue
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
