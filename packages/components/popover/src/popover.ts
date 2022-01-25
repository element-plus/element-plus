import { buildProps } from '@element-plus/utils/props'
import { useTooltipContentProps } from '@element-plus/components/tooltip'

export const usePopoverProps = {
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true,
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  ...buildProps({
    title: String,

    width: {
      type: [String, Number],
      default: 150,
    },
  }),
}
