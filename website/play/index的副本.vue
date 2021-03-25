<template>
  <div class="block">
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <transition v-on="on">
        <div v-show="show3" class="xzw">
          <div class="transition-box">
            <p>el-collapse-transition</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@element-plus/utils/dom'
import { compile } from 'vue'

console.log((compile(`<transition v-on="on">
        <div v-show="show3" class="xzw">
          <div class="transition-box">
            <p>el-collapse-transition</p>
          </div>
        </div>
      </transition>`)).toString())
export default {
  name: 'Layout',
  setup() {
    return {
      on: {
        beforeEnter(el) {
          addClass(el, 'collapse-transition')
          if (!el.dataset) el.dataset = {}

          el.dataset.oldPaddingLeft = el.style.paddingLeft
          el.dataset.oldPaddingRight = el.style.paddingRight

          el.style.width = '0'
          el.style.paddingLeft = 0
          el.style.paddingRight = 0
        },

        enter(el) {
          el.dataset.oldOverflow = el.style.overflow
          if (el.scrollWidth !== 0) {
            el.style.width = el.scrollWidth + 'px'
            el.style.paddingLeft = el.dataset.oldPaddingLeft
            el.style.paddingRight = el.dataset.oldPaddingRight
          } else {
            el.style.width = ''
            el.style.paddingLeft = el.dataset.oldPaddingLeft
            el.style.paddingRight = el.dataset.oldPaddingRight
          }

          el.style.overflow = 'hidden'
        },

        afterEnter(el) {
          // for safari: remove class then reset width is necessary
          removeClass(el, 'collapse-transition')
          el.style.width = ''
          el.style.overflow = el.dataset.oldOverflow
        },

        beforeLeave(el) {
          if (!el.dataset) el.dataset = {}
          el.dataset.oldPaddingLeft = el.style.paddingLeft
          el.dataset.oldPaddingRight = el.style.paddingRight
          el.dataset.oldOverflow = el.style.overflow

          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },

        leave(el) {
          if (el.scrollWidth !== 0) {
            // for safari: add class after set width, or it will jump to zero width suddenly, weired
            addClass(el, 'collapse-transition')
            // fix #968 collapse animation failure.
            // in vue3.0.4, transitionProperty is set 'none' to avoid 'v-leave-from' issue
            el.style.transitionProperty = 'width'
            el.style.width = 0
            el.style.paddingLeft = 0
            el.style.paddingRight = 0
          }
        },

        afterLeave(el) {
          removeClass(el, 'collapse-transition')
          el.style.width = ''
          el.style.overflow = el.dataset.oldOverflow
          el.style.paddingLeft = el.dataset.oldPaddingLeft
          el.style.paddingRight = el.dataset.oldPaddingRight
        },
      },
    }
  },
  data() {
    return {
      activeIndex: '4',
      isCollapse: true,
      show3: true,
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
.transition-box {
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .collapse-transition {
    transition: width .3s ease-in-out,padding-left .3s ease-in-out,padding-right .3s ease-in-out
}
</style>

