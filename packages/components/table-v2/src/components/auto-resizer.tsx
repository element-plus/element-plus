import { defineComponent, ref, watch } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { autoResizerProps } from '../auto-resizer'
import { useAutoResize } from '../composables'

const AutoResizer = defineComponent({
  name: 'ElAutoResizer',
  props: autoResizerProps,
  setup(props, { slots }) {
    const ns = useNamespace('auto-resizer')
    const { height, width, sizer } = useAutoResize(props)
    const style = {
      width: '100%',
      height: '100%',
    }

    // 初始化时width和height为0，slot宽高被计算为0，mounted时获取实际宽高，需要reload slot，更新slot宽高
    const reloadKey = ref(0)
    watch([() => width.value, () => height.value], () => {
      reloadKey.value += 1
    })

    return () => {
      return (
        <div ref={sizer} class={ns.b()} style={style} key={reloadKey.value}>
          {slots.default?.({
            height: height.value,
            width: width.value,
          })}
        </div>
      )
    }
  },
})

export default AutoResizer
