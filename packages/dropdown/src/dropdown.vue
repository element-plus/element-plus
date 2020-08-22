<script lang='ts'>
import { defineComponent, h, provide, getCurrentInstance } from 'vue'
import ClickOutside from '@element-plus/directives/click-outside'
import ElButton from '@element-plus/button/src/button.vue'
import ElButtonGroup from '@element-plus/button/src/button-group.vue'

export default defineComponent({
  name: 'ElDropdown',
  directives: {
    ClickOutside,
  },
  components: {
    ElButton,
    ElButtonGroup,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom-end',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    showTimeout: {
      type: Number,
      default: 250,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    provide('elDropdown', getCurrentInstance())
    // const timer = ref<Nullable<number>>(null)

    return () => h('span', h(ElButton, {
      type: 'primary',
    }, '666'))
  },
})
</script>
<style scoped>
</style>
