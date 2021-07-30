<template>
  <div
    class="side-nav"
    :class="{ 'is-fade': isFade }"
    :style="navStyle"
    @mouseenter="isFade = false"
  >
    <ul>
      <li class="nav-item sponsors">
        <a>{{ lang === 'zh-CN' ? '赞助商' : 'Sponsors' }}</a>
        <ul class="pure-menu-list sub-nav">
          <li class="nav-item">
            <a
              class="sponsor"
              href="https://bit.dev/?from=element-ui"
              target="_blank"
              title="bit"
            >
              <img src="~examples/assets/images/bit.svg">
            </a>
          </li>
          <li class="nav-item">
            <a
              class="sponsor"
              href="https://www.renren.io/?from=element-ui"
              target="_blank"
              :title="sponsorIntroR"
            >
              <img src="~examples/assets/images/renren.png">
            </a>
          </li>
        </ul>
      </li>
      <li v-for="(item, keyy) in data" :key="keyy" class="nav-item">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{
          item.name
        }}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{
          item.name
        }}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name"
        />
        <ul v-if="item.children" class="pure-menu-list sub-nav">
          <li
            v-for="(navItem, key) in item.children"
            :key="key"
            class="nav-item"
          >
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name"
            />
          </li>
        </ul>
        <template v-if="item.groups">
          <div v-for="(group, key) in item.groups" :key="key" class="nav-group">
            <div class="nav-group__title" @click="expandMenu">
              {{ group.groupName }}
            </div>
            <ul class="pure-menu-list">
              <li
                v-for="(navItem, keey) in group.list"
                v-show="!navItem.disabled"
                :key="keey"
                class="nav-item"
              >
                <el-badge v-if="navItem.beta" value="Beta">
                  <router-link
                    class=""
                    active-class="active"
                    :to="base + navItem.path"
                    exact
                    v-text="navItem.title || navItem.name"
                  />
                </el-badge>
                <router-link
                  v-else
                  class=""
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title || navItem.name"
                />
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
    <!--<div id="code-sponsor-widget"></div>-->
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useRoute } from 'vue-router'
import bus from '../bus'
import compoLang from '../i18n/component.json'

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    base: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isSmallScreen = ref(false)
    const isFade = ref(false)
    const route = useRoute()

    bus.$on('fade-nav', () => {
      isFade.value = true
    })

    onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    const navStyle = computed(() => {
      const style = {}
      if (isSmallScreen.value) {
        style.paddingBottom = '60px'
      }
      style.opacity = isFade.value ? '0.5' : '1'
      return style
    })

    const lang = computed(() => {
      return route.meta.lang
    })

    const langConfig = computed(() => {
      return compoLang.filter(config => config.lang === lang.value)[0]['nav']
    })

    const sponsorIntroR = computed(() => {
      return lang.value === 'zh-CN' ? '企业级的快速开发平台' : 'Enterprise-class rapid development platform'
    })

    watch(
      () => route.path,
      () => {
        handlePathChange()
      },
    )

    watch(isFade, val => {
      bus.$emit('nav-fade', val)
    })

    const handleResize = () => {
      isSmallScreen.value = document.documentElement.clientWidth < 768
      handlePathChange()
    }

    const handlePathChange = async () => {
      if (!isSmallScreen.value) {
        expandAllMenu()
        return
      }
      await nextTick()
      hideAllMenu()
      let activeAnchor = document.querySelector('a.active')
      let ul = activeAnchor.parentNode
      while (ul.tagName !== 'UL') {
        ul = ul.parentNode
      }
      ul.style.height = 'auto'
    }

    const hideAllMenu = () => {
      [].forEach.call(document.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = '0'
      })
    }

    const expandAllMenu = () => {
      [].forEach.call(document.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = 'auto'
      })
    }

    const expandMenu = event => {
      if (!isSmallScreen.value) return
      let target = event.currentTarget
      if (
        !target.nextElementSibling ||
        target.nextElementSibling.tagName !== 'UL'
      )
        return
      hideAllMenu()
      event.currentTarget.nextElementSibling.style.height = 'auto'
    }

    return {
      sponsorIntroR,
      isFade,
      navStyle,
      lang,
      langConfig,
      expandMenu,
    }
  },
})
</script>
<style lang="scss" scoped>
.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding-right: 30px;
  transition: opacity 0.3s;
  &.is-fade {
    transition: opacity 3s;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  > ul > .nav-item > a {
    margin-top: 15px;
  }

  > ul > .nav-item:nth-child(-n + 4) > a {
    margin-top: 0;
  }

  .nav-item {
    a {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: normal;

      &.active {
        color: #409eff;
      }
    }

    .nav-item {
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;

        &:hover,
        &.active {
          color: #409eff;
        }
      }
    }

    &.sponsors {
      & > .sub-nav {
        margin-top: -10px;
      }

      & > a {
        color: #777;
        font-weight: 300;
        font-size: 14px;
      }

      .nav-item {
        display: inline-block;

        a {
          height: auto;
          display: inline-block;
          vertical-align: middle;
          margin: 8px 10px 4px 0;

          img {
            width: 36px;
          }
        }
      }
    }
  }

  .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }

  #code-sponsor-widget {
    margin: 0 0 0 -20px;
  }
}

.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;

  li {
    font-size: 14px;
  }
}
</style>
