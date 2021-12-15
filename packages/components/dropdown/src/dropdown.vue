<template>
  <div class="el-dropdown">
    <el-tooltip
      ref="popperRef"
      :effect="effect"
      :fallback-placements="['bottom', 'top', 'right', 'left']"
      :gpu-acceleration="false"
      :hide-after="hideTimeout"
      :manual-mode="true"
      :placement="placement"
      :popper-class="`el-dropdown__popper ${popperClass}`"
      :reference-element="referenceElementRef?.$el"
      :trigger="trigger"
      :show-after="showTimeout"
      :stop-popper-mouse-event="false"
      :virtual-ref="triggeringElementRef"
      :virtual-triggering="splitButton"
      @show="$emit('visible-change', true)"
      @hide="$emit('visible-change', false)"
      append-to-body
      pure
      transition="el-zoom-in-top"
    >
      <template #content>
        <el-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          tag="ul"
          view-class="el-dropdown__list"
        >
          <el-focus-trap trapped @mount-on-focus="onMountOnFocus">
            <el-roving-focus-group
              :loop="loop"
              :current-tab-id="currentTabId"
              orientation="horizontal"
              @current-tab-id-change="handleCurrentTabIdChange"
              @entry-focus="handleEntryFocus"
            >
              <el-dropdown-collection>
                <slot name="dropdown"></slot>
              </el-dropdown-collection>
            </el-roving-focus-group>
          </el-focus-trap>
        </el-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <div :class="[dropdownSize ? 'el-dropdown--' + dropdownSize : '']">
          <slot name="default" />
        </div>
      </template>
    </el-tooltip>
    <template v-if="splitButton">
      <el-button-group>
        <el-button
          ref="referenceElementRef"
          :size="dropdownSize"
          :type="type"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </el-button>
        <el-button
          ref="triggeringElementRef"
          :size="dropdownSize"
          :type="type"
          class="el-dropdown__caret-button"
        >
          <el-icon class="el-dropdown__icon"><arrow-down /></el-icon>
        </el-button>
      </el-button-group>
    </template>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  toRef,
  unref,
} from 'vue'
import ElButton from '@element-plus/components/button'
import ElTooltip, {
  useTooltipTriggerProps,
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import ElFocusTrap from '@element-plus/components/focus-trap'
import ElRovingFocusGroup from '@element-plus/components/roving-focus-group'
import { on, addClass, removeClass } from '@element-plus/utils/dom'
import { addUnit } from '@element-plus/utils/util'
import { ArrowDown } from '@element-plus/icons-vue'
import { useSize } from '@element-plus/hooks'
import { ElCollection as ElDropdownCollection } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import { useDropdown } from './useDropdown'

import type { Placement } from '@element-plus/components/popper'
import type { PropType, ComponentPublicInstance, CSSProperties } from 'vue'
import type { ButtonType } from '@element-plus/components/button'
import type { ElDropdownInjectionContext } from './tokens'

type Nullable<T> = null | T
const { ButtonGroup: ElButtonGroup } = ElButton

export default defineComponent({
  name: 'ElDropdown',
  components: {
    ElButton,
    ElFocusTrap,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection,
    ElTooltip,
    ElRovingFocusGroup,
    ElIcon,
    ArrowDown,
  },
  props: {
    trigger: useTooltipTriggerProps.trigger,
    type: String as PropType<ButtonType>,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: [Number, String],
      default: 0,
    },
    effect: {
      ...useTooltipContentProps.effect,
      default: 'light',
    },
    maxHeight: {
      type: [Number, String],
      default: '',
    },
    popperClass: {
      type: String,
      default: '',
    },
  },
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()

    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref<InstanceType<typeof ElTooltip> | null>(null)
    const contentRef = ref<HTMLElement | null>(null)
    const visible = ref(false)
    const scrollbar = ref(null)
    const currentTabId = ref<string | null>(null)
    const isUsingKeyboard = ref(false)

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))

    function handleClick() {
      popperRef.value?.onClose()
    }

    const dropdownSize = useSize()

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentEl = unref(contentRef)

      contentEl?.focus()
      currentTabId.value = null
    }

    function handleCurrentTabIdChange(id: string) {
      currentTabId.value = id
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
    })

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      trigger: toRef(props, 'trigger'),
      hideOnClick: toRef(props, 'hideOnClick'),
    })

    const onMountOnFocus = (e: Event) => {
      e.preventDefault()
      contentRef.value?.focus?.({
        preventScroll: true,
      })
    }

    const handlerMainButtonClick = (event: PointerEvent) => {
      emit('click', event)
    }

    return {
      visible,
      scrollbar,
      wrapStyle,
      dropdownSize,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      onMountOnFocus,
      popperRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
