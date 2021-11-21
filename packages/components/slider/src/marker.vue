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

    return () =>
      h(
        'div',
        {
          class: 'el-slider__marks-text',
        },
        label.value
      )
  },
})
</script>
