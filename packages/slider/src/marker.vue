<script lang="ts">
import { computed, defineComponent, h, PropType } from 'vue'

export default defineComponent({
  name: 'ElMarker',
  props: {
    mark: {
      type: [String, Object] as PropType<string | Record<string, unknown>>,
      default: () => undefined,
    },
  },
  setup(props) {
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark.label
    })

    return {
      label,
    }
  },
  render() {
    return h('div', {
      class: 'el-slider__marks-text',
      style: this.mark?.style,
    }, this.label)
  },
})
</script>
