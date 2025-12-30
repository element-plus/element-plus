<template>
  <el-tooltip
    ref="tooltipRef"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    trigger="click"
    role="dialog"
    teleported
    effect="light"
    pure
    loop
    :popper-class="filterClassName"
    persistent
    :append-to="appendTo"
    @show="handleShowTooltip"
    @hide="handleHideTooltip"
  >
    <template #content>
      <div
        v-if="multiple"
        ref="rootRef"
        tabindex="-1"
        :class="ns.e('multiple')"
      >
        <div :class="ns.e('content')">
          <el-scrollbar :wrap-class="ns.e('wrap')">
            <el-checkbox-group
              v-model="filteredValue"
              :class="ns.e('checkbox-group')"
            >
              <el-checkbox
                v-for="filter in filters"
                :key="filter.value"
                :value="filter.value"
              >
                {{ filter.text }}
              </el-checkbox>
            </el-checkbox-group>
          </el-scrollbar>
        </div>
        <div :class="ns.e('bottom')">
          <button
            :class="ns.is('disabled', filteredValue.length === 0)"
            :disabled="filteredValue.length === 0"
            type="button"
            @click="handleConfirm"
          >
            {{ t('el.table.confirmFilter') }}
          </button>
          <button type="button" @click="handleReset">
            {{ t('el.table.resetFilter') }}
          </button>
        </div>
      </div>
      <ul
        v-else
        ref="rootRef"
        tabindex="-1"
        role="radiogroup"
        :class="ns.e('list')"
        @keydown="handleKeydown"
      >
        <li
          role="radio"
          :class="[
            ns.e('list-item'),
            ns.is('active', isPropAbsent(filterValue)),
          ]"
          :tabindex="checkedIndex === 0 ? 0 : -1"
          :aria-checked="isPropAbsent(filterValue)"
          @click="handleSelect(null, 0)"
        >
          {{ t('el.table.clearFilter') }}
        </li>
        <li
          v-for="(filter, idx) in filters"
          :key="filter.value"
          role="radio"
          :class="[ns.e('list-item'), ns.is('active', isActive(filter))]"
          :tabindex="checkedIndex === idx + 1 ? 0 : -1"
          :aria-checked="isActive(filter)"
          @click="handleSelect(filter.value, idx + 1)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </template>
    <template #default>
      <button
        type="button"
        :class="`${ns.namespace.value}-table__column-filter-trigger`"
        :aria-label="t('el.table.filterLabel', { column: column?.label || '' })"
      >
        <el-icon>
          <slot name="filter-icon">
            <arrow-up v-if="column?.filterOpened" />
            <arrow-down v-else />
          </slot>
        </el-icon>
      </button>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
import { ElCheckbox, ElCheckboxGroup } from '@element-plus/components/checkbox'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { EVENT_CODE } from '@element-plus/constants'
import { useLocale, useNamespace } from '@element-plus/hooks'
import {
  ElTooltip,
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import { getEventCode, isPropAbsent } from '@element-plus/utils'

import type { DefaultRow } from './table/defaults'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { Placement } from '@element-plus/components/popper'
import type { PropType, WritableComputedRef } from 'vue'
import type { TableColumnCtx } from './table-column/defaults'
import type { TableHeader } from './table-header'
import type { Store } from './store'

export default defineComponent({
  name: 'ElTableFilterPanel',
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown,
    ArrowUp,
  },
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
    },
    store: {
      type: Object as PropType<Store<DefaultRow>>,
    },
    column: {
      type: Object as PropType<TableColumnCtx<DefaultRow>>,
    },
    upDataColumn: {
      type: Function,
    },
    appendTo: useTooltipContentProps.appendTo,
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { t } = useLocale()
    const ns = useNamespace('table-filter')
    const parent = instance?.parent as TableHeader
    if (props.column && !parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance
    }

    const tooltipRef = ref<TooltipInstance | null>(null)
    const rootRef = ref<HTMLElement | null>(null)
    const checkedIndex = ref(0)

    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterClassName = computed(() => {
      if (props.column && props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`
      }
      return ns.b()
    })
    const filterValue = computed({
      get: () => (props.column?.filteredValue || [])[0],
      set: (value?: string | null) => {
        if (filteredValue.value) {
          if (!isPropAbsent(value)) {
            filteredValue.value.splice(0, 1, value)
          } else {
            filteredValue.value.splice(0, 1)
          }
        }
      },
    })
    const filteredValue: WritableComputedRef<string[]> = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || []
        }
        return []
      },
      set(value: string[]) {
        if (props.column) {
          props.upDataColumn?.('filteredValue', value)
        }
      },
    })
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple
      }
      return true
    })
    const isActive = (filter: { value: string; text: string }) => {
      return filter.value === filterValue.value
    }
    const hidden = () => {
      tooltipRef.value?.onClose()
    }
    const handleConfirm = () => {
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleReset = () => {
      filteredValue.value = []
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleSelect = (_filterValue: string | null, index: number) => {
      filterValue.value = _filterValue!
      checkedIndex.value = index
      if (!isPropAbsent(_filterValue)) {
        confirmFilter(filteredValue.value)
      } else {
        confirmFilter([])
      }
      hidden()
    }
    const confirmFilter = (filteredValue: unknown[]) => {
      props.store?.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      })
      props.store?.updateAllSelected()
    }
    const handleShowTooltip = () => {
      rootRef.value?.focus()
      !multiple.value && initCheckedIndex()
      if (props.column) {
        props.upDataColumn?.('filterOpened', true)
      }
    }
    const handleHideTooltip = () => {
      if (props.column) {
        props.upDataColumn?.('filterOpened', false)
      }
    }

    const initCheckedIndex = () => {
      if (isPropAbsent(filterValue)) {
        checkedIndex.value = 0
        return
      }
      const idx = (filters.value || []).findIndex((item) => {
        return item.value === filterValue.value
      })
      checkedIndex.value = idx >= 0 ? idx + 1 : 0
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const code = getEventCode(event)
      const len = (filters.value ? filters.value.length : 0) + 1
      let index = checkedIndex.value
      let isPreventDefault = true

      switch (code) {
        case EVENT_CODE.down:
        case EVENT_CODE.right:
          index = (index + 1) % len
          break
        case EVENT_CODE.up:
        case EVENT_CODE.left:
          index = (index - 1 + len) % len
          break
        case EVENT_CODE.tab:
          hidden()
          isPreventDefault = false
          break
        case EVENT_CODE.enter:
        case EVENT_CODE.space:
          if (index === 0) {
            handleSelect(null, 0)
          } else {
            const item = (filters.value || [])[index - 1]
            item.value && handleSelect(item.value, index)
          }
          break
        default:
          isPreventDefault = false
          break
      }

      isPreventDefault && event.preventDefault()
      checkedIndex.value = index
      rootRef.value
        ?.querySelector<HTMLElement>(
          `.${ns.e('list-item')}:nth-child(${index + 1})`
        )
        ?.focus()
    }

    return {
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isPropAbsent,
      isActive,
      t,
      ns,
      tooltipRef,
      rootRef,
      checkedIndex,
      handleShowTooltip,
      handleHideTooltip,
      handleKeydown,
    }
  },
})
</script>
