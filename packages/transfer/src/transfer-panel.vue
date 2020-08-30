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
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { t } from '@element-plus/locale'
import ElCheckboxGroup from '@element-plus/checkbox/src/checkbox-group.vue'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import ElInput from '@element-plus/input/src/index.vue'
import OptionContent from './option-content.vue'
import { useCheck } from './useCheck'


export const CHECKED_CHANGE_EVENT = 'checked-change'

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


    const hasNoMatch = computed(() => initData.query.length > 0 && filteredData.value.length === 0)

    const inputIcon = computed(() => {
      return initData.query.length > 0 && initData.inputHover
        ? 'circle-close'
        : 'search'
    })

    const hasFooter = computed(() => !!slots.default()[0].children.length)

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
</script>
