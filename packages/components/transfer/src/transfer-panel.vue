<template>
  <div :class="ns.b('panel')">
    <p :class="ns.be('panel', 'header')">
      <el-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        :validate-event="false"
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
        :prefix-icon="Search"
        clearable
        :validate-event="false"
      />
      <el-checkbox-group
        v-show="!hasNoMatch && !isEmpty(data)"
        v-model="checked"
        :validate-event="false"
        :class="[ns.is('filterable', filterable), ns.be('panel', 'list')]"
      >
        <el-checkbox
          v-for="item in filteredData"
          :key="item[propsAlias.key]"
          :class="ns.be('panel', 'item')"
          :value="item[propsAlias.key]"
          :disabled="item[propsAlias.disabled]"
          :validate-event="false"
        >
          <option-content :option="optionRender?.(item)" />
        </el-checkbox>
      </el-checkbox-group>
      <div
        v-show="hasNoMatch || isEmpty(data)"
        :class="ns.be('panel', 'empty')"
      >
        <slot name="empty">
          {{ hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData') }}
        </slot>
      </div>
    </div>
    <p v-if="hasFooter" :class="ns.be('panel', 'footer')">
      <slot />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, toRefs, useSlots } from 'vue'
import { isEmpty } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElCheckbox, ElCheckboxGroup } from '@element-plus/components/checkbox'
import { ElInput } from '@element-plus/components/input'
import { Search } from '@element-plus/icons-vue'
import { transferPanelEmits, transferPanelProps } from './transfer-panel'
import { useCheck, usePropsAlias } from './composables'

import type { VNode } from 'vue'
import type { TransferPanelState } from './transfer-panel'

defineOptions({
  name: 'ElTransferPanel',
})

const props = defineProps(transferPanelProps)
const emit = defineEmits(transferPanelEmits)
const slots = useSlots()

const OptionContent = ({ option }: { option?: VNode | VNode[] }) => option

const { t } = useLocale()
const ns = useNamespace('transfer')

const panelState = reactive<TransferPanelState>({
  checked: [],
  allChecked: false,
  query: '',
  checkChangeByUser: true,
})

const propsAlias = usePropsAlias(props)

const {
  filteredData,
  checkedSummary,
  isIndeterminate,
  handleAllCheckedChange,
} = useCheck(props, panelState, emit)

const hasNoMatch = computed(
  () => !isEmpty(panelState.query) && isEmpty(filteredData.value)
)

const hasFooter = computed(() => !isEmpty(slots.default!()[0].children))

const { checked, allChecked, query } = toRefs(panelState)

defineExpose({
  /** @description filter keyword */
  query,
})
</script>
