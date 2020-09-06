import { getCurrentInstance, reactive, ref, toRefs, h, Transition } from 'vue'
import { removeClass } from '@element-plus/utils/dom'

export function createLoadingComponent({ options , globalLoadingOption }) {
  return {
    name: 'ElLoading',
    setup() {
      const instance = getCurrentInstance()

      const data = reactive({
        ...options,
        originalPosition: '',
        originalOverflow: '',
        visible: options.hasOwnProperty('visible') ? options.visible : true,
      })

      const afterLeaveFlag = ref(false)
      let afterLeaveTimer: Nullable<number>

      function setText(text) {
        data.text = text
      }

      function destorySelf() {
        const target = data.parent
        if(!target.vLoadingAddClassList) {
          removeClass(target, 'el-loading-parent--relative')
          removeClass(target, 'el-loading-parent--hidden')
        }
        if (instance.vnode.el && instance.vnode.el.parentNode) {
          instance.vnode.el.parentNode.removeChild(instance.vnode.el)
        }
      }

      function close() {
        const target = data.parent
        target.vLoadingAddClassList = null
        if (data.fullscreen) {
          globalLoadingOption.fullscreenLoading = undefined
        }
        afterLeaveFlag.value = true
        clearTimeout(afterLeaveTimer)

        afterLeaveTimer = window.setTimeout(() => {
          if (afterLeaveFlag.value) {
            afterLeaveFlag.value = false
            destorySelf()
          }
        }, 400)
        data.visible = false
      }

      function handleAfterLeave() {
        if (!afterLeaveFlag.value) return
        afterLeaveFlag.value = false
        destorySelf()
      }

      return {
        ...toRefs(data),
        setText,
        close,
        handleAfterLeave,
      }
    },
    render() {
      const spinner = h('svg', {
        class: 'circular',
        viewBox: '25 25 50 50',
      }, [
        h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' }),
      ])

      const noSpinner = h('i', { class: this.spinner })

      const spinnerText = h('p', { class: 'el-loading-text' }, [this.text])

      return h(Transition, {
        name: 'el-loading-fade',
        onAfterLeave: this.handleAfterLeave,
      },{
        default: () => h('div', {
          style: {
            backgroundColor: this.background || '',
            display: this.visible ? 'inherit' : 'none',
          },
          class: [
            'el-loading-mask',
            this.customClass,
            this.fullscreen ? 'is-fullscreen' : '',
          ],
        }, [
          h('div', {
            class: 'el-loading-spinner',
          }, [
            !this.spinner ? spinner : noSpinner,
            this.text ? spinnerText : null,
          ]),
        ]),
      })
    },
  }
}
