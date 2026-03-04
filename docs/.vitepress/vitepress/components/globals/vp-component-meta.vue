<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Clock, Loading, Warning } from '@element-plus/icons-vue'
import { useWindowSize } from '@vueuse/core'
import { useLocale } from '../../composables/locale'
import changelogLocale from '../../../i18n/component/component-meta.json'
import allChangelogs from 'virtual:component-changelog-data'

import type { TimelineItemProps } from 'element-plus'
import type { VersionChangelog } from '../../../utils/changelog-parser'

const props = defineProps({
  component: {
    type: String,
    required: true,
  },
})

const TYPE_ICONS: Record<string, string> = {
  feature: '✨',
  bugfix: '🐛',
  refactor: '🔨',
  breaking: '⚠️',
}

const locale = useLocale(changelogLocale)
const drawerVisible = ref(false)

const issueCount = ref<number | null>(null)
const issueLoading = ref(false)

const hasChangelog = computed(() => changelogs.value.length > 0)

const changelogs = computed<VersionChangelog[]>(
  () => allChangelogs[props.component] || []
)
const issueQuery = computed(
  () =>
    `repo:element-plus/element-plus is:open is:issue in:title [${props.component}]`
)

const issuesUrl = computed(() => {
  const q = encodeURIComponent(issueQuery.value)
  return `https://github.com/element-plus/element-plus/issues?q=${q}`
})

const { width: windowWidth } = useWindowSize()
const drawerSize = computed(() => (windowWidth.value < 768 ? '100%' : '60%'))

const getTypeIcon = (type: string) => {
  return TYPE_ICONS[type] || TYPE_ICONS['refactor']
}

const getTimelineItemType = (
  entries: VersionChangelog['entries']
): TimelineItemProps['type'] => {
  if (entries.some((e) => e.type === 'breaking')) return 'danger'
  if (entries.some((e) => e.type === 'feature')) return 'success'
  if (entries.some((e) => e.type === 'bugfix')) return 'primary'
  return 'info'
}

const HTML_ESCAPE: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (ch) => HTML_ESCAPE[ch])

const renderDescription = (desc: string) => {
  // Convert `code` to <code> tags
  let html = escapeHtml(desc).replace(/`([^`]+)`/g, '<code>$1</code>')
  // Convert #PR to links
  html = html
    .replace(
      /#(\d+)/g,
      '<a href="https://github.com/element-plus/element-plus/pull/$1" target="_blank" rel="noopener noreferrer" >#$1</a>'
    )
    .replace(/([^.]$)/, '$1.')
  return html
}

const issueCountCache = new Map<string, { count: number; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

const fetchIssueCount = async () => {
  const { component } = props

  const cached = issueCountCache.get(component)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    issueCount.value = cached.count
    return
  }

  issueLoading.value = true
  try {
    const q = encodeURIComponent(issueQuery.value)
    const res = await fetch(
      `https://api.github.com/search/issues?q=${q}&per_page=1`
    )
    if (res.ok) {
      const data = await res.json()
      const count = data.total_count ?? 0
      issueCount.value = count
      issueCountCache.set(component, { count, timestamp: Date.now() })
    } else {
      issueCount.value = 0
    }
  } catch {
    issueCount.value = 0
  } finally {
    issueLoading.value = false
  }
}

const openDrawer = () => {
  drawerVisible.value = true
}

const openIssues = () => {
  window.open(issuesUrl.value, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
  fetchIssueCount()
})
</script>

<template>
  <ClientOnly>
    <div class="vp-component-changelog">
      <el-button-group class="component-meta-card" size="small">
        <el-button v-if="hasChangelog" :icon="Clock" @click="openDrawer">
          {{ locale['title'] }}
        </el-button>
        <el-button :icon="Warning" @click="openIssues">
          {{ locale['open-issues'] }}
          <div class="issue-count">
            <span v-if="!issueLoading">{{ issueCount ?? 0 }}</span>
            <el-icon v-else class="is-loading"><Loading /></el-icon>
          </div>
        </el-button>
      </el-button-group>

      <el-drawer
        v-if="hasChangelog"
        v-model="drawerVisible"
        class="changelog-drawer"
        :size="drawerSize"
        append-to-body
      >
        <template #header>
          <div class="changelog-drawer-header">
            <span class="changelog-drawer-title">{{ locale['title'] }}</span>
            <el-link
              type="primary"
              href="https://github.com/element-plus/element-plus/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ locale['view-full-changelog'] }}
            </el-link>
          </div>
        </template>

        <el-timeline class="changelog-timeline">
          <el-timeline-item
            v-for="{ version, date, entries } in changelogs"
            :key="version"
            :type="getTimelineItemType(entries)"
            :hollow="true"
            size="large"
          >
            <div class="changelog-version-header">
              <span class="changelog-version">{{ version }}</span>
              <el-tag size="small" round effect="plain">
                {{ date }}
              </el-tag>
            </div>
            <ul class="changelog-entries">
              <li
                v-for="({ type, description, pr, author }, idx) in entries"
                :key="idx"
                class="changelog-entry"
              >
                <span class="changelog-entry-icon">
                  {{ getTypeIcon(type) }}
                </span>
                <span
                  class="changelog-entry-desc"
                  v-html="renderDescription(description)"
                />
                <el-link
                  v-if="pr"
                  type="primary"
                  :href="`https://github.com/element-plus/element-plus/pull/${pr}`"
                  underline="always"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #{{ pr }}
                </el-link>
                <el-link
                  v-if="author"
                  :href="`https://github.com/${author}`"
                  underline="always"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{{ author }}
                </el-link>
              </li>
            </ul>
          </el-timeline-item>
        </el-timeline>
      </el-drawer>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.vp-component-changelog {
  margin-top: 12px;
  margin-bottom: 16px;

  .component-meta-card {
    .issue-count {
      margin-left: 6px;
      min-width: 14px;
    }
  }
}

.changelog-drawer {
  .changelog-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 16px;
  }

  .changelog-drawer-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  .changelog-version-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .changelog-version {
    font-size: 16px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  .changelog-entries {
    margin: 0;
    padding: 0;
    list-style: circle;
  }

  .changelog-entry {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--el-text-color-regular);
  }

  .changelog-entry-icon {
    flex-shrink: 0;
    width: 20px;
    text-align: center;
  }

  .changelog-entry-desc {
    margin-right: 6px;
    min-width: 0;
    word-break: break-word;

    :deep(code) {
      padding: 2px 6px;
      color: var(--el-color-primary);
      background-color: var(--el-color-primary-light-9);
      border-radius: 4px;
    }

    :deep(a) {
      color: var(--el-color-primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.changelog-timeline {
  padding-left: 16px;
}
</style>
