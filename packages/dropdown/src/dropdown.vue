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
} from 'vue'
import ClickOutside from '@element-plus/directives/click-outside'
import ElButton from '@element-plus/button/src/button.vue'
import ElButtonGroup from '@element-plus/button/src/button-group.vue'
import ELPopper from '@element-plus/popper/src/index.vue'
import { useDropdown, useDropdownDomEvent } from './useDropdown'

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
      default: 'bottom-end',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
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

    const triggerElm = computed<Nullable<HTMLElement & { disabled: boolean; }>>(() =>
      !props.splitButton
        ? _instance.subTree.el.nextElementSibling
        : dropdownVnode.el.querySelector('.el-icon-arrow-down'),
    )
    const menuItemsArray = ref<Nullable<Array<HTMLElement>>>(null)

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
      triggerElmFocus()
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
      menuItemsArray.value?.forEach(item => {
        item.setAttribute('tabindex', '-1')
      })
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    function triggerElmFocus() {
      triggerElm.value?.focus?.()
    }

    // for dom
    Object.assign(_instance, {
      handleClick,
      hide,
      resetTabindex,
      removeTabindex,
      visible,
    })

    const dropdownSize = computed(() => props.size || (ELEMENT || {}).size)
    function commandHandler (...args) {
      emit('command', ...args)
    }
    function initDom(instance) {
      useDropdownDomEvent(instance, triggerElm.value, _instance)
    }

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      initDom,
    })

    onMounted(() => {
      if (!props.splitButton) {
        triggerElm.value?.addEventListener('focus', () => {
          focusing.value = true
        })
        triggerElm.value?.addEventListener('blur', () => {
          focusing.value = false
        })
        triggerElm.value?.addEventListener('click', () => {
          focusing.value = false
        })
      }
      if (props.trigger === 'hover') {
        triggerElm.value.addEventListener('mouseenter', show)
        triggerElm.value.addEventListener('mouseleave', hide)
      } else if (props.trigger === 'click') {
        triggerElm.value.addEventListener('click', handleClick)
      }
    })

    const handlerMainButtonClick = event => {
      emit('click', event)
      hide()
    }

    const triggerVnode = !props.splitButton
      ? slots.default?.()
      : h(ElButtonGroup, {}, [
        h(ElButton, {
          type: props.type,
          size: dropdownSize.value,
          onClick: handlerMainButtonClick,
        }, slots.default?.()),
        h(ElButton, {
          type: props.type,
          size: dropdownSize.value,
          class: 'el-dropdown__caret-button',
        }, h('i', { class: 'el-dropdown__icon el-icon-arrow-down' })),
      ])

    const dropdownVnode = h('div', {
      class: 'el-dropdown',
    }, [triggerVnode])

    return () => h(ELPopper, {
      placement: 'bottom',
      effect: 'light',
      value: visible.value,
      manualMode: true,
      popperClass: 'el-dropdown-popper',
      pure: false,
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
