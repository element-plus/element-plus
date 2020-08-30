<template>
  <div class="el-transfer">
    <transfer-panel
      ref="leftPanel"
      :data="sourceData"
      :render-content="renderContent"
      :placeholder="panelFilterPlaceholder"
      :title="leftPanelTitle"
      :filterable="filterable"
      :format="format"
      :filter-method="filterMethod"
      :default-checked="leftDefaultChecked"
      :props="props"
      @checked-change="onSourceCheckedChange"
    >
      <template #default>
        <slot name="left-footer"></slot>
      </template>
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
      :render-content="renderContent"
      :placeholder="panelFilterPlaceholder"
      :filterable="filterable"
      :format="format"
      :filter-method="filterMethod"
      :title="rightPanelTitle"
      :default-checked="rightDefaultChecked"
      :props="props"
      @checked-change="onTargetCheckedChange"
    >
      <template #default>
        <slot name="right-footer"></slot>
      </template>
    </transfer-panel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive, ref, toRefs, VNode, watch } from 'vue'
import { t } from '@element-plus/locale'
import ElButton from '@element-plus/button/src/button.vue'
import TransferPanel from './transfer-panel.vue'
import { useComputedData } from './useComputedData'
import { useCheckedChange } from './useCheckedChange'
import { useMove } from './useMove'
import { Key } from './transfer'

import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'

export const CHANGE_EVENT = 'change'
export const LEFT_CHECK_CHANGE_EVENT = 'left-check-change'
export const RIGHT_CHECK_CHANGE_EVENT = 'right-check-change'

export default defineComponent({
  name: 'ElTransfer',

  components: {
    TransferPanel,
    ElButton,
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    titles: {
      type: Array,
      default() {
        return []
      },
    },
    buttonTexts: {
      type: Array,
      default() {
        return []
      },
    },
    filterPlaceholder: {
      type: String,
      default: '',
    },
    filterMethod: {
      type: Function as PropType<(query: string, item: Record<string, any>) => boolean>,
    },
    leftDefaultChecked: {
      type: Array,
      default() {
        return []
      },
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return []
      },
    },
    renderContent: {
      type: Function as PropType<(h, option) => VNode>,
    },
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    format: {
      type: Object,
      default() {
        return {}
      },
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled',
        }
      },
    },
    targetOrder: {
      type: String,
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
    const initData = reactive({
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
    } = useCheckedChange(initData, emit)

    const { addToLeft,
      addToRight,
    } = useMove(props, initData, propsKey, emit)

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

    watch(() => props.modelValue, (val: Key[]) => emit(UPDATE_MODEL_EVENT, val))

    provide('defaultScopedSlots', computed(() => slots.default))

    const {
      leftChecked,
      rightChecked,
    } = toRefs(initData)

    return {
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,

      leftChecked,
      rightChecked,

      hasButtonTexts,
      leftPanelTitle,
      rightPanelTitle,
      panelFilterPlaceholder,
      clearQuery,
    }
  },
})
</script>
