import { buildProps } from '@element-plus/utils'

export const ariaProps = buildProps({
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel: String,
  /**
   * @description native `aria-orientation` attribute
   */
  ariaOrientation: {
    type: String,
    values: ['horizontal', 'vertical', 'undefined'],
  },
  /**
   * @description native `aria-controls` attribute
   */
  ariaControls: String,
})

export const useAriaProps = (arias: Array<keyof typeof ariaProps>) => {
  const props: Pick<typeof ariaProps, any> = {}
  arias.forEach((aria) => {
    if (ariaProps[aria]) {
      props[aria] = ariaProps[aria]
    }
  })
  return props
}
