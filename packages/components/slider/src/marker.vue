<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElMarker',
  props: {
    mark: {
      type: [String, Object] as PropType<string | Record<string, unknown>>,
      default: () => undefined,
    },
  },
  setup(props) {
    const prefixClass = usePrefixClass('slider__marks-text')
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark.label
    })

    return {
      prefixClass,
      label,
    }
  },
  render(params) {
    const { prefixClass } = params
    return h(
      'div',
      {
        class: prefixClass,
        style: this.mark?.style,
      },
      this.label
    )
  },
})
</script>
