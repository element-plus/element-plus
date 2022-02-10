import {
  createApp,
  h,
  reactive,
  ref,
  createVNode,
  toRefs,
  Transition,
  vShow,
  withCtx,
  withDirectives,
} from 'vue'
import { removeClass } from '@element-plus/utils-v2'

import type { LoadingOptionsResolved } from './types'

export function createLoadingComponent(options: LoadingOptionsResolved) {
  let afterLeaveTimer: number

  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false,
  })

  function setText(text: string) {
    data.text = text
  }

  function destroySelf() {
    const target = data.parent
    if (!target.vLoadingAddClassList) {
      let loadingNumber: number | string | null =
        target.getAttribute('loading-number')
      loadingNumber = Number.parseInt(loadingNumber as any) - 1
      if (!loadingNumber) {
        removeClass(target, 'el-loading-parent--relative')
        target.removeAttribute('loading-number')
      } else {
        target.setAttribute('loading-number', loadingNumber.toString())
      }
      removeClass(target, 'el-loading-parent--hidden')
    }
    remvoeElLoadingChild()
  }
  function remvoeElLoadingChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el)
  }
  function close() {
    if (options.beforeClose && !options.beforeClose()) return

    const target = data.parent
    target.vLoadingAddClassList = undefined
    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false
        destroySelf()
      }
    }, 400)
    data.visible = false

    options.closed?.()
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return
    afterLeaveFlag.value = false
    destroySelf()
  }

  const elLoadingComponent = {
    name: 'ElLoading',
    setup() {
      return () => {
        const svg = data.spinner || data.svg
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: data.svgViewBox ? data.svgViewBox : '25 25 50 50',
            ...(svg ? { innerHTML: svg } : {}),
          },
          [
            h('circle', {
              class: 'path',
              cx: '50',
              cy: '50',
              r: '20',
              fill: 'none',
            }),
          ]
        )

        const spinnerText = data.text
          ? h('p', { class: 'el-loading-text' }, [data.text])
          : undefined

        return h(
          Transition,
          {
            name: 'el-loading-fade',
            onAfterLeave: handleAfterLeave,
          },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  'div',
                  {
                    style: {
                      backgroundColor: data.background || '',
                    },
                    class: [
                      'el-loading-mask',
                      data.customClass,
                      data.fullscreen ? 'is-fullscreen' : '',
                    ],
                  },
                  [
                    h(
                      'div',
                      {
                        class: 'el-loading-spinner',
                      },
                      [spinner, spinnerText]
                    ),
                  ]
                ),
                [[vShow, data.visible]]
              ),
            ]),
          }
        )
      }
    },
  }

  const vm = createApp(elLoadingComponent).mount(document.createElement('div'))

  return {
    ...toRefs(data),
    setText,
    remvoeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el(): HTMLElement {
      return vm.$el
    },
  }
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>
