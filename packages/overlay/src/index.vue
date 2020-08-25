<template>
  <div class="el-overlay">
    <slot>
    </slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'ElOverlay',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: String,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {

    const onMaskClick = () => {
      emit('click')
    }
    // init here
    return () => {
      return h(
        'div',
        {
          class: 'el-overlay-root',
        },
        [
          props.mask
            ? h(
              'div',
              {
                class: ['el-overlay', props.overlayClass],
                onClick: onMaskClick,
              },
            )
            : null,
          slots.default?.(),
        ],
      )
    }
  },
})
</script>
<style scoped>

.el-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  height: 100%;
  background-color: rgba(0,0,0,.5);
}
</style>
