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
      :props="props"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer" />
    </transfer-panel>
    <div :class="ns.e('buttons')">
      <el-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
        :disabled="rightChecked.length === 0"
        @click="addToLeft"
      >
        <el-icon><arrow-left /></el-icon>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
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
      <slot name="right-footer" />
    </transfer-panel>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  inject,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { formItemContextKey } from '@element-plus/tokens'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { debugWarn } from '@element-plus/utils'
import TransferPanel from './transfer-panel.vue'
import { useComputedData } from './useComputedData'
import {
  LEFT_CHECK_CHANGE_EVENT,
  RIGHT_CHECK_CHANGE_EVENT,
  useCheckedChange,
} from './useCheckedChange'
import { useMove } from './useMove'
import { CHANGE_EVENT } from './transfer'

import type { PropType, VNode } from 'vue'
import type { FormItemContext } from '@element-plus/tokens'
import type { DataItem, Format, Key, Props, TargetOrder } from './transfer'

type TransferType = InstanceType<typeof TransferPanel>

export default defineComponent({
  name: 'ElTransfer',

  components: {
    TransferPanel,
    ElButton,
    ElIcon,
    ArrowLeft,
    ArrowRight,
  },

  props: {
    data: {
      type: Array as PropType<DataItem[]>,
      default: () => [],
    },
    titles: {
      type: Array as PropType<any> as PropType<[string, string]>,
      default: () => [],
    },
    buttonTexts: {
      type: Array as PropType<any> as PropType<[string, string]>,
      default: () => [],
    },
    filterPlaceholder: {
      type: String,
      default: '',
    },
    filterMethod: Function as PropType<
      (query: string, item: DataItem) => boolean
    >,
    leftDefaultChecked: {
      type: Array as PropType<Key[]>,
      default: () => [],
    },
    rightDefaultChecked: {
      type: Array as PropType<Key[]>,
      default: () => [],
    },
    renderContent: Function as PropType<(h, option) => VNode>,
    modelValue: {
      type: Array as PropType<Key[]>,
      default: () => [],
    },
    format: {
      type: Object as PropType<Format>,
      default: () => ({}),
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        label: 'label',
        key: 'key',
        disabled: 'disabled',
      }),
    },
    targetOrder: {
      type: String as PropType<TargetOrder>,
      default: 'original',
      validator: (val: string) => {
        return ['original', 'push', 'unshift'].includes(val)
      },
    },
  },

  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    LEFT_CHECK_CHANGE_EVENT,
    RIGHT_CHECK_CHANGE_EVENT,
  ],

  setup(props, { emit, slots }) {
    const { t } = useLocale()
    const ns = useNamespace('transfer')
    const elFormItem = inject(formItemContextKey, {} as FormItemContext)

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

    const leftPanel = ref<TransferType>()
    const rightPanel = ref<TransferType>()

    const clearQuery = (which: 'left' | 'right') => {
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
        elFormItem.validate?.('change').catch((err) => debugWarn(err))
      }
    )

    const optionRender = computed(() => (option) => {
      if (props.renderContent) return props.renderContent(h, option)

      if (slots.default) return slots.default({ option })

      return h('span', option[props.props.label] || option[props.props.key])
    })

    return {
      ns,
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
      leftPanel,
      rightPanel,

      optionRender,
    }
  },
})
</script>
