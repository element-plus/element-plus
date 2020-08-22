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
// import { generateId } from '@element-plus/utils/util'
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
  emits: ['visible-change', 'click'],
  setup(props, { emit, slots }) {
    const { ELEMENT } = useDropdown()
    const _instance = getCurrentInstance()

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
        const selfDefine = _instance.subTree.el.querySelector('.el-dropdown-selfdefine') as HTMLElement
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
    // const menuItems = ref(null)
    const menuItemsArray = ref<Nullable<Array<HTMLElement>>>(null)
    // const dropdownElm = ref<Nullable<HTMLElement>>(null)
    // const listId = ref(`dropdown-menu-${generateId()}`)

    function handleClick() {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    // function handleTriggerKeyDown(ev: KeyboardEvent) {
    //   const keyCode = ev.keyCode
    //   if ([38, 40].includes(keyCode)) { // up/down
    //     removeTabindex()
    //     resetTabindex(menuItems.value[0])
    //     menuItems.value[0].focus()
    //     ev.preventDefault()
    //     ev.stopPropagation()
    //   } else if (keyCode === 13) { // space enter
    //     handleClick()
    //   } else if ([9, 27].includes(keyCode)) { // tab || esc
    //     hide()
    //   }
    // }

    // function handleItemKeyDown(ev) {
    //   const keyCode = ev.keyCode
    //   const target = ev.target
    //   const currentIndex = menuItemsArray.value.indexOf(target)
    //   const max = menuItemsArray.value.length - 1
    //   let nextIndex
    //   if ([38, 40].includes(keyCode)) { // up/down
    //     if (keyCode === 38) { // up
    //       nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
    //     } else { // down
    //       nextIndex = currentIndex < max ? currentIndex + 1 : max
    //     }
    //     removeTabindex()
    //     resetTabindex(menuItems.value[nextIndex])
    //     menuItems.value[nextIndex].focus()
    //     ev.preventDefault()
    //     ev.stopPropagation()
    //   } else if (keyCode === 13) { // enter
    //     triggerElmFocus()
    //     target.click()
    //     if (props.hideOnClick) { // click
    //       visible.value = false
    //     }
    //   } else if ([9, 27].includes(keyCode)) { // tab // esc
    //     hide()
    //     triggerElmFocus()
    //   }
    // }

    // function initAria() {
    //   this.dropdownElm.setAttribute('id', this.listId);
    //   this.triggerElm.setAttribute('aria-haspopup', 'list');
    //   this.triggerElm.setAttribute('aria-controls', this.listId);
    //   if (!this.splitButton) { // 自定义
    //     this.triggerElm.setAttribute('role', 'button');
    //     this.triggerElm.setAttribute('tabindex', this.tabindex);
    //     this.triggerElm.setAttribute('class', (this.triggerElm.getAttribute('class') || '') + ' el-dropdown-selfdefine'); // 控制
    //   }
    // }
    // function initEvent() {
    //   let { trigger, show, hide, handleClick, splitButton, handleTriggerKeyDown, handleItemKeyDown } = this
    //   this.triggerElm = splitButton
    //     ? this.$refs.trigger.$el
    //     : this.$slots.default[0].elm
    //   let dropdownElm = this.dropdownElm
    //   this.triggerElm.addEventListener('keydown', handleTriggerKeyDown) // triggerElm keydown
    //   dropdownElm.addEventListener('keydown', handleItemKeyDown, true) // item keydown
    //   // 控制自定义元素的样式
    //   if (!splitButton) {
    //     this.triggerElm.addEventListener('focus', () => {
    //       this.focusing = true
    //     })
    //     this.triggerElm.addEventListener('blur', () => {
    //       this.focusing = false
    //     })
    //     this.triggerElm.addEventListener('click', () => {
    //       this.focusing = false
    //     })
    //   }
    //   if (trigger === 'hover') {
    //     this.triggerElm.addEventListener('mouseenter', show)
    //     this.triggerElm.addEventListener('mouseleave', hide)
    //     dropdownElm.addEventListener('mouseenter', show)
    //     dropdownElm.addEventListener('mouseleave', hide)
    //   } else if (trigger === 'click') {
    //     this.triggerElm.addEventListener('click', handleClick)
    //   }
    // }
    // function initDomOperation() {
    //   this.dropdownElm = this.popperElm
    //   this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']")
    //   this.menuItemsArray = [].slice.call(this.menuItems)
    //   this.initEvent()
    //   this.initAria()
    // }

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
      menuItemsArray.value?.forEach(item => {
        item.setAttribute('tabindex', '-1')
      })
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    // function triggerElmFocus() {
    //   triggerElm.value?.focus?.()
    // }

    const dropdownSize = computed(() => props.size || (ELEMENT || {}).size)

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      show,
      hide,
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

      console.log(_instance.subTree)
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
    }, {
      default: () => slots.dropdown?.(),
      trigger: () => dropdownVnode,
    })
  },
})
</script>
<style scoped>
</style>
