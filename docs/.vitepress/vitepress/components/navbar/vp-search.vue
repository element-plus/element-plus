<script setup lang="ts">
import '@docsearch/css'
import { getCurrentInstance, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import docsearch from '@docsearch/js'
import { isClient } from '@vueuse/core'
import { useLang } from '../../composables/lang'
// import type { DefaultTheme } from '../config'
import searchLocale from '../../../i18n/component/search.json'
import type { DocSearchHit } from '@docsearch/react/dist/esm/types'

const props = defineProps<{
  options: any
  multilang?: boolean
}>()

const vm = getCurrentInstance()
const route = useRoute()
const router = useRouter()

const lang = useLang()

watch([() => props.options, lang], ([newOptions]) => {
  update(newOptions)
})

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

function initialize(userOptions: any) {
  // if the user has multiple locales, the search results should be filtered
  // based on the language
  const facetFilters = props.multilang ? [`language:${lang.value}`] : []
  const algoliaLocale = searchLocale[lang.value].algolia

  docsearch(
    Object.assign({}, userOptions, {
      container: '#docsearch',
      indexName: 'element-plus',
      placeholder: algoliaLocale.placeholder,
      translations: algoliaLocale.translations,
      searchParameters: Object.assign({}, userOptions.searchParameters, {
        // pass a custom lang facetFilter to allow multiple language search
        // https://github.com/algolia/docsearch-configs/pull/3942
        facetFilters: facetFilters.concat(
          userOptions.searchParameters?.facetFilters || []
        ),
      }),

      getMissingResultsUrl({ query }: { query: string }) {
        return `https://github.com/element-plus/element-plus/issues/new?title=${encodeURIComponent(
          `[Docs] Missing search result for \`${query}\``
        )}`
      },

      navigator: {
        navigate: ({ itemUrl }: { itemUrl: string }) => {
          if (!isClient) return

          const { pathname: hitPathname } = new URL(
            window.location.origin + itemUrl
          )

          // Router doesn't handle same-page navigation so we use the native
          // browser location API for anchor navigation
          if (route.path === hitPathname) {
            window.location.assign(window.location.origin + itemUrl)
          } else {
            router.go(itemUrl)
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
          __v: children.__v,
        }
      },
    })
  )
}
</script>

<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

.algolia-search-box {
  // display: flex;
  // align-items: center;
  // line-height: var(--header-height);
  // padding-left: 0.5rem;
  // padding-top: 1px;
  // margin-right: 12px;
  // .search-box-placeholder,
  // .search-box-key {
  //   display: flex;
  // }

  @include respond-to('md') {
    min-width: 176.3px;
  }
}

.DocSearch {
  --docsearch-primary-color: var(--brand-color);
  --docsearch-highlight-color: var(--brand-color);
  --docsearch-key-gradient: rgba(125, 125, 125, 0.1);
  // --docsearch-key-shadow: rgba(125, 125, 125, 0.3);
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: var(--bg-color);
  --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,
    0 -3px 6px 0 rgba(69, 98, 155, 0.12);
  --docsearch-searchbox-background: rgba(var(--bg-color-rgb), 0.8);
  --docsearch-searchbox-focus-background: var(--bg-color-mute);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--brand-color);
  --docsearch-muted-color: var(--text-color-lighter);
  --docsearch-text-color: var(--text-color-light);
  --docsearch-modal-background: var(--bg-color-soft);
  --docsearch-modal-shadow: var(--el-box-shadow);

  transition: background-color var(--el-transition-duration-fast);
  background-color: transparent;

  &.DocSearch-Container {
    z-index: 20000;
  }

  &.DocSearch-Button {
    margin-right: 8px;
  }

  .DocSearch-Title {
    word-break: break-word;
  }

  @media (max-width: 749px) {
    &.DocSearch-Button {
      margin: 0 12px;
      padding: 0;
    }
  }

  .dark & {
    --docsearch-text-color: var(--text-color-light);
    --docsearch-key-shadow: none;
    --docsearch-modal-shadow: none;
    --docsearch-footer-shadow: none;
    --docsearch-hit-background: var(--bg-color-mute);
    --docsearch-hit-color: var(--text-color-lighter);
    --docsearch-hit-shadow: none;

    // --docsearch-searchbox-focus-background: var(--bg-color-mute);
    .DocSearch-Button {
      .DocSearch-Button-Key {
        box-shadow: unset;
      }
    }
  }

  @include respond-to('md') {
    background-color: var(--docsearch-searchbox-background);
  }
}
</style>
