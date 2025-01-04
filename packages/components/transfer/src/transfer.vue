<template>
  <div :class="ns.b()">
    <transfer-panel
      ref="leftPanel"
      :data="sourceData"
      :option-render="optionRender"
      :placeholder="panelFilterPlaceholder"
      :title="leftPanelTitle"
      :filterable="filterable"
      :format="format"
      :filter-method="filterMethod"
      :default-checked="leftDefaultChecked"
      :props="props.props"
      @checked-change="onSourceCheckedChange"
    >
      <template #empty>
        <slot name="left-empty" />
      </template>
      <slot name="left-footer" />
    </transfer-panel>
    <div :class="ns.e('buttons')">
      <el-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
        :disabled="isEmpty(checkedState.rightChecked)"
        @click="addToLeft"
      >
        <el-icon><arrow-left /></el-icon>
        <span v-if="!isUndefined(buttonTexts[0])">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
        :disabled="isEmpty(checkedState.leftChecked)"
        @click="addToRight"
      >
        <span v-if="!isUndefined(buttonTexts[1])">{{ buttonTexts[1] }}</span>
        <el-icon><arrow-right /></el-icon>
      </el-button>
    </div>
    <transfer-panel
      ref="rightPanel"
      :data="targetData"
      :option-render="optionRender"
      :placeholder="panelFilterPlaceholder"
      :filterable="filterable"
      :format="format"
      :filter-method="filterMethod"
      :title="rightPanelTitle"
      :default-checked="rightDefaultChecked"
      :props="props.props"
      @checked-change="onTargetCheckedChange"
    >
      <template #empty>
        <slot name="right-empty" />
      </template>
      <slot name="right-footer" />
    </transfer-panel>
  </div>
</template>

<script lang="ts" setup>
import { Comment, computed, h, reactive, ref, useSlots, watch } from 'vue'
import { debugWarn, isEmpty, isUndefined } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElButton } from '@element-plus/components/button'
import { ElIcon } from '@element-plus/components/icon'
import { useFormItem } from '@element-plus/components/form'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { transferEmits, transferProps } from './transfer'
import {
  useCheckedChange,
  useComputedData,
  useMove,
  usePropsAlias,
} from './composables'
import TransferPanel from './transfer-panel.vue'

import type {
  TransferCheckedState,
  TransferDataItem,
  TransferDirection,
} from './transfer'
import type { TransferPanelInstance } from './transfer-panel'
import type { Ref } from 'vue'

defineOptions({
  name: 'ElTransfer',
})

const props = defineProps(transferProps)
const emit = defineEmits(transferEmits)
const slots = useSlots()

const { t } = useLocale()
const ns = useNamespace('transfer')
const { formItem } = useFormItem()

const checkedState = reactive<TransferCheckedState>({
  leftChecked: [],
  rightChecked: [],
})

const propsAlias = usePropsAlias(props)

const { sourceData, targetData } = useComputedData(props)

const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange(
  checkedState,
  emit
)

const { addToLeft, addToRight } = useMove(props, checkedState, emit)

const leftPanel = ref<TransferPanelInstance>()
const rightPanel = ref<TransferPanelInstance>()

const clearQuery = (which: TransferDirection) => {
  switch (which) {
    case 'left':
      leftPanel.value!.query = ''
      break
    case 'right':
      rightPanel.value!.query = ''
      break
  }
}

const hasButtonTexts = computed(() => props.buttonTexts.length === 2)

const leftPanelTitle = computed(
  () => props.titles[0] || t('el.transfer.titles.0')
)

const rightPanelTitle = computed(
  () => props.titles[1] || t('el.transfer.titles.1')
)

const panelFilterPlaceholder = computed(
  () => props.filterPlaceholder || t('el.transfer.filterPlaceholder')
)

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

const optionRender = computed(() => (option: TransferDataItem) => {
  if (props.renderContent) return props.renderContent(h, option)

  const defaultSlotVNodes = (slots.default?.({ option }) || []).filter(
    (node) => node.type !== Comment
  )
  if (defaultSlotVNodes.length) {
    return defaultSlotVNodes
  }

  return h(
    'span',
    option[propsAlias.value.label] || option[propsAlias.value.key]
  )
})

defineExpose<{
  clearQuery: (which: TransferDirection) => void
  leftPanel: Ref<TransferPanelInstance | undefined>
  rightPanel: Ref<TransferPanelInstance | undefined>
}>({
  /** @description clear the filter keyword of a certain panel */
  clearQuery,
  /** @description left panel ref */
  leftPanel,
  /** @description right panel ref */
  rightPanel,
})
</script>
