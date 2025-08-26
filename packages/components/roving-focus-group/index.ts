// This component is ported from https://github.com/radix-ui/primitives/tree/main/packages/react/roving-focus
// with some modification for Vue
import ElRovingFocusGroup from './src/roving-focus-group.vue'
import ElRovingFocusItem from './src/roving-focus-item.vue'

export { ElRovingFocusGroup, ElRovingFocusItem }

export * from './src/tokens'
export * from './src/utils'

export {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
} from './src/roving-focus-group'

export default ElRovingFocusGroup
