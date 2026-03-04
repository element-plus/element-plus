<script setup lang="ts">
import { computed, ref } from 'vue'
import { Clock, Loading, Warning } from '@element-plus/icons-vue'
import { useWindowSize } from '@vueuse/core'
import { useIssueCount } from '../../composables/use-issue-count'
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

const { count: issueCount, loading: issueLoading } = useIssueCount(
  props.component
)

const hasChangelog = computed(() => changelogs.value.length > 0)

const changelogs = computed<VersionChangelog[]>(
  () => allChangelogs[props.component] || []
)
const issuesUrl = computed(() => {
  const q = encodeURIComponent(`is:open is:issue in:title [${props.component}]`)
  return `https://github.com/element-plus/element-plus/issues?q=${q}`
})

const { width: windowWidth } = useWindowSize()
const drawerSize = computed(() => (windowWidth.value < 768 ? '100%' : '40%'))

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
  // Ensure description ends with a period
  html = html.replace(/([^.]$)/, '$1.')
  return html
}

const openDrawer = () => {
  drawerVisible.value = true
}

const openIssues = () => {
  window.open(issuesUrl.value, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <ClientOnly>
    <div class="vp-component-changelog">
      <el-button-group class="component-meta-card" size="small">
        <el-button v-if="hasChangelog" :icon="Clock" @click="openDrawer">
          {{ locale['changelog'] }}
        </el-button>
        <el-button :icon="Warning" @click="openIssues">
          {{ locale['open-issues'] }}
          <div class="issue-count">
            <span v-if="!issueLoading">{{ issueCount ?? 0 }}</span>
            <el-icon v-else><Loading /></el-icon>
          </div>
        </el-button>
      </el-button-group>

      <el-drawer
        v-if="hasChangelog"
        v-model="drawerVisible"
        class="changelog-drawer"
        :size="drawerSize"
        resizable
        append-to-body
      >
        <template #header>
          <div class="changelog-drawer-header">
            <span class="changelog-drawer-title">
              {{ locale['changelog'] }}
            </span>
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
            hollow
            size="large"
          >
            <div class="changelog-version-header">
              <el-link
                :href="`https://github.com/element-plus/element-plus/releases/tag/${version}`"
                class="changelog-version"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ version }}
              </el-link>
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
    line-height: 1;
  }

  .changelog-version {
    font-size: 16px;
    font-weight: 600;
  }

  .changelog-entries {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .changelog-entry {
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--el-text-color-regular);

    & > span,
    & > a {
      margin-right: 6px;
    }
  }

  .changelog-entry-icon {
    width: 20px;
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
