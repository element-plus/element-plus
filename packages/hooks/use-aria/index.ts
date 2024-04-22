import { pick } from 'lodash-unified'
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

export const useAriaProps = <T extends keyof typeof ariaProps>(
  arias: Array<T>
) => {
  return pick<typeof ariaProps, T>(ariaProps, arias)
}
