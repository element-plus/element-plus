import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { buildProps, definePropType } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import ElTooltip from '@element-plus/components/tooltip'
import ELMeasure from './measure.vue'

import type { ElTooltipProps } from '@element-plus/components/tooltip'
import type { CSSProperties, ExtractPropTypes, VNode } from 'vue'

type ELMeasureInstance = InstanceType<typeof ELMeasure>

const ELLIPSIS_SYMBOL = '...'

export const ellipsisProps = buildProps({
  lineClamp: {
    type: Number,
    default: 1,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  hiddenSymbol: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: definePropType<boolean | Partial<ElTooltipProps>>([Boolean, Object]),
    default: false,
  },
})

const cuttable = (node: VNode) => {
  // ShapeFlags.TEXT_CHILDREN
  return node.shapeFlag === 1 << 3
}

const getNodesLen = (nodes: VNode[]) => {
  let totalLen = 0

  nodes.forEach((node) => {
    if (cuttable(node)) {
      const len = (node.children?.length as number) || 0
      totalLen += len
    } else {
      totalLen += 1
    }
  })

  return totalLen
}

function sliceNodes(nodeList: VNode[], len: number) {
  let currLen = 0
  const currentNodeList: (VNode | string)[] = []

  for (const node of nodeList) {
    if (currLen === len) {
      return currentNodeList
    }

    const canCut = cuttable(node)
    const nodeLen = canCut ? (node.children?.length as number) || 0 : 1
    const nextLen = currLen + nodeLen

    // Exceed but current not which means we need cut this
    // This will not happen on validate Element
    if (nextLen > len) {
      const restLen = len - currLen
      currentNodeList.push(((node.children as string) || '').slice(0, restLen))
      return currentNodeList
    }

    currentNodeList.push(node)
    currLen = nextLen
  }

  return nodeList
}

function getAriaLabel(nodes: VNode[]) {
  let text = ''
  nodes.forEach((node) => {
    if (cuttable(node)) {
      text += node.children || ''
    }
  })
  return text
}

// Measure for the `text` is exceed the `lineClamp` or not
const lineClipStyle: CSSProperties = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
}

enum MeasureStatus {
  NONE,
  START,
  MEASURING,
  NO_NEED_ELLIPSIS,
  MEASURED,
}

