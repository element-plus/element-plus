<template>
  <div id="search-box" class="algolia-search-box">
    <button @click="open" class="search-box-button">
      <el-icon class="search-box-icon">
        <search />
      </el-icon>
      <span class="search-box-placeholder">
        {{ placeholder }}
      </span>
      <span class="search-box-key">
        ⌘
      </span>
      <span class="search-box-key">
        K
      </span>
    </button>
    <el-dialog v-model="showDialog">
      <div>
        I am content
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import algoliasearch from 'algoliasearch'
import { Search } from '@element-plus/icons'
import { useToggle } from '../utils'
import localeData from '../i18n/component/search.json'
import { useLang } from '../utils/routes'
import { Language } from '../constants/language'

import type { SearchIndex } from 'algoliasearch'
console.log(localeData)
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

const [showDialog, toggleDialog] = useToggle()

const open = () => {
  toggleDialog(true)
}

watch(lang, initIndex)

onMounted(initIndex)
</script>

<style scoped lang="scss">
.algolia-search-box {
  display: flex;
  align-items: center;
  line-height: var(--header-height);
  padding-left: 0.5rem;
  padding-top: 1px;

  @media screen and (min-width: 850px) {
    min-width: 176.3px;

    .search-box-placeholder,
    .search-box-key {
      display: flex;
    }
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
</style>
