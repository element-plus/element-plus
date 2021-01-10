import { createVNode, reactive, ref, toRefs, h, Transition, render, VNode } from 'vue'
import { removeClass } from '@element-plus/utils/dom'
import type { ILoadingCreateComponentParams, ILoadingInstance } from './loading.type'

export function createLoadingComponent({ options , globalLoadingOption }: ILoadingCreateComponentParams): ILoadingInstance {
  let vm: VNode = null
  let afterLeaveTimer: Nullable<number> = null

  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: options.hasOwnProperty('visible') ? options.visible : true,
  })

  function setText(text: string) {
    data.text = text
  }

  function destorySelf() {
    const target = data.parent
    if(!target.vLoadingAddClassList) {
      removeClass(target, 'el-loading-parent--relative')
      removeClass(target, 'el-loading-parent--hidden')
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el)
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

  const componetSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave,
  }

  const elLoadingComponent = {
    name: 'ElLoading',
    setup() {
      return componetSetupConfig
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
            display: this.visible ? null : 'none',
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

  vm = createVNode(elLoadingComponent)

  render(vm, document.createElement('div'))

  return {
    ...componetSetupConfig,
    vm,
    get $el(){
      return vm.el as HTMLElement
    },
  }
}
