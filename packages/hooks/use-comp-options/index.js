import { h } from 'vue'

export const useCompOptions = (comp, props) => {
  return () => {
    return props.options.map((item, index) => {
      return h(
        comp,
        {
          key: index,
          value: item[props.props?.value ?? 'value'],
          disabled: item[props.props?.disabled ?? 'disabled'],
        },
        item[props.props?.label ?? 'label']
      )
    })
  }
}
