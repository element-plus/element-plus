<template>
  <div :class="ns.b('panel')">
    <p :class="ns.be('panel', 'header')">
      <el-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </el-checkbox>
    </p>

    <div :class="[ns.be('panel', 'body'), ns.is('with-footer', hasFooter)]">
      <el-input
        v-if="filterable"
        v-model="query"
        :class="ns.be('panel', 'filter')"
        size="default"
        :placeholder="placeholder"
        :prefix-icon="SearchIcon"
        clearable
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
      </el-input>
      <el-checkbox-group
        v-show="!hasNoMatch && data.length > 0"
        v-model="checked"
        :class="[ns.is('filterable', filterable), ns.be('panel', 'list')]"
      >
        <el-checkbox
          v-for="item in filteredData"
          :key="item[keyProp]"
          :class="ns.be('panel', 'item')"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          <option-content :option="optionRender(item)" />
        </el-checkbox>
      </el-checkbox-group>
      <p
        v-show="hasNoMatch || data.length === 0"
        :class="ns.be('panel', 'empty')"
      >
        {{ hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" :class="ns.be('panel', 'footer')">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElCheckbox, ElCheckboxGroup } from '@element-plus/components/checkbox'
import ElInput from '@element-plus/components/input'
import { Search } from '@element-plus/icons-vue'
import { useCheck, useCheckProps, CHECKED_CHANGE_EVENT } from './useCheck'

export default defineComponent({
  name: 'ElTransferPanel',

  components: {
    ElCheckboxGroup,
    ElCheckbox,
    ElInput,
    OptionContent: ({ option }) => option,
  },

  props: useCheckProps,

  emits: [CHECKED_CHANGE_EVENT],

  setup(props, { slots }) {
    const { t } = useLocale()
    const ns = useNamespace('transfer')

    const panelState = reactive({
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
    } = useCheck(props, panelState)

    const hasNoMatch = computed(() => {
      return panelState.query.length > 0 && filteredData.value.length === 0
    })

    const hasFooter = computed(() => !!slots.default()[0].children.length)

    const { checked, allChecked, query, inputHover, checkChangeByUser } =
      toRefs(panelState)

    return {
      ns,
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
      SearchIcon: Search,
      hasFooter,

      t,
    }
  },
})
</script>
