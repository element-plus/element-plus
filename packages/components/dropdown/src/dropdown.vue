<template>
  <div class="el-dropdown">
    <el-popper
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
      :triggering-element="triggeringElementRef"
      :show-after="showTimeout"
      :stop-popper-mouse-event="false"
      append-to-body
      pure
      transition="el-zoom-in-top"
    >
      <template #default>
        <el-scrollbar
          ref="scrollbar"
          tag="ul"
          :wrap-style="wrapStyle"
          view-class="el-dropdown__list"
        >
          <el-focus-trap trapped @mount-on-focus="onMountOnFocus">
            <el-roving-focus-group
              as-child
              orientation="horizontal"
              :loop="loop"
              :current-tab-id="currentTabId"
              @current-tab-change="(val) => (currentTabId = val)"
              @entry-focus="handleEntryFocus"
            >
              <slot name="dropdown"></slot>
            </el-roving-focus-group>
          </el-focus-trap>
        </el-scrollbar>
      </template>
      <template v-if="!splitButton" #trigger>
        <div :class="[dropdownSize ? 'el-dropdown--' + dropdownSize : '']">
          <slot name="default"></slot>
        </div>
      </template>
    </el-popper>
    <template v-if="splitButton">
      <el-button-group>
        <el-button
          ref="referenceElementRef"
          :size="dropdownSize"
          :type="type"
          @click="handlerMainButtonClick"
        >
          <slot name="default"></slot>
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
  onMounted,
  onBeforeMount,
  watch,
  unref as undef,
} from 'vue'
import ElButton from '@element-plus/components/button'
import ElPopper, { Effect } from '@element-plus/components/popper'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import ElFocusTrap from '@element-plus/components/focus-trap'
import ElRovingFocusGroup from '@element-plus/components/roving-focus-group'
import { on, addClass, removeClass } from '@element-plus/utils/dom'
import { addUnit } from '@element-plus/utils/util'
import { ArrowDown } from '@element-plus/icons-vue'
import { useSize } from '@element-plus/hooks'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import { useDropdown } from './useDropdown'

import type { Placement } from '@element-plus/components/popper'
import type { PropType, ComponentPublicInstance, CSSProperties } from 'vue'
import type { TriggerType } from '@element-plus/hooks/use-popper/use-target-events'
import type { ButtonType } from '@element-plus/components/button/src/types'
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
    ElPopper,
    ElRovingFocusGroup,
    ElIcon,
    ArrowDown,
  },
  props: {
    trigger: {
      type: String as PropType<TriggerType | 'contextmenu'>,
      default: 'hover',
    },
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
      type: String as PropType<Effect>,
      default: Effect.LIGHT,
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
    // const { ELEMENT } = useDropdown()

    const itemMap: ElDropdownInjectionContext['itemMap'] = new Map()
    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref()
    const contentRef = ref<HTMLElement>()
    const focusing = ref(false)
    const visible = ref(false)
    const scrollbar = ref(null)
    const currentTabId = ref(null)

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))

    const triggerVnode = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerElm = computed<Nullable<HTMLButtonElement>>(() => {
      const _: any = (triggerVnode.value?.$refs.triggerRef as HTMLElement)
        ?.children[0]
      return !props.splitButton ? _ : _?.children?.[1]
    })

    function handleClick() {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    function show() {
      popperRef.value?.delayShow?.()
    }

    function hide() {
      popperRef.value?.delayHide?.()
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerElm.value)
      }
    }

    function removeTabindex() {
      triggerElm.value?.setAttribute('tabindex', '-1')
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    function triggerElmFocus() {
      triggerElm.value?.focus?.()
    }

    function triggerElmBlur() {
      triggerElm.value?.blur?.()
    }

    const dropdownSize = useSize()

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onItemEnter(e: PointerEvent) {
      // NOOP for now
    }

    function onItemLeave(e: PointerEvent) {
      const contentEl = undef(contentRef)

      contentEl?.focus()
      currentTabId.value = null
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) e.preventDefault()
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      onItemEnter,
      onItemLeave,
    })

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerElm,
    })

    const onMountOnFocus = (e: Event) => {
      e.preventDefault()
      contentRef.value?.focus?.()
    }

    onMounted(() => {
      // if (!props.splitButton) {
      //   on(triggerElm.value, 'focus', () => {
      //     focusing.value = true
      //   })
      //   on(triggerElm.value, 'blur', () => {
      //     focusing.value = false
      //   })
      //   on(triggerElm.value, 'click', () => {
      //     focusing.value = false
      //   })
      // }
      // if (props.trigger === 'hover') {
      //   on(triggerElm.value, 'mouseenter', show)
      //   on(triggerElm.value, 'mouseleave', hide)
      // } else if (props.trigger === 'click') {
      //   on(triggerElm.value, 'click', handleClick)
      // } else if (props.trigger === 'contextmenu') {
      //   on(triggerElm.value, 'contextmenu', (e) => {
      //     e.preventDefault()
      //     handleClick()
      //   })
      // }
      // Object.assign(_instance, {
      //   handleClick,
      //   hide,
      //   resetTabindex,
      // })
    })

    // onBeforeMount(() => {
    //   itemMap.clear()
    // })

    const onVisibleUpdated = (val: boolean) => {
      if (val) {
        // add document handler for navigating
      } else {
        // remove the handler after popup disappears
      }
    }

    watch(
      () => focusing.value,
      (val) => {
        const selfDefine = triggerElm.value
        if (selfDefine) {
          if (val) {
            addClass(selfDefine, 'focusing')
          } else {
            removeClass(selfDefine, 'focusing')
          }
        }
      }
    )

    watch(
      () => visible.value,
      (val) => {
        if (val) triggerElmFocus()
        if (!val) triggerElmBlur()
        emit('visible-change', val)
      }
    )

    const handlerMainButtonClick = (event) => {
      emit('click', event)
      hide()
    }

    return {
      visible,
      scrollbar,
      wrapStyle,
      dropdownSize,
      currentTabId,
      handlerMainButtonClick,
      handleEntryFocus,
      onVisibleUpdated,
      onMountOnFocus,
      popperRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
