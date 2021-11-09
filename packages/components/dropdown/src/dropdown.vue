<template>
  <div
    class="el-dropdown"
    :class="{ 'is-disabled': disabled }"
    :aria-disabled="disabled"
  >
    <el-popper
      ref="triggerVnode"
      v-model:visible="visible"
      :placement="placement"
      :fallback-placements="['bottom', 'top', 'right', 'left']"
      :effect="effect"
      pure
      :manual-mode="true"
      :trigger="[trigger]"
      popper-class="el-dropdown__popper"
      append-to-body
      transition="el-zoom-in-top"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :disabled="disabled"
    >
      <template #default>
        <el-scrollbar
          ref="scrollbar"
          tag="ul"
          :wrap-style="wrapStyle"
          view-class="el-dropdown__list"
        >
          <slot name="dropdown"></slot>
        </el-scrollbar>
      </template>
      <template #trigger>
        <div :class="[dropdownSize ? 'el-dropdown--' + dropdownSize : '']">
          <slot v-if="!splitButton" name="default"></slot>
          <template v-else>
            <el-button-group>
              <el-button
                :size="dropdownSize"
                :type="type"
                :disabled="disabled"
                @click="handlerMainButtonClick"
              >
                <slot name="default"></slot>
              </el-button>
              <el-button
                :size="dropdownSize"
                :type="type"
                :disabled="disabled"
                class="el-dropdown__caret-button"
              >
                <el-icon class="el-dropdown__icon"><arrow-down /></el-icon>
              </el-button>
            </el-button-group>
          </template>
        </div>
      </template>
    </el-popper>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  provide,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
} from 'vue'
import ElButton from '@element-plus/components/button'
import ElPopper from '@element-plus/components/popper'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import { on, addClass, removeClass } from '@element-plus/utils/dom'
import { addUnit } from '@element-plus/utils/util'
import { ArrowDown } from '@element-plus/icons'
import { useDropdown } from './useDropdown'
import { dropdownProps } from './dropdown'
import type { ComponentPublicInstance } from 'vue'

type Nullable<T> = null | T
const { ButtonGroup: ElButtonGroup } = ElButton

export default defineComponent({
  name: 'ElDropdown',
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElPopper,
    ElIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const { ELEMENT } = useDropdown()

    const timeout = ref<Nullable<number>>(null)

    const visible = ref(false)
    const scrollbar = ref(null)
    const wrapStyle = computed(() => `max-height: ${addUnit(props.maxHeight)}`)

    watch(
      () => visible.value,
      (val) => {
        if (val) triggerElmFocus()
        if (!val) triggerElmBlur()
        emit('visible-change', val)
      }
    )

    const focusing = ref(false)
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
      () => props.disabled,
      () => {
        setDisabled()
      }
    )

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
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        ['click', 'contextmenu'].includes(props.trigger) ? 0 : props.showTimeout
      )
    }

    function hide() {
      if (triggerElm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerElm.value)
      }
      if (timeout.value) {
        clearTimeout(timeout.value)
      }
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        ['click', 'contextmenu'].includes(props.trigger) ? 0 : props.hideTimeout
      )
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

    const dropdownSize = computed(() => props.size || ELEMENT.size)

    function commandHandler(...args) {
      emit('command', ...args)
    }

    function setDisabled() {
      const triggerElement = triggerElm.value
      if (triggerElement) {
        triggerElement.disabled = props.disabled
      }
    }

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

    onMounted(() => {
      const triggerElement = triggerElm.value!
      if (!props.splitButton) {
        on(triggerElement, 'focus', () => {
          focusing.value = !props.disabled
        })
        on(triggerElement, 'blur', () => {
          focusing.value = false
        })
        on(triggerElement, 'click', () => {
          focusing.value = false
        })
      }
      if (props.trigger === 'hover') {
        on(triggerElement, 'mouseenter', show)
        on(triggerElement, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElement, 'click', handleClick)
      } else if (props.trigger === 'contextmenu') {
        on(triggerElement, 'contextmenu', (e) => {
          e.preventDefault()
          handleClick()
        })
      }
      setDisabled()

      Object.assign(_instance, {
        handleClick,
        hide,
        resetTabindex,
      })
    })

    const handlerMainButtonClick = (event) => {
      emit('click', event)
      hide()
    }

    return {
      visible,
      scrollbar,
      wrapStyle,
      dropdownSize,
      handlerMainButtonClick,
      triggerVnode,
    }
  },
})
</script>
