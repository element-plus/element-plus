<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
  renderSlot,
  h,
  withCtx,
} from 'vue'
import { getValueByPath, isUndefined, isObject } from '@element-plus/utils/util'
// import { addResizeListener, removeResizeListener, ResizableElement } from '@element-plus/utils/resize-event'
import { FixedSizeList, DynamicSizeList } from '@element-plus/virtual-list'
import GroupItem from './group-item.vue'
import OptionItem from './option-item.vue'

import { selectKey } from './token'

import type { ItemProps } from '@element-plus/virtual-list/src/types'
import type { OptionItemProps, Option } from './select.types'

export default defineComponent({
  name: 'ElSelectDropdown',

  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number,
  },
  setup(props) {
    const select = inject(selectKey)
    const cachedHeights = ref<Array<number>>([])

    const isSized = computed(() => isUndefined(select.props.estimatedOptionHeight))
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

    const contains = (arr = [], target: any) => {
      const {
        props: {
          valueKey,
        },
      } = select

      if (!isObject(target)) {
        return arr.includes(target)
      }

      return arr && arr.some(item => {
        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
      })
    }
    const isEqual = (selected: unknown, target: unknown) => {
      if (!isObject(target)) {
        return selected === target
      } else {
        const { valueKey } = select.props
        return getValueByPath(selected, valueKey) === getValueByPath(target, valueKey)
      }
    }

    const isItemSelected = (modelValue: any[] | any, target: Option) => {
      if (select.props.multiple) {
        return contains(modelValue, target.value)
      }
      return isEqual(modelValue, target.value)
    }

    const isItemDisabled = (modelValue: any[] | any, selected: boolean) => {
      const { disabled, multiple, multipleLimit } = select.props
      return disabled
        || (!selected
          && (multiple
            ? multipleLimit > 0 && modelValue.length < multipleLimit
            : false))
    }

    const isItemHovering = (target: number) => props.hoveringIndex === target

    // computed
    return {
      select,
      listProps,
      isSized,

      isItemDisabled,
      isItemHovering,
      isItemSelected,
    }
  },

  render() {
    const {
      $slots,

      data,
      listProps,
      select,
      isSized,
      width,
      // methods
      isItemDisabled,
      isItemHovering,
      isItemSelected,
    } = this
    const Comp = isSized ? FixedSizeList : DynamicSizeList

    const { props: selectProps, onSelect } = select
    const { height, modelValue, multiple } = selectProps

    if (data.length === 0) {
      return h('div', {
        class: '',
      }, $slots.empty?.())
    }

    const ListItem = withCtx(
      (scoped: ItemProps<any>) => {
        const { index, data } = scoped
        const item = data[index]
        // render group item which is not selectable.
        if (data[index].type === 'Group') {
          return h(
            GroupItem,
            {
              item,
              style: scoped.style,
              height: isSized ? listProps.itemSize : listProps.estimatedSize,
            },
          )
        }

        const selected = isItemSelected(modelValue, item)
        const itemDisabled = isItemDisabled(modelValue, selected)
        // render option item which is selectable
        return h(OptionItem,
          {
            ...scoped,
            selected,
            disabled: itemDisabled,
            hovering: isItemHovering(index),
            item,
            onSelect,
          },
          {
            default: withCtx((props: OptionItemProps) => {
              return renderSlot($slots, 'default', props, () => [h('span', item.label)])
            }),
          })
      },
    )


    const List = h(
      Comp,
      {
        ref: 'listRef', // forwarded ref so that select can access the list directly
        className: 'el-select-dropdown__list',
        data,
        height,
        width,
        total: data.length,
        ...listProps,
      },
      {
        default: ListItem,
      },
    )
    return h('div', {
      class: {
        'is-multiple': multiple,
        'el-select-dropdown': true,
      },
    }, [List])
  },

})
</script>
