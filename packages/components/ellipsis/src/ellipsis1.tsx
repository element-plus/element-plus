import {
  type ExtractPropTypes,
  computed,
  defineComponent,
  onActivated,
  onMounted,
  ref,
  watch,
} from 'vue'

export const textEllipsisProps = {
  rows: {
    type: Number,
    default: 1,
  },
  dots: {
    type: String,
    default: '...',
  },
  content: {
    type: String,
    default: '',
  },
  expandText: String,
  collapseText: String,
  position: {
    type: String,
    default: 'end',
  },
}

export type TextEllipsisProps = ExtractPropTypes<typeof textEllipsisProps>

export default defineComponent({
  name: 'ElEllipsis',

  props: textEllipsisProps,

  emits: ['clickAction'],

  setup(props, { emit, slots }) {
    const text = ref('')
    const expanded = ref(false)
    const hasAction = ref(false)
    const root = ref<HTMLElement>()
    let needRecalculate = false

    const actionText = computed(() =>
      expanded.value ? props.collapseText : props.expandText
    )

    const pxToNum = (value: string | null) => {
      if (!value) return 0
      const match = value.match(/^\d*(\.\d*)?/)
      return match ? Number(match[0]) : 0
    }

    const cloneContainer = () => {
      if (!root.value || !root.value.isConnected) return

      const originStyle = window.getComputedStyle(root.value)
      const container = document.createElement('div')
      const styleNames: string[] = Array.prototype.slice.apply(originStyle)

      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name))
      })

      container.style.position = 'fixed'
      container.style.zIndex = '-9999'
      container.style.top = '-9999px'
      container.style.height = 'auto'
      container.style.minHeight = 'auto'
      container.style.maxHeight = 'auto'

      container.innerText = props.content
      document.body.appendChild(container)

      return container
    }

    const calcEllipsised = () => {
      const calcEllipsisText = (
        container: HTMLDivElement,
        maxHeight: number
      ) => {
        const { content, position, dots } = props
        const end = content.length

        const calcEllipse = () => {
          // calculate the former or later content
          const tail = (left: number, right: number): string => {
            if (right - left <= 1) {
              if (position === 'end') {
                return content.slice(0, left) + dots
              }
              return dots + content.slice(right, end)
            }

            const middle = Math.round((left + right) / 2)

            // Set the interception location
            if (position === 'end') {
              container.innerText =
                content.slice(0, middle) + dots + actionText.value
            } else {
              container.innerText =
                dots + content.slice(middle, end) + actionText.value
            }

            // The height after interception still does not match the rquired height
            if (container.offsetHeight > maxHeight) {
              if (position === 'end') {
                return tail(left, middle)
              }
              return tail(middle, right)
            }

            if (position === 'end') {
              return tail(middle, right)
            }

            return tail(left, middle)
          }

          container.innerText = tail(0, end)
        }

        const middleTail = (
          leftPart: [number, number],
          rightPart: [number, number]
        ): string => {
          if (
            leftPart[1] - leftPart[0] <= 1 &&
            rightPart[1] - rightPart[0] <= 1
          ) {
            return (
              content.slice(0, leftPart[0]) +
              dots +
              content.slice(rightPart[1], end)
            )
          }

          const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
          const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)

          container.innerText =
            props.content.slice(0, leftMiddle) +
            props.dots +
            props.content.slice(rightMiddle, end) +
            props.expandText

          if (container.offsetHeight >= maxHeight) {
            return middleTail(
              [leftPart[0], leftMiddle],
              [rightMiddle, rightPart[1]]
            )
          }

          return middleTail(
            [leftMiddle, leftPart[1]],
            [rightPart[0], rightMiddle]
          )
        }

        const middle = (0 + end) >> 1
        props.position === 'middle'
          ? (container.innerText = middleTail([0, middle], [middle, end]))
          : calcEllipse()
        return container.innerText
      }

      // Calculate the interceptional text
      const container = cloneContainer()

      if (!container) {
        needRecalculate = true
        return
      }

      const { paddingBottom, paddingTop, lineHeight } = container.style
      const maxHeight = Math.ceil(
        (Number(props.rows) + 0.5) * pxToNum(lineHeight) +
          pxToNum(paddingTop) +
          pxToNum(paddingBottom)
      )

      if (maxHeight < container.offsetHeight) {
        hasAction.value = true
        text.value = calcEllipsisText(container, maxHeight)
      } else {
        hasAction.value = false
        text.value = props.content
      }

      document.body.removeChild(container)
    }

    const toggle = (isExpanded = !expanded.value) => {
      expanded.value = isExpanded
    }

    const onClickAction = (event: MouseEvent) => {
      toggle()
      emit('clickAction', event)
    }

    const renderAction = () => {
      const action = slots.action
        ? slots.action({ expanded: expanded.value })
        : actionText.value
      return (
        <span class={'action'} onClick={onClickAction}>
          {action}
        </span>
      )
    }

    onMounted(calcEllipsised)

    onActivated(() => {
      if (needRecalculate) {
        needRecalculate = false
        calcEllipsised()
      }
    })

    watch([() => [props.content, props.rows, props.position]], calcEllipsised)

    return () => (
      <div ref={root} class={'el-ellipsis'}>
        {expanded.value ? props.content : text.value}
        {hasAction.value ? renderAction() : null}
      </div>
    )
  },
})
