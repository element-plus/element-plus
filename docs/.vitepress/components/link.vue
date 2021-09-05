<script lang="ts">
import { h } from 'vue'
// Components
import { ElIcon } from 'element-plus'

const skipped = ['https://www.npmjs.org/package/element-plus']

const internalLinks = [
  'http://localhost',
  'http://127.0.0.1',
  'https://element-plus.org',
  'http://element-plus.org',
  'https://element-plus.gitee.io',
  'http://element-plus.gitee.io',
]

export default {
  name: 'AppLink',
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: '',
    },
  },
  computed: {
    passThrough() {
      return {
        href: this.href,
        target: this.isInternal ? null : '_blank',
        rel: 'noopener noreferrer',
      }
    },
    isInternal() {
      return (
        this.href.startsWith('/#') ||
        internalLinks.some((link) => this.href.includes(link))
      )
    },
    isExternal() {
      return !this.isInternal
    },
    isSamePage() {
      return this.$router.currentRoute.value.path.includes(this.href)
    },
    isSkipped() {
      return skipped.indexOf(this.href) > -1
    },
  },
  methods: {
    onClick(e: MouseEvent) {
      if (!this.isSamePage) return
      e.preventDefault()
      this.$router.go(this.href)
    },
  },
  render() {
    const children = []

    children.push(
      h('span', { class: 'element-plus__link-text' }, [this.$slots.default()])
    )
    !this.isSkipped &&
      this.isExternal &&
      children.push(
        h(
          ElIcon,
          {
            style: {
              fontSize: '14px',
              marginLeft: '4px',
            },
            color: 'inherit',
          },
          {
            default: () => [h(ExternalLink)],
          }
        )
      )
    const props = {
      class: 'element-plus__link',
      ...this.passThrough,
      onClick: this.onClick,
    }

    return h('a', props, children)
    // ?
    // : h(resolveComponent('router-link'), props, {
    //   default: () => children,
    // })
  },
}
</script>