const Ellipsis = defineComponent({
  name: 'ElEllipsis',
  props: ellipsisProps,
  setup(props, { slots }) {
    const measureStatus = ref(MeasureStatus.NONE)

    const containerRef = ref<HTMLElement | null>(null)
    const baseRowsEllipsisRef = ref<ELMeasureInstance | null>(null)
    const descRowsEllipsisRef = ref<ELMeasureInstance | null>(null)
    const symbolRowEllipsisRef = ref<ELMeasureInstance | null>(null)
    const cutMidRef = ref<ELMeasureInstance | null>(null)

    const width = ref(0)
    const cutMidIndex = ref(0)
    const finalCutIndex = ref(0)
    const needEllipsis = ref(false)

    const enableMeasure = computed(() => props.hiddenSymbol || slots.suffix)

    const measure = async () => {
      if (!enableMeasure.value) return
      measureStatus.value = MeasureStatus.START
      needEllipsis.value = false
      await nextTick()
      // Get the basic height of ellipsis lineClamp
      const baseRowsEllipsisHeight = baseRowsEllipsisRef.value?.getHeight() || 0
      // Get the height of `lineClamp - 1` + symbol height
      const descRowsEllipsisHeight =
        props.lineClamp === 1 ? 0 : descRowsEllipsisRef.value?.getHeight() || 0

      const symbolRowEllipsisHeight =
        symbolRowEllipsisRef.value?.getHeight() || 0

      const rowsWithEllipsisHeight =
        descRowsEllipsisHeight + symbolRowEllipsisHeight

      const maxRowsHeight = Math.max(
        baseRowsEllipsisHeight,
        rowsWithEllipsisHeight
      )

      needEllipsis.value = !!baseRowsEllipsisRef.value?.isExceed()
      measureStatus.value = needEllipsis.value
        ? MeasureStatus.MEASURING
        : MeasureStatus.NO_NEED_ELLIPSIS

      if (needEllipsis.value) {
        const content = slots.default?.() || []
        const nodesLen = getNodesLen(content)
        finalCutIndex.value = await getFinalCutIndex(
          [0, nodesLen],
          maxRowsHeight + 1
        )
        measureStatus.value = MeasureStatus.MEASURED
      }
    }

    // Get cutting position using binary search
    const getFinalCutIndex = async (
      ellipsisCutIndex: [number, number],
      ellipsisHeight: number
    ) => {
      const [minIndex, maxIndex] = ellipsisCutIndex
      if (minIndex === maxIndex) return minIndex
      cutMidIndex.value = Math.ceil((minIndex + maxIndex) / 2)
      await nextTick()
      const midHeight = cutMidRef.value?.getHeight() || 0

      const isOverflow = midHeight > ellipsisHeight
      const targetMidIndex = cutMidIndex.value

      if (maxIndex - minIndex === 1) {
        return isOverflow ? minIndex : maxIndex
      }

      if (isOverflow) {
        return getFinalCutIndex([minIndex, targetMidIndex], ellipsisHeight)
      } else {
        return getFinalCutIndex([targetMidIndex, maxIndex], ellipsisHeight)
      }
    }

    const ns = useNamespace('ellipsis')

    const kls = computed(() => [
      ns.b(),
      ns.is('single-line', !enableMeasure.value && props.lineClamp === 1),
      ns.is('multiple-line', !enableMeasure.value && props.lineClamp > 1),
    ])

    const multipleStyle = computed(() =>
      !enableMeasure.value && props.lineClamp > 1
        ? { WebkitLineClamp: props.lineClamp }
        : {}
    )

    const enableTooltip = computed(() => {
      if (props.expanded) return false
      if (!containerRef.value) return false
      if (enableMeasure.value) return needEllipsis.value
      const textEle = containerRef.value
      if (props.lineClamp === 1)
        return textEle.offsetWidth < textEle.scrollWidth
      if (props.lineClamp > 1)
        return textEle.offsetHeight < textEle.scrollHeight
      return false
    })

    useResizeObserver(
      computed(() => (enableMeasure.value ? containerRef.value : null)),
      (entries) => {
        width.value = entries[0].contentRect.width
      }
    )

    watch([width, () => props.lineClamp, () => props.hiddenSymbol], measure)

    // fix: https://github.com/vuejs/core/issues/3257
    let slotWatchStop: (() => void) | null = null
    const slotsWatchFn = () => {
      if (slotWatchStop) slotWatchStop()
      slotWatchStop = watch(
        [() => slots.default?.(), () => slots.suffix?.({ needEllipsis: true })],
        measure
      )
    }

    return () => {
      if (!slots.default) return null
      const { lineClamp } = props
      const content = slots.default()
      const suffix = slots.suffix?.({ needEllipsis: needEllipsis.value })
      const ariaLabel = enableMeasure.value ? getAriaLabel(content) : undefined

      slotsWatchFn()

      const renderChildren = (
        nodes: (string | VNode)[],
        isEllipsis: boolean
      ) => {
        if (!isEllipsis) return [nodes, suffix]
        return [
          nodes,
          <span aria-hidden="true">{ELLIPSIS_SYMBOL}</span>,
          suffix,
        ]
      }

      const renderFinalContent = () => {
        if (!enableMeasure.value) return content

        if (measureStatus.value === MeasureStatus.NO_NEED_ELLIPSIS) {
          return renderChildren(content, false)
        }

        if (measureStatus.value === MeasureStatus.MEASURED) {
          return renderChildren(
            props.expanded ? content : sliceNodes(content, finalCutIndex.value),
            needEllipsis.value && !props.expanded
          )
        }
        return (
          <span
            style={{
              ...lineClipStyle,
              WebkitLineClamp: props.lineClamp,
            }}
          >
            {renderChildren(content, true)}
          </span>
        )
      }

      const container = (
        <div
          ref={containerRef}
          class={kls.value}
          style={multipleStyle.value}
          aria-label={ariaLabel}
        >
          {renderFinalContent()}
          {measureStatus.value === MeasureStatus.START && (
            <>
              {/** With `lineClamp` */}
              <ELMeasure
                style={{
                  width: `${width.value}px`,
                  ...lineClipStyle,
                  WebkitLineClamp: lineClamp,
                }}
                ref={baseRowsEllipsisRef}
              >
                {renderChildren(content, false)}
              </ELMeasure>

              {/** With `lineClamp - 1` */}
              <ELMeasure
                style={{
                  width: `${width.value}px`,
                  ...lineClipStyle,
                  WebkitLineClamp: lineClamp - 1,
                }}
                ref={descRowsEllipsisRef}
              >
                {renderChildren(content, false)}
              </ELMeasure>

              {/** With `symbol row` */}
              <ELMeasure
                style={{
                  width: `${width.value}px`,
                  ...lineClipStyle,
                  WebkitLineClamp: 1,
                }}
                ref={symbolRowEllipsisRef}
              >
                {renderChildren([], true)}
              </ELMeasure>
            </>
          )}
          {measureStatus.value === MeasureStatus.MEASURING && (
            <ELMeasure
              style={{
                width: `${width.value}px`,
                top: 400,
              }}
              ref={cutMidRef}
            >
              {renderChildren(sliceNodes(content, cutMidIndex.value), true)}
            </ELMeasure>
          )}
        </div>
      )

      if (props.tooltip) {
        const tooltipProps =
          typeof props.tooltip === 'object' ? props.tooltip : {}

        return (
          <ElTooltip
            placement="top"
            {...tooltipProps}
            disabled={!enableTooltip.value}
          >
            {{
              default: () => container,
              content: () => content,
            }}
          </ElTooltip>
        )
      } else return container
    }
  },
})

export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>
export type EllipsisInstance = InstanceType<typeof Ellipsis>

export default Ellipsis
