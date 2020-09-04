<template>
  <el-popper
    ref="tooltip"
    :placement="placement"
    :show-arrow="false"
    :value="tooltipVisible"
    effect="light"
    popper-class="el-table-filter el-table-filter-padding"
    trigger="click"
  >
    <template #default>
      <div v-if="multiple">
        <div class="el-table-filter__content">
          <el-scrollbar :native="false" :noresize="true" wrap-class="el-table-filter__wrap">
            <el-checkbox-group v-model="filteredValue" class="el-table-filter__checkbox-group">
              <el-checkbox v-for="filter in filters" :key="filter.value" :label="filter.value">{{ filter.text }}</el-checkbox>
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
        <li :class="{ 'is-active': filterValue === undefined || filterValue === null }" class="el-table-filter__list-item" @click="handleSelect(null)">{{ t('el.table.clearFilter') }}</li>
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
      <span class="el-table__column-filter-trigger el-none-outline">
        <i :class="['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : '']"></i>
      </span>
    </template>
  </el-popper>
</template>

<script lang='ts'>
import { Popper as ElPopper } from '@element-plus/popper'
import { t } from '@element-plus/locale'
import { ClickOutside } from '@element-plus/directives'
import useDropdown from './dropdown'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import ElCheckboxGroup from '@element-plus/checkbox/src/checkbox-group.vue'
import ElScrollbar from '@element-plus/scrollbar/src/index'
import { ref, computed, onMounted, getCurrentInstance, watch, WritableComputedRef } from 'vue'

export default {
  name: 'ElTableFilterPanel',

  directives: {
    ClickOutside,
  },

  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElPopper,
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    store: {
      type: Object,
    },
    column: {
      type: Object,
    },
  },
  setup(props) {
    const instance = getCurrentInstance() as any
    const parent = instance.parent
    if (!parent.ctx.filterPanels[props.column.id]) {
      parent.ctx.filterPanels[props.column.id] = instance
    }
    const table = ref(null)
    const cell = ref(null)
    const tooltipVisible = ref(false)
    const { open, close } = useDropdown(instance)

    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterValue = computed({
      get: () => (props.column.filteredValue || [])[0],
      set: value => {
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
      set(value) {
        if (props.column) {
          // props.column.filteredValue = value
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

    const handleOutsideClick = () => {
      setTimeout(() => {
        tooltipVisible.value = false
      }, 16)
    }

    const handleConfirm = () => {
      confirmFilter(filteredValue.value)
      handleOutsideClick()
    }

    const handleReset = () => {
      filteredValue.value = []
      confirmFilter(filteredValue.value)
      handleOutsideClick()
    }

    const handleSelect = _filterValue => {
      filterValue.value = _filterValue

      if (typeof _filterValue !== 'undefined' && _filterValue !== null) {
        confirmFilter(filteredValue.value)
      } else {
        confirmFilter([])
      }

      handleOutsideClick()
    }

    const confirmFilter = filteredValue => {
      props.store.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      })
      props.store.updateAllSelected()
    }
    watch(
      tooltipVisible,
      value => {
        // if (props.column) props.column.filterOpened = value
        if (value) {
          open()
        } else {
          close()
        }
      },
      {
        immediate: true,
      },
    )
    return {
      tooltipVisible,
      handleOutsideClick,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
    }
  },
}
</script>

<style>
  .el-table-filter-padding {
    padding: 0;
    border: 1px solid #ebeef5 !important;
  }
  .el-none-outline {
    outline: none;
  }
</style>
