<script setup lang="ts">
import '@docsearch/css'
import { ref, computed, watch, onMounted, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vitepress'
import docsearch from '@docsearch/js'
import { useLang } from '../../composables/lang'
// import type { DefaultTheme } from '../config'
import type { DocSearchHit } from '@docsearch/react/dist/esm/types'

const props = defineProps<{
  options: any
  multilang?: boolean
}>()

const vm = getCurrentInstance()
const route = useRoute()
const router = useRouter()

watch(
  () => props.options,
  (value) => {
    update(value)
  }
)

onMounted(() => {
  initialize(props.options)
})

function isSpecialClick(event: MouseEvent) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl)

  return pathname + hash
}

function update(options: any) {
  if (vm && vm.vnode.el) {
    vm.vnode.el.innerHTML =
      '<div class="algolia-search-box" id="docsearch"></div>'
    initialize(options)
  }
}

const searchIndexMap = {
  'zh-CN': 'element-zh',
  'en-US': 'element-en',
  es: 'element-es',
  'fr-FR': 'element-fr',
  jp: 'element-jp',
}

const lang = useLang()

function initialize(userOptions: any) {
  // if the user has multiple locales, the search results should be filtered
  // based on the language
  const facetFilters = props.multilang ? ['language:' + lang.value] : []

  docsearch(
    Object.assign({}, userOptions, {
      container: '#docsearch',
      indexName: searchIndexMap[lang.value],
      searchParameters: Object.assign({}, userOptions.searchParameters, {
        // pass a custom lang facetFilter to allow multiple language search
        // https://github.com/algolia/docsearch-configs/pull/3942
        facetFilters: facetFilters.concat(
          userOptions.searchParameters?.facetFilters || []
        ),
      }),

      navigator: {
        navigate: ({ suggestionUrl }: { suggestionUrl: string }) => {
          const { pathname: hitPathname } = new URL(
            window.location.origin + suggestionUrl
          )

          // Router doesn't handle same-page navigation so we use the native
          // browser location API for anchor navigation
          if (route.path === hitPathname) {
            window.location.assign(window.location.origin + suggestionUrl)
          } else {
            router.go(suggestionUrl)
          }
        },
      },

      transformItems: (items: DocSearchHit[]) => {
        return items.map((item) => {
          return Object.assign({}, item, {
            url: getRelativePath(item.url),
          })
        })
      },

      hitComponent: ({
        hit,
        children,
      }: {
        hit: DocSearchHit
        children: any
      }) => {
        const relativeHit = hit.url.startsWith('http')
          ? getRelativePath(hit.url as string)
          : hit.url

        return {
          type: 'a',
          ref: undefined,
          constructor: undefined,
          key: undefined,
          props: {
            href: hit.url,
            onClick: (event: MouseEvent) => {
              if (isSpecialClick(event)) {
                return
              }

              // we rely on the native link scrolling when user is already on
              // the right anchor because Router doesn't support duplicated
              // history entries
              if (route.path === relativeHit) {
                return
              }

              // if the hits goes to another page, we prevent the native link
              // behavior to leverage the Router loading feature
              if (route.path !== relativeHit) {
                event.preventDefault()
              }

              router.go(relativeHit)
            },
            children,
          },
        }
      },
    })
  )
}
</script>

<template>
  <div class="algolia-search-box" id="docsearch" />
</template>

<style scoped lang="scss">
@import '../../styles/mixins';
.algolia-search-box {
  display: flex;
  align-items: center;
  line-height: var(--header-height);
  padding-left: 0.5rem;
  padding-top: 1px;
  margin-right: 12px;
  .search-box-placeholder,
  .search-box-key {
    display: flex;
  }

  @include respond-to('md') {
    min-width: 176.3px;
  }
}

.search-box-icon {
  font-size: 20px;
}

.search-box-placeholder {
  display: none;
  margin: 0 4px;
  line-height: var(--header-item-height);
}
.search-box-button {
  align-items: center;
  background: var(--docsearch-searchbox-background);
  border: 0;
  border-radius: 40px;
  color: var(--docsearch-muted-color);
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: var(--header-item-height);
  margin: 0 0 0 16px;
  padding: 0 8px;
  user-select: none;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--brand-color);
  }
}

.search-box-key {
  align-items: center;
  background: var(--docsearch-key-gradient);
  border-radius: 3px;
  box-shadow: var(--docsearch-key-shadow);
  color: var(--docsearch-muted-color);
  display: none;
  height: 18px;
  justify-content: center;
  margin-right: 0.4em;
  padding-bottom: 2px;
  position: relative;
  width: 20px;
}

.DocSearch {
  --docsearch-primary-color: var(--brand-color);
  --docsearch-key-gradient: rgba(125, 125, 125, 0.1);
  --docsearch-key-shadow: rgba(125, 125, 125, 0.3);
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #fff;
  --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,
    0 -3px 6px 0 rgba(69, 98, 155, 0.12);
  --docsearch-searchbox-background: rgba(242, 242, 242, 0.5);
  --docsearch-muted-color: var(--el-text-color-secondary);
}
</style>
