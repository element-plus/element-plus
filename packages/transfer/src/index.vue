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
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        :disabled="leftChecked.length === 0"
        @click="addToRight"
      >
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
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
  computed, defineComponent, inject, h,
  reactive, ref, toRefs, watch,
} from 'vue'
import { useLocaleInject } from '@element-plus/hooks'
import ElButton from '@element-plus/button'
import TransferPanel from './transfer-panel.vue'
import { useComputedData } from './useComputedData'
import { useCheckedChange } from './useCheckedChange'
import { useMove } from './useMove'

import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { elFormItemKey } from '@element-plus/form'

import { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT } from './useCheckedChange'

import type { PropType, VNode } from 'vue'
import type { ElFormItemContext } from '@element-plus/form'
import type {
  DataItem, Format, Key,
  Props, TargetOrder,
} from './transfer'

export const CHANGE_EVENT = 'change'

export default defineComponent({
  name: 'ElTransfer',

  components: {
    TransferPanel,
    ElButton,
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
    filterMethod: Function as PropType<(query: string, item: DataItem) => boolean>,
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
    const { t } = useLocaleInject()
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const checkedState = reactive({
      leftChecked: [],
      rightChecked: [],
    })

    const {
      propsKey,
      sourceData,
      targetData,
    } = useComputedData(props)

    const {
      onSourceCheckedChange,
      onTargetCheckedChange,
    } = useCheckedChange(checkedState, emit)

    const {
      addToLeft,
      addToRight,
    } = useMove(props, checkedState, propsKey, emit)

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

    const leftPanelTitle = computed(() => props.titles[0] || t('el.transfer.titles.0'))

    const rightPanelTitle = computed(() => props.titles[1] || t('el.transfer.titles.1'))

    const panelFilterPlaceholder = computed(() => props.filterPlaceholder || t('el.transfer.filterPlaceholder'))

    watch(() => props.modelValue, val => {
      elFormItem.formItemMitt?.emit('el.form.change', val)
    })

    const optionRender = computed(() => option => {
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
