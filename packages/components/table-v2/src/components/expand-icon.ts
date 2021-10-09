import { computed, defineComponent, h } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { Expand } from '@element-plus/icons'

import type { CSSProperties } from 'vue'

const indention = 16

export default defineComponent({
  props: {
    expanded: Boolean,
    depth: { type: Number, default: 0 },
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      emit('toggle')
    }

    const expandStyleRef = computed<CSSProperties>(() => {
      const common = {
        marginLeft: props.depth * indention,
        transition: 'transform var(--el-transition-duration)',
        cursor: 'pointer',
      }

      return props.expanded
        ? {
            ...common,
            transform: 'rotate(90deg)',
          }
        : common
    })
    return () => {
      h(
        ElIcon,
        {
          size: 16,
          onClick: handleClick,
        },
        [
          h(Expand, {
            style: expandStyleRef.value,
          }),
        ]
      )
    }
  },
})
