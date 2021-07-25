<template>
  <el-popper
    ref="tooltip"
    v-model:visible="tooltipVisible"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    :stop-popper-mouse-event="false"
    effect="light"
    pure
    manual-mode
    popper-class="el-table-filter"
    append-to-body
  >
    <template #default>
      <div v-if="multiple">
        <div class="el-table-filter__content">
          <el-scrollbar wrap-class="el-table-filter__wrap">
            <el-checkbox-group v-model="filteredValue" class="el-table-filter__checkbox-group">
              <el-checkbox
                v-for="filter in filters"
                :key="filter.value"
                :label="filter.value"
              >
                {{ filter.text }}
              </el-checkbox>
            </el-checkbox-group>
          </el-scrollbar>
        </div>
        <div class="el-table-filter__bottom">
          <button
            :class="{ 'is-disabled': filteredValue.length === 0 }"
            :disabled="filteredValue.length === 0"
            type
            @click="handleConfirm"
          >
            {{ t('el.table.confirmFilter') }}
          </button>
          <button type @click="handleReset">{{ t('el.table.resetFilter') }}</button>
        </div>
      </div>
      <ul v-else class="el-table-filter__list">
        <li
          :class="{
            'is-active': filterValue === undefined || filterValue === null,
          }"
          class="el-table-filter__list-item"
          @click="handleSelect(null)"
        >
          {{ t('el.table.clearFilter') }}
        </li>
        <li
          v-for="filter in filters"
          :key="filter.value"
          :class="{ 'is-active': isActive(filter) }"
          :label="filter.value"
          class="el-table-filter__list-item"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </template>
    <template #trigger>
      <span
        v-click-outside:[popperPaneRef]="hideFilterPanel"
        class="el-table__column-filter-trigger el-none-outline"
        @click="showFilterPanel"
      >
        <i
          :class="[
            'el-icon-arrow-down',
            column.filterOpened ? 'el-icon-arrow-up' : '',
          ]"
        ></i>
      </span>
    </template>
  </el-popper>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  getCurrentInstance,
  watch,
  WritableComputedRef,
  PropType,
} from 'vue'
import ElPopper from '@element-plus/popper'
import { useLocaleInject } from '@element-plus/hooks'
import ElCheckbox from '@element-plus/checkbox'
import ElCheckboxGroup from '@element-plus/checkbox-group'
import ElScrollbar from '@element-plus/scrollbar'
import { ClickOutside } from '@element-plus/directives'
import { TableColumnCtx } from './table-column/defaults'
import { TableHeader } from './table-header/index'
import { Store } from './store/index'

export default defineComponent({
  name: 'ElTableFilterPanel',
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElPopper,
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    store: {
      type: Object as PropType<Store<unknown>>,
    },
    column: {
      type: Object as PropType<TableColumnCtx<unknown>>,
    },
    upDataColumn: {
      type: Function,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { t } = useLocaleInject()
    const parent = instance.parent as TableHeader
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance
    }
    const tooltipVisible = ref(false)
    const tooltip = ref(null)
    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterValue = computed({
      get: () => (props.column.filteredValue || [])[0],
      set: (value: string) => {
        if (filteredValue.value) {
          if (typeof value !== 'undefined' && value !== null) {
            filteredValue.value.splice(0, 1, value)
          } else {
            filteredValue.value.splice(0, 1)
          }
        }
      },
    })
    const filteredValue: WritableComputedRef<unknown[]> = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || []
        }
        return []
      },
      set(value: unknown[]) {
        if (props.column) {
          props.upDataColumn('filteredValue', value)
        }
      },
    })
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple
      }
      return true
    })
    const isActive = filter => {
      return filter.value === filterValue.value
    }
    const hidden = () => {
      tooltipVisible.value = false
    }
    const showFilterPanel = (e: MouseEvent) => {
      e.stopPropagation()
      tooltipVisible.value = !tooltipVisible.value
    }
    const hideFilterPanel = () => {
      tooltipVisible.value = false
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
    const handleSelect = (_filterValue?: string) => {
      filterValue.value = _filterValue
      if (typeof _filterValue !== 'undefined' && _filterValue !== null) {
        confirmFilter(filteredValue.value)
      } else {
        confirmFilter([])
      }
      hidden()
    }
    const confirmFilter = (filteredValue: unknown[]) => {
      props.store.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      })
      props.store.updateAllSelected()
    }
    watch(
      tooltipVisible,
      value => {
        // todo
        if (props.column) {
          props.upDataColumn('filterOpened', value)
        }
      },
      {
        immediate: true,
      },
    )

    const popperPaneRef = computed(() => {
      return tooltip.value?.popperRef
    })

    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
    }
  },
})
</script>
