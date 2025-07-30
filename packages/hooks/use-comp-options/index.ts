import { Component, h } from 'vue'

interface SelectOptionProps {
  label?: string
  value?: string
  disabled?: string
}
export const useCompOptions = (
  comp: Component,
  props: {
    options?: Record<string, any>[]
    props?: SelectOptionProps
  }
) => {
  return () => {
    if (!props.options) return []
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
