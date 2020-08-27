<script lang='ts'>
import {
  defineComponent,
  h,
  provide,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
  VNode,
} from 'vue'
import { on } from '@element-plus/utils/dom'
import ClickOutside from '@element-plus/directives/click-outside'
import ElButton from '@element-plus/button/src/button.vue'
import ElButtonGroup from '@element-plus/button/src/button-group.vue'
import ELPopper from '@element-plus/popper/src/index.vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdown',
  directives: {
    ClickOutside,
  },
  components: {
    ElButton,
    ElButtonGroup,
    ELPopper,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 250,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    effect: {
      type: String,
      default: 'light',
    },
  },
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit, slots }) {
    const _instance = getCurrentInstance()
    const { ELEMENT } = useDropdown()

    const timeout = ref<Nullable<number>>(null)

    const visible = ref(false)
    watch(
      () => visible.value,
      val => {
        if(val) triggerElmFocus()
        if(!val) triggerElmBlur()
        emit('visible-change', val)
      },
    )

    const focusing = ref(false)
    watch(
      () => focusing.value,
      val => {
        const selfDefine = triggerElm.value
        if (selfDefine) {
          if (val) {
            selfDefine.classList.add('focusing')
          } else {
            selfDefine.classList.remove('focusing')
          }
        }
      },
    )

    const triggerVnode = ref<Nullable<VNode>>(null)
    const triggerElm = computed<Nullable<HTMLButtonElement>>(() =>
      !props.splitButton
        ? triggerVnode.value?.el
        : triggerVnode.value?.el.querySelector('.el-dropdown__caret-button'),
    )

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
      timeout.value = window.setTimeout(() => {
        visible.value = true
      }, props.trigger === 'click' ? 0 : props.showTimeout)
    }

    function hide() {
      if (triggerElm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >=0) {
        resetTabindex(triggerElm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(() => {
        visible.value = false
      }, props.trigger === 'click' ? 0 : props.hideTimeout)
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

    // for dom
    Object.assign(_instance, {
      handleClick,
      hide,
      resetTabindex,
    })

    const dropdownSize = computed(() => props.size || (ELEMENT || {}).size)
    function commandHandler (...args) {
      emit('command', ...args)
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
      if (!props.splitButton) {
        on(triggerElm.value, 'focus', () => {
          focusing.value = true
        })
        on(triggerElm.value, 'blur', () => {
          focusing.value = false
        })
        on(triggerElm.value, 'click', () => {
          focusing.value = false
        })
      }
      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      }
    })

    const handlerMainButtonClick = event => {
      emit('click', event)
      hide()
    }

    triggerVnode.value = !props.splitButton
      ? slots.default?.()[0] // trigger must be a single root element
      : h(ElButtonGroup, {}, {
        default: () => (
          [
            h(ElButton, {
              type: props.type,
              size: dropdownSize.value,
              onClick: handlerMainButtonClick,
            }, {
              default: () => slots.default?.()[0],
            }),
            h(ElButton, {
              type: props.type,
              size: dropdownSize.value,
              class: 'el-dropdown__caret-button',
            }, {
              default: () => h('i', { class: 'el-dropdown__icon el-icon-arrow-down' }),
            }),
          ]
        ),
      })
    slots.default?.().length > 1 && console.warn('trigger must be a single root element')

    const dropdownVnode = h('div', {
      class: 'el-dropdown',
    }, [triggerVnode.value])

    return () => h(ELPopper, {
      ref: 'popper',
      placement: props.placement,
      effect: props.effect,
      value: visible.value,
      manualMode: true,
      popperClass: 'el-dropdown-popper',
      trigger: props.trigger,
    }, {
      default: () => slots.dropdown?.(),
      trigger: () => dropdownVnode,
    })
  },
})
</script>
<style>
.el-dropdown-popper {
  padding: 0px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-dropdown-popper.is-light {
  border: 1px solid #EBEEF5;
}
.el-dropdown-popper.is-light .el-popper__arrow::before {
  border: 1px solid #EBEEF5;
  background: #FFF;
}
.el-dropdown-popper .el-dropdown-menu {
  border: none;
}
.el-dropdown-selfdefine {
  outline: none;
}
</style>
