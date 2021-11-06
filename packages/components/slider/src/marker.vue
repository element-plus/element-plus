<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { markerProps } from './marker'

export default defineComponent({
  name: 'ElMarker',
  props: markerProps,
  setup(props) {
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark?.label
    })

    return {
      label,
    }
  },
  render() {
    return h(
      'div',
      {
        class: 'el-slider__marks-text',
        style: this.mark?.style,
      },
      this.label
    )
  },
})
</script>
