<template>
  <div class="el-transfer-panel">
    <p class="el-transfer-panel__header">
      <el-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </el-checkbox>
    </p>

    <div
      :class="['el-transfer-panel__body', hasFooter ? 'is-with-footer' : '']"
    >
      <el-input
        v-if="filterable"
        v-model="query"
        class="el-transfer-panel__filter"
        size="small"
        :placeholder="placeholder"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <template #prefix>
          <i :class="['el-input__icon', 'el-icon-' + inputIcon]" @click="clearQuery"></i>
        </template>
      </el-input>
      <el-checkbox-group
        v-show="!hasNoMatch && data.length > 0"
        v-model="checked"
        :class="{ 'is-filterable': filterable }"
        class="el-transfer-panel__list"
      >
        <el-checkbox
          v-for="item in filteredData"
          :key="item[keyProp]"
          class="el-transfer-panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          <option-content
            :option="item"
            :render-content="renderContent"
            :label-prop="labelProp"
            :key-prop="keyProp"
          />
        </el-checkbox>
      </el-checkbox-group>
      <p v-show="hasNoMatch" class="el-transfer-panel__empty">
        {{ t('el.transfer.noMatch') }}
      </p>
      <p
        v-show="data.length === 0 && !hasNoMatch"
        class="el-transfer-panel__empty"
      >
        {{ t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="el-transfer-panel__footer">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from 'vue'
import { t } from '@element-plus/locale'
import ElCheckboxGroup from '@element-plus/checkbox/src/checkbox-group.vue'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import ElInput from '@element-plus/input/src/index.vue'
import OptionContent from './option-content.vue'


const CHECKED_CHANGE_EVENT = 'checked-change'

export default defineComponent({
  name: 'ElTransferPanel',

  components: {
    ElCheckboxGroup,
    ElCheckbox,
    ElInput,
    OptionContent,
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object,
  },

  emits: [CHECKED_CHANGE_EVENT],

  setup(props, { emit, slots }) {
    const initData = reactive({
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true,
    })


    const {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,
    } = useCheck(props, initData, emit)


    const hasNoMatch = computed(() => {
      return initData.query.length > 0 && filteredData.value.length === 0
    })

    const inputIcon = computed(() => {
      return initData.query.length > 0 && initData.inputHover
        ? 'circle-close'
        : 'search'
    })

    const hasFooter = computed(() => {
      return !!slots.default()[0].children.length
    })

    const clearQuery = () => {
      if (inputIcon.value === 'circle-close') {
        initData.query = ''
      }
    }

    const {
      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,
    } = toRefs(initData)

    return {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,

      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,

      hasNoMatch,
      inputIcon,
      hasFooter,
      clearQuery,

      t,
    }
  },
})

const useCheck = (props, initData, emit) => {

  const labelProp = computed(() => {
    return props.props.label || 'label'
  })

  const keyProp = computed(() => {
    return props.props.key || 'key'
  })

  const disabledProp = computed(() => {
    return props.props.disabled || 'disabled'
  })


  const filteredData = computed(() => {
    return props.data.filter(item => {
      if (typeof props.filterMethod === 'function') {
        return props.filterMethod(initData.query, item)
      } else {
        const label = item[labelProp.value] || item[keyProp.value].toString()
        return label.toLowerCase().indexOf(initData.query.toLowerCase()) > -1
      }
    })
  })

  const checkableData = computed(() => {
    return filteredData.value.filter(item => !item[disabledProp.value])
  })

  const checkedSummary = computed(() => {
    const checkedLength = initData.checked.length
    const dataLength = props.data.length
    const { noChecked, hasChecked } = props.format
    if (noChecked && hasChecked) {
      return checkedLength > 0
        ? hasChecked
          .replace(/\${checked}/g, checkedLength)
          .replace(/\${total}/g, dataLength)
        : noChecked.replace(/\${total}/g, dataLength)
    } else {
      return `${ checkedLength }/${ dataLength }`
    }
  })

  const isIndeterminate = computed(() => {
    const checkedLength = initData.checked.length
    return checkedLength > 0 && checkedLength < checkableData.value.length
  })


  const updateAllChecked = () => {
    const checkableDataKeys = checkableData.value.map(
      item => item[keyProp.value],
    )
    initData.allChecked =
      checkableDataKeys.length > 0 &&
      checkableDataKeys.every(item => initData.checked.indexOf(item) > -1)
  }

  const handleAllCheckedChange = value => {
    initData.checked = value
      ? checkableData.value.map(item => item[keyProp.value])
      : []
  }

  watch(() => initData.checked, (val, oldVal) => {
    updateAllChecked()
    if (initData.checkChangeByUser) {
      const movedKeys = val
        .concat(oldVal)
        .filter(v => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1)
      emit(CHECKED_CHANGE_EVENT, val, movedKeys)
    } else {
      emit(CHECKED_CHANGE_EVENT, val)
      initData.checkChangeByUser = true
    }
  })

  watch(checkableData, () => {
    updateAllChecked()
  })


  watch(() => props.data, () => {
    const checked = []
    const filteredDataKeys = filteredData.value.map(
      item => item[keyProp.value],
    )
    initData.checked.forEach(item => {
      if (filteredDataKeys.indexOf(item) > -1) {
        checked.push(item)
      }
    })
    initData.checkChangeByUser = false
    initData.checked = checked
  })

  watch(() => props.defaultChecked, (val, oldVal) => {
    if (oldVal
      && val.length === oldVal.length
      && val.every(item => oldVal.indexOf(item) > -1)
    )
      return

    const checked = []
    const checkableDataKeys = checkableData.value.map(
      item => item[keyProp.value],
    )
    val.forEach(item => {
      if (checkableDataKeys.indexOf(item) > -1) {
        checked.push(item)
      }
    })
    initData.checkChangeByUser = false
    initData.checked = checked
  }, {
    immediate: true,
  })


  return {
    labelProp,
    keyProp,
    disabledProp,
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    updateAllChecked,
    handleAllCheckedChange,
  }
}
</script>
