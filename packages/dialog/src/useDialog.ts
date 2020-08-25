import { computed, ref, watch, nextTick, onMounted } from 'vue'

import type { UseDialogProps } from './dialog'
import type { SetupContext } from '@vue/runtime-core'

export default function(props: UseDialogProps, ctx: SetupContext) {
  const closed = ref(false)
  const key = ref(0)
  const rendered = ref(false)

  const style = computed(() => {
    const style = {} as CSSStyleDeclaration
    if (!props.fullscreen) {
      style.marginTop = props.top
      if (props.width) {
        style.width = props.width
      }
    }
    return style
  })


  function afterEnter() {
    ctx.emit('opened')
  }

  function afterLeave() {
    ctx.emit('closed')
  }

  function open() {

  }


  watch(() => props.visible, val => {
    if (val) {
      closed.value = false
      ctx.emit('open')
      this.$el.addEventListener('scroll', this.updatePopper)
      nextTick(() => {
        this.$refs.dialog.scrollTop = 0
      })
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    } else {
      this.$el.removeEventListener('scroll', this.updatePopper)
      if (!this.closed) this.$emit('close')
      if (this.destroyOnClose) {
        nextTick(() => {
          key.value++
        })
      }
    }
  })

  onMounted(() => {
    if (props.visible) {
      rendered.value = true
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    style,
    closed,
    key,
  }
}
