<template>
  <div :class="ns.b('panel')">
    <p :class="ns.be('panel', 'header')">
      <el-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        :validate-event="false"
        @change="handleAllCheckedChange"
      >
        <span :class="ns.be('panel', 'header-title')">{{ title }}</span>
        <span :class="ns.be('panel', 'header-count')">
          {{ checkedSummary }}
        </span>
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
        ref="checkboxGroupRef"
        v-model="checked"
        :validate-event="false"
        :class="[ns.is('filterable', filterable), ns.be('panel', 'list')]"
      >
        <template v-if="!virtualScroll">
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
        </template>
        <el-fixed-size-list
          v-else
          ref="virtualListRef"
          :data="filteredData"
          :total="filteredData.length"
          :item-size="itemSize"
          :height="virtualListHeight"
        >
          <template #default="{ data, index, style }">
            <div :key="data[index][propsAlias.key]" :style="style">
              <el-checkbox
                :class="ns.be('panel', 'item')"
                :value="data[index][propsAlias.key]"
                :disabled="data[index][propsAlias.disabled]"
                :validate-event="false"
              >
                <option-content :option="optionRender?.(data[index])" />
              </el-checkbox>
            </div>
          </template>
        </el-fixed-size-list>
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

<script lang="ts" setup generic="T extends TransferDataItem = TransferDataItem">
import { computed, reactive, toRefs, useSlots } from 'vue'
import { isEmpty, mutable } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElCheckbox, ElCheckboxGroup } from '@element-plus/components/checkbox'
import { ElInput } from '@element-plus/components/input'
import { FixedSizeList as ElFixedSizeList } from '@element-plus/components/virtual-list'
import { Search } from '@element-plus/icons-vue'
import { transferPanelEmits } from './transfer-panel'
import { useCheck, usePropsAlias } from './composables'

import type { VNode } from 'vue'
import type { TransferDataItem } from './transfer'
import type { TransferPanelProps, TransferPanelState } from './transfer-panel'

defineOptions({
  name: 'ElTransferPanel',
})

const props = withDefaults(defineProps<TransferPanelProps<T>>(), {
  data: () => [],
  format: () => ({}),
  defaultChecked: () => [],
  props: () =>
    mutable({
      label: 'label',
      key: 'key',
      disabled: 'disabled',
    }),
  virtualScroll: false,
  itemSize: 30,
})
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
  virtualListRef,
  isIndeterminate,
  checkboxGroupRef,
  virtualListHeight,
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
