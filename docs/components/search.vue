<template>
  <el-autocomplete
    v-model="query"
    size="small"
    :popper-class="`algolia-search${ isEmpty ? ' is-empty' : '' }`"
    :fetch-suggestions="querySearch"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    highlight-first-item
    @select="handleSelect"
  >
    <template #default="props">
      <p v-if="props && props.item.title" class="algolia-search-title">
        <span v-html="props.item.highlightedCompo"></span>
        <span class="algolia-search-separator"></span>
        <span v-html="props.item.title"></span>
      </p>
      <p
        v-if="props && props.item.content"
        class="algolia-search-content"
        v-html="props.item.content"
      ></p>
      <a
        v-if="props && props.item.img"
        class="algolia-search-link"
        target="_blank"
        href="https://www.algolia.com/docsearch"
      >
        <img
          class="algolia-search-logo"
          src="../assets/images/search-by-algolia.svg"
          alt="algolia-logo"
        >
      </a>
      <p
        v-if="props && props.item.isEmpty"
        class="algolia-search-empty"
      >
        {{ emptyText }}
      </p>
    </template>
  </el-autocomplete>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import localeData from '../assets/components/search.json'
import { useLang } from '../utils/routes'
import algoliasearch from 'algoliasearch'
import { Language } from '../constants/language'

import type { SearchIndex } from 'algoliasearch'

const router = useRouter()
const lang = useLang()
const locale = computed<Record<string, string>>(() => localeData[lang.value])
const index = ref<SearchIndex>(null)
const query = ref('')
const isEmpty = ref(false)
const placeholder = computed(() => locale.value.search || '')
const emptyText = computed(() => locale.value.empty || '')
const initIndex = () => {
  const client = algoliasearch('7DCTSU0WBW', '463385cf36ad2e81aff21afea1c0409c')
  index.value = client.initIndex(`element-${ locale.value.index }`)
}

const querySearch = async (query: string, cb: (arg: any[]) => void) => {
  if (!query) return
  try {
    const res = await index.value.search(query, { hitsPerPage: 6 })
    if (res.hits.length > 0) {
      isEmpty.value = false
      cb(res.hits.map((hit: any) => {
        let content = hit._highlightResult.content.value.replace(/\s+/g, ' ')
        const highlightStart = content.indexOf('<span class="algolia-highlight">')
        if (highlightStart > -1) {
          const startEllipsis = highlightStart - 15 > 0
          content = (startEllipsis ? '...' : '') +
              content.slice(Math.max(0, highlightStart - 15), content.length)
        } else if (content.indexOf('|') > -1) {
          content = ''
        }
        return {
          anchor: hit.anchor,
          component: hit.component,
          highlightedCompo: hit._highlightResult.component.value,
          title: hit._highlightResult.title.value,
          content,
        }
      }).concat({ img: true } as any))
    } else {
      isEmpty.value = true
      cb([{ isEmpty: true }])
    }
  } catch (e) {
    console.error(e)
  }
}

const handleSelect = (val: any) => {
  if (val.img || val.isEmpty) return
  const component = val.component || ''
  const anchor = val.anchor
  router.go(`/${ lang.value }/component/${ component }${ anchor ? `#${ anchor }` : '' }`)
}

watch(lang, initIndex)

onMounted(initIndex)

</script>

