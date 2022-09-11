import { computed, defineComponent, inject, ref, unref } from 'vue'
import { get } from 'lodash-unified'
import { isObject, isUndefined } from '@element-plus/utils'
import {
  DynamicSizeList,
  FixedSizeList,
} from '@element-plus/components/virtual-list'
import { useNamespace } from '@element-plus/hooks'
import { EVENT_CODE } from '@element-plus/constants'
import GroupItem from './group-item.vue'
import OptionItem from './option-item.vue'

import { selectV2InjectionKey } from './token'

import type { ItemProps } from '@element-plus/components/virtual-list'
import type { Option, OptionItemProps } from './select.types'

export default defineComponent({
  name: 'ElSelectDropdown',

  props: {
    data: {
      type: Array,
      required: true,
    },
    hoveringIndex: Number,
    width: Number,
  },
  setup(props, { slots, expose }) {
    const select = inject(selectV2InjectionKey)!
    const ns = useNamespace('select')
    const cachedHeights = ref<Array<number>>([])

    const listRef = ref()

    const isSized = computed(() =>
      isUndefined(select.props.estimatedOptionHeight)
    )
    const listProps = computed(() => {
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight,
        }
      }

      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx: number) => cachedHeights.value[idx],
      }
    })

    const contains = (arr: Array<any> = [], target: any) => {
      const {
        props: { valueKey },
      } = select

      if (!isObject(target)) {
        return arr.includes(target)
      }

      return (
        arr &&
        arr.some((item) => {
          return get(item, valueKey) === get(target, valueKey)
        })
      )
    }
    const isEqual = (selected: unknown, target: unknown) => {
      if (!isObject(target)) {
        return selected === target
      } else {
        const { valueKey } = select.props
        return get(selected, valueKey) === get(target, valueKey)
      }
    }

    const isItemSelected = (modelValue: any[] | any, target: Option) => {
      const { valueKey } = select.props
      if (select.props.multiple) {
        return contains(modelValue, get(target, valueKey))
      }
      return isEqual(modelValue, get(target, valueKey))
    }

    const isItemDisabled = (modelValue: any[] | any, selected: boolean) => {
      const { disabled, multiple, multipleLimit } = select.props
      return (
        disabled ||
        (!selected &&
          (multiple
            ? multipleLimit > 0 && modelValue.length >= multipleLimit
            : false))
      )
    }

    const isItemHovering = (target: number) => props.hoveringIndex === target

    const scrollToItem = (index: number) => {
      const list = listRef.value as any
      if (list) {
        list.scrollToItem(index)
      }
    }

    const resetScrollTop = () => {
      const list = listRef.value as any
      if (list) {
        list.resetScrollTop()
      }
    }

    expose({
      listRef,
      isSized,

      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop,
    })

    const Item = (itemProps: ItemProps<any>) => {
      const { index, data, style } = itemProps
      const sized = unref(isSized)
      const { itemSize, estimatedSize } = unref(listProps)
      const { modelValue } = select.props
      const { onSelect, onHover } = select
      const item = data[index]
      if (item.type === 'Group') {
        return (
          <GroupItem
            item={item}
            style={style}
            height={(sized ? itemSize : estimatedSize) as number}
          />
        )
      }

      const isSelected = isItemSelected(modelValue, item)
      const isDisabled = isItemDisabled(modelValue, isSelected)
      const isHovering = isItemHovering(index)
      return (
        <OptionItem
          {...itemProps}
          selected={isSelected}
          disabled={item.disabled || isDisabled}
          created={!!item.created}
          hovering={isHovering}
          item={item}
          onSelect={onSelect}
          onHover={onHover}
        >
          {{
            default: (props: OptionItemProps) =>
              slots.default?.(props) || <span>{item.label}</span>,
          }}
        </OptionItem>
      )
    }

    // computed
    const { onKeyboardNavigate, onKeyboardSelect } = select

    const onForward = () => {
      onKeyboardNavigate('forward')
    }

    const onBackward = () => {
      onKeyboardNavigate('backward')
    }

    const onEscOrTab = () => {
      select.expanded = false
    }

    const onKeydown = (e: KeyboardEvent) => {
      const { code } = e
      const { tab, esc, down, up, enter } = EVENT_CODE
      if (code !== tab) {
        e.preventDefault()
        e.stopPropagation()
      }

      switch (code) {
        case tab:
        case esc: {
          onEscOrTab()
          break
        }
        case down: {
          onForward()
          break
        }
        case up: {
          onBackward()
          break
        }
        case enter: {
          onKeyboardSelect()
          break
        }
      }
    }

    return () => {
      const { data, width } = props
      const { height, multiple, scrollbarAlwaysOn } = select.props

      if (data.length === 0) {
        return (
          <div
            class={ns.b('dropdown')}
            style={{
              width: `${width}px`,
            }}
          >
            {slots.empty?.()}
          </div>
        )
      }

      const List = unref(isSized) ? FixedSizeList : DynamicSizeList

      return (
        <div class={[ns.b('dropdown'), ns.is('multiple', multiple)]}>
          <List
            ref={listRef}
            {...unref(listProps)}
            className={ns.be('dropdown', 'list')}
            scrollbarAlwaysOn={scrollbarAlwaysOn}
            data={data}
            height={height}
            width={width}
            total={data.length}
            // @ts-ignore - dts problem
            onKeydown={onKeydown}
          >
            {{
              default: (props: ItemProps<any>) => <Item {...props} />,
            }}
          </List>
        </div>
      )
    }
  },
})
