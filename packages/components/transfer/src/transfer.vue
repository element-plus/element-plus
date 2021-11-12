<template>
  <div class="el-transfer">
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
      :props="props"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        :disabled="rightChecked.length === 0"
        @click="addToLeft"
      >
        <el-icon><arrow-left /></el-icon>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        :disabled="leftChecked.length === 0"
        @click="addToRight"
      >
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
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
      :props="props"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
    </transfer-panel>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  h,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import { elFormItemKey } from '@element-plus/tokens'
import { useLocaleInject } from '@element-plus/hooks'
import { ArrowLeft, ArrowRight } from '@element-plus/icons'
import TransferPanel from './transfer-panel.vue'
import { useComputedData } from './useComputedData'
import { useCheckedChange } from './useCheckedChange'
import { useMove } from './useMove'

import { transferProps, transferEmits } from './transfer'
import type { ElFormItemContext } from '@element-plus/tokens'

export default defineComponent({
  name: 'ElTransfer',

  components: {
    TransferPanel,
    ElButton,
    ElIcon,
    ArrowLeft,
    ArrowRight,
  },

  props: transferProps,
  emits: transferEmits,

  setup(props, { emit, slots }) {
    const { t } = useLocaleInject()
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const checkedState = reactive({
      leftChecked: [],
      rightChecked: [],
    })

    const { propsKey, sourceData, targetData } = useComputedData(props)

    const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange(
      checkedState,
      emit
    )

    const { addToLeft, addToRight } = useMove(
      props,
      checkedState,
      propsKey,
      emit
    )

    const leftPanel = ref(null)
    const rightPanel = ref(null)

    const clearQuery = (which: 'left' | 'right') => {
      if (which === 'left') {
        leftPanel.value.query = ''
      } else if (which === 'right') {
        rightPanel.value.query = ''
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
        elFormItem.validate?.('change')
      }
    )

    const optionRender = computed(() => (option) => {
      if (props.renderContent) return props.renderContent(h, option)

      if (slots.default) return slots.default({ option })

      return h('span', option[props.props.label] || option[props.props.key])
    })

    return {
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,

      ...toRefs(checkedState),

      hasButtonTexts,
      leftPanelTitle,
      rightPanelTitle,
      panelFilterPlaceholder,
      clearQuery,

      optionRender,
    }
  },
})
</script>
