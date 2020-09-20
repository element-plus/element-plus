import { defineComponent, PropType, ref, computed, watch, nextTick } from 'vue'
import usePopup from './popup'
import Utils from '@element-plus/utils/aria'
import { IDrawerDirection, IDrawerProps } from './drawer'

const template = `
<transition
  name="el-drawer-fade"
  @after-enter="afterEnter"
  @after-leave="afterLeave"
>
  <div
    v-show="modelValue"
    ref="root"
    class="el-drawer__wrapper"
    tabindex="-1"
  >
    <div
      class="el-drawer__container"
      :class="modelValue && 'el-drawer__open'"
      tabindex="-1"
      role="document"
      @click.self="handleWrapperClick"
    >
      <div
        ref="drawer"
        aria-modal="true"
        aria-labelledby="el-drawer__title"
        :aria-label="title"
        class="el-drawer"
        :class="[direction, customClass]"
        :style="isHorizontal ? 'width: ' + size : 'height: ' + size"
        role="dialog"
        tabindex="-1"
      >
        <header
          v-if="withHeader"
          id="el-drawer__title"
          class="el-drawer__header"
        >
          <slot name="title">
            <span role="heading" tabindex="0" :title="title">{{
              title
            }}</span>
          </slot>
          <button
            v-if="showClose"
            :aria-label="'close ' + (title || 'drawer')"
            class="el-drawer__close-btn"
            type="button"
            @click="closeDrawer"
          >
            <i class="el-drawer__close el-icon el-icon-close"></i>
          </button>
        </header>
        <section v-if="popupData.rendered" class="el-drawer__body">
          <slot></slot>
        </section>
      </div>
    </div>
  </div>
</transition>`

export default defineComponent({
  name: 'ElDrawer',
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function as PropType<(any) => void>,
      default: null,
    },
    customClass: {
      type: String,
      default: '',
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String as PropType<IDrawerDirection>,
      default: 'rtl',
      validator(val: IDrawerDirection) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      },
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: '30%',
    },
    title: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
    },
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['open', 'opened', 'close', 'closed', 'update:modelValue'],

  setup(props: IDrawerProps, ctx) {
    const drawer = ref<HTMLElement>(null)
    const root = ref<HTMLElement>(null)
    const prevActiveElement = ref<HTMLElement>(null)
    const closed = ref(false)
    const isHorizontal = computed(() => props.direction === 'rtl' || props.direction === 'ltr')

    const { popupData, open } = usePopup({
      props,
      $el: root,
      vVm: { handleClose, closeOnClickModal: props.closeOnClickModal },
    })

    function afterEnter() {
      ctx.emit('opened')
    }

    function afterLeave() {
      ctx.emit('closed')
    }

    function hide(cancel = true) {
      if (cancel !== false) {
        ctx.emit('update:modelValue', false)
        ctx.emit('close')
        if (props.destroyOnClose === true) {
          popupData.rendered = false
        }
        closed.value = true
      }
    }

    function handleWrapperClick() {
      if (props.wrapperClosable) {
        closeDrawer()
      }
    }

    function closeDrawer() {
      if (typeof props.beforeClose === 'function') {
        props.beforeClose(hide)
      } else {
        hide()
      }
    }

    function handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the drawer.
      // This method also calls `beforeClose` if there was one.
      closeDrawer()
    }

    watch(
      () => props.modelValue,
      val => {
        if (val) {
          closed.value = false
          ctx.emit('open')
          prevActiveElement.value = document.activeElement as HTMLElement
          nextTick(() => {
            Utils.focusFirstDescendant(drawer.value)
          })
        } else {
          if (!closed.value) ctx.emit('close')
          nextTick(() => {
            if (prevActiveElement.value) {
              prevActiveElement.value.focus()
            }
          })
        }
      },
    )

    return {
      root,
      drawer,
      closed,
      afterEnter,
      afterLeave,
      handleWrapperClick,
      isHorizontal,
      closeDrawer,
      popupData,
      open,
    }
  },

  template: `<teleport v-if="appendToBody" to="body">${template}</teleport><template v-else>${template}</template>`,
})
