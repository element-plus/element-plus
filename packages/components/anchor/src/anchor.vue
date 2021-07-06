<template>
  <div class="el-anchor">
    <template v-if="affix">
      <Affix v-bind="props">
        <slot></slot>
      </Affix>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { isWindow } from '@element-plus/utils/isWindow'
import throwError from '@element-plus/utils/error'
import { easeInOutCubic } from '@element-plus/utils/animation'
import { rAF } from '@element-plus/utils/raf'
import { on, off } from '@element-plus/utils/dom'
import Affix from '../../affix/index'
import { useProvideAnchor } from './context'
export interface AnchorState {
  scrollContainer: HTMLElement | Window
  links: string[]
  scrollEvent: any
  animating: boolean
}
type Section = {
  link: string
  top: number
}
interface ScrollToOptions {
  /** Scroll end callback */
  callback?: () => any
  /** Animation duration, default as 450 */
  duration?: number
}
const sharpMatcherRegx = /#(\S+)$/
export default defineComponent({
  name: 'ElAnchor',
  components: {
    Affix,
  },
  props: {
    affix: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '',
    },
    targetOffset: {
      type: Number,
      dafult: 0,
    },
    offset: {
      type: Number,
      dafult: 0,
    },
    bounds: {
      type: Number,
      dafult: 5,
    },
  },
  emits: ['click', 'change'],
  setup(props, { emit }) {
    const scope = 'ElAnchor'
    const state = reactive<AnchorState>({
      links: [],
      scrollContainer: null,
      scrollEvent: null,
      animating: false,
    })
    const activeLink = ref(null)
    const container = ref(null)
    const el = ref(null)
    const getContainer = () => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
        if (!el.value) {
          throwError(scope, `target is not existed: ${props.target}`)
        }
      }
    }
    const handleScrollTo = (link: string) => {
      const { offset, targetOffset } = props

      setCurrentActiveLink(link)
      const sharpLinkMatch = sharpMatcherRegx.exec(link)
      if (!sharpLinkMatch) { return }
      const targetElement = document.getElementById(sharpLinkMatch[1])
      if (!targetElement) { return }
      if (isWindow(el.value)) {
        window.scrollTo(window.pageXOffset,getOffsetTop(targetElement, el.value))
      } else {
        const scrollTop = getScroll(el.value)
        const eleOffsetTop = getOffsetTop(targetElement, el.value)
        let y = scrollTop + eleOffsetTop
        y -= targetOffset !== undefined ? targetOffset : offset || 0
        state.animating = true
        scrollTo(y, { callback: () => {
          state.animating = false
        } })
      }
    }
    const getScroll = (target: HTMLElement | Window | Document | null) => {
      if (typeof window === 'undefined') {
        return 0
      }
      const method = 'scrollTop'
      let result = 0
      if (isWindow(target)) {
        result = (target as Window)['pageYOffset']
      } else if (target instanceof Document) {
        result = target.documentElement[method]
      } else if (target) {
        result = (target as HTMLElement)[method]
      }
      if (target && !isWindow(target) && typeof result !== 'number') {
        result = ((target as HTMLElement).ownerDocument || (target as Document)).documentElement?.[
          method
        ]
      }
      return result
    }
    const getOffsetTop = (element: HTMLElement, container: HTMLElement | Window | Document): number =>{
      if (!element.getClientRects().length) {
        return 0
      }
      const rect = element.getBoundingClientRect()
      if (rect.width || rect.height) {
        if (container === window) {
          container = element.ownerDocument?.documentElement
          return rect.top - container.clientTop
        }
        return rect.top - (container as HTMLElement).getBoundingClientRect().top
      }
      return rect.top
    }
    const scrollTo = (y: number, options:ScrollToOptions = {}) => {
      const { callback, duration = 500 } = options
      const beginTime = Date.now()
      const scrollTop = getScroll(el.value)
      let beginValue = y - scrollTop
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / duration
        if (progress < 1) {
          const y = beginValue * easeInOutCubic(progress)
          el.value.scrollTop = scrollTop + y
          rAF(frameFunc)
        } else if (typeof callback === 'function') {
          callback()
        }
      }
      rAF(frameFunc)
    }
    const getCurrentAnchor = (offsetTop = 0, bounds = 5) => {
      const linkSections: Array<Section> = []
      state.links.forEach(link => {
        const sharpLinkMatch = sharpMatcherRegx.exec(link.toString())
        if (!sharpLinkMatch) {
          return
        }
        const target = document.getElementById(sharpLinkMatch[1])
        if (target) {
          const top = getOffsetTop(target, el.value)
          if (top < offsetTop + bounds) {
            linkSections.push({
              link,
              top,
            })
          }
        }
      })

      if (linkSections.length) {
        const maxSection = linkSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev))
        return maxSection.link
      }
      return ''
    }
    const setCurrentActiveLink = (link: string) => {
      if (activeLink.value === link) { return }
      activeLink.value = link
      emit('change', link)
    }
    const handleScroll = () => {
      if (state.animating) {
        return
      }
      const { bounds, targetOffset, offset } = props
      const currentActiveLink = getCurrentAnchor(
        targetOffset !== undefined ? targetOffset : offset || 0,
        bounds)
      setCurrentActiveLink(currentActiveLink)
    }
    onMounted(() => {
      nextTick(() => {
        getContainer()
        on(el.value, 'scroll', handleScroll)
      })
    })
    onBeforeUnmount(() => {
      off(el.value, 'scroll', handleScroll)
    })
    useProvideAnchor({
      registerLink: (link: string) => {
        if (!state.links.includes(link)) {
          state.links.push(link)
        }
      },
      unregisterLink: (link: string) => {
        const index = state.links.indexOf(link)
        if (index !== -1) {
          state.links.splice(index, 1)
        }
      },
      activeLink,
      scrollTo: handleScrollTo,
      handleClick: (e, info) => {
        emit( 'click', e, info)
      },
    })
    return {
      props,
    }
  },
})
</script>
