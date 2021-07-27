<script>
import { defineComponent, h, computed, watch, getCurrentInstance, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { ElScrollbar, ElMessageBox, ElConfigProvider } from 'element-plus'
import MainHeader from './components/header'
import MainFooter from './components/footer'
import zhLocale from '@element-plus/locale/lang/zh-cn'
import enLocale from '@element-plus/locale/lang/en'
import esLocale from '@element-plus/locale/lang/es'
import frLocale from '@element-plus/locale/lang/fr'
import jaLocale from '@element-plus/locale/lang/ja'
import { Language } from './enums/language'

const localeMap = {
  [Language.CN]: zhLocale,
  [Language.ES]: esLocale,
  [Language.FR]: frLocale,
  [Language.JP]: jaLocale,
  [Language.EN]: enLocale,

}

export default defineComponent({
  name: 'App',

  setup() {
    const route = useRoute()

    const lang = computed(() => route.path.split('/')[1] || Language.CN)

    const isComponent = computed(() => /^component-/.test(route.name || ''))

    const suggestJump = () => {
      if (process.env.NODE_ENV !== 'production') return

      const href = location.href
      const preferGithub = localStorage.getItem('PREFER_GITHUB')
      const cnHref = href.indexOf('element-plus.gitee.io') > -1
      if (cnHref || preferGithub) return
      setTimeout(() => {
        if (lang.value !== Language.CN) return
        ElMessageBox.confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示')
          .then(() => {
            location.replace('https://element-plus.gitee.io')
          })
          .catch(() => {
            localStorage.setItem('PREFER_GITHUB', 'true')
          })
      }, 1000)
    }

    watch(() => lang.value, val => {
      if (val === Language.CN) suggestJump()
    })

    onMounted(() => {
      if (lang.value === Language.CN) suggestJump()
    })

    return {
      lang,
      isComponent,
    }
  },

  render() {
    const notPlay = this.lang !== 'play'

    const notComponent = !this.isComponent

    const mainHeader = notPlay ? h(MainHeader, {
      style: 'position: fixed;top: 0;width: 100%;z-index: 2000',
    }) : null

    const mainFooter = notPlay && notComponent ? h(MainFooter) : null

    const content = [h('div', {
      class: 'main-cnt',
    }, [h(RouterView)]), mainFooter]

    const contentWrapper = notComponent
      ? h(ElScrollbar, null, { default: () => content })
      : content

    return h(ElConfigProvider, {
      locale: localeMap[this.lang],
    }, {
      default: () => {
        return h('div', {
          id: 'app',
          class: {
            'is-component': this.isComponent,
          },
        }, [mainHeader, contentWrapper])
      },
    })
  },
})
</script>
