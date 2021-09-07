<script lang="ts">
import { h } from 'vue'
// Components
import { ElIcon } from 'element-plus'

const ExternalLink = () =>
  h(
    'svg',
    {
      class: 'link-icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: 16,
      height: 16,
    },
    [
      h('path', {
        d: 'M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667 42.666667 0 0 1-42.666667-42.666667V256a42.666667 42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667 0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667 42.666667 0 0 0-42.666667-42.666667z',
        fill: 'currentColor',
      }),

      h('path', {
        d: 'M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667 42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0 42.666667-42.666667V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667h-170.666666a42.666667 42.666667 0 0 0 0 85.333333z',
        fill: 'currentColor',
      }),
    ]
  )

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
