import { buildProps } from '@element-plus/utils'

export const useAriaProps = buildProps({
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
