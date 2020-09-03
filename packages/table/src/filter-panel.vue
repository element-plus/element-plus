<template>
  <el-popper ref="tooltip" :placement="placement" :value="tooltipVisible">
    <template #default>
      <div v-if="multiple" v-clickoutside="handleOutsideClick" class="el-table-filter">
        <div class="el-table-filter__content">
          <el-scrollbar wrap-class="el-table-filter__wrap">
            <el-checkbox-group v-model="filteredValue" class="el-table-filter__checkbox-group">
              <el-checkbox v-for="filter in filters" :key="filter.value" :label="filter.value">{{ filter.text }}</el-checkbox>
            </el-checkbox-group>
          </el-scrollbar>
        </div>
        <div class="el-table-filter__bottom">
          <button :class="{ 'is-disabled': filteredValue.length === 0 }" :disabled="filteredValue.length === 0" @click="handleConfirm">{{ t('el.table.confirmFilter') }}</button>
          <button @click="handleReset">{{ t('el.table.resetFilter') }}</button>
        </div>
      </div>
      <div v-else v-clickoutside="handleOutsideClick" class="el-table-filter">
        <ul class="el-table-filter__list">
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
      </div>
    </template>
    <template #trigger>
      <span class="el-table__column-filter-trigger">
        <i :class="['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : '']"></i>
      </span>
    </template>
  </el-popper>
</template>

<script lang='ts'>
import { Popper as ElPopper } from '@element-plus/popper'
import { t } from '@element-plus/locale'
import { ClickOutside } from '@element-plus/directives'
import useDropdown from './dropdown.ts'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import ElCheckboxGroup from '@element-plus/checkbox/src/checkbox-group.vue'
import ElScrollbar from '@element-plus/scrollbar/src/index'
import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue'

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
      default: 'bottom-end',
    },
    store: {
      type: Object,
    },
    column: {
      type: Object,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const table = ref(null)
    const cell = ref(null)
    const column = ref(null)
    const tooltipVisible = ref(false)
    const { open, close } = useDropdown()

    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterValue = computed({
      get: () => (props.column.filteredValue || [])[0],
      set: value => {
        if (filterValue.value) {
          if (typeof value !== 'undefined' && value !== null) {
            filterValue.value.splice(0, 1, value)
          } else {
            filterValue.value.splice(0, 1)
          }
        }
      },
    })
    const filteredValue = computed({
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
          open(instance)
        } else {
          close(instance)
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
