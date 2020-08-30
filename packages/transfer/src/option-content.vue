<script lang="ts">
import { ComputedRef, defineComponent, h, inject, Slot } from 'vue'

export default defineComponent({
  name: 'OptionContent',
  props: {
    option: Object,
    renderContent: Function,
    labelProp: String,
    keyProp: String,
  },
  setup() {
    const defaultScopedSlots: ComputedRef<undefined | Slot> = inject('defaultScopedSlots')
    return {
      defaultScopedSlots,
    }
  },
  render() {
    return this.renderContent
      ? this.renderContent(h, this.option)
      : this.defaultScopedSlots
        ? this.defaultScopedSlots({ option: this.option })
        : h('span', this.option[this.labelProp] || this.option[this.keyProp])
  },
})
</script>
