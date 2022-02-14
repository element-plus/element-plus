<script lang="ts">
import { computed, defineComponent, h } from 'vue'

import { useNamespace } from '@element-plus/hooks'
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
    const ns = useNamespace('slider')
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark.label
    })

    return {
      ns,
      label,
    }
  },
  render() {
    return h(
      'div',
      {
        class: this.ns.e('marks-text'),
        style: this.mark?.style,
      },
      this.label
    )
  },
})
</script>
