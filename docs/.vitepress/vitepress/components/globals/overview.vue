<template>
  <div class="overview-container">
    <div class="search-content">
      <el-input
        ref="searchRef"
        v-model="query"
        :prefix-icon="Search"
        size="large"
        placeholder="Search Components"
      />
    </div>

    <div class="main-content">
      <div
        v-for="(group, groupIndex) in filteredSidebars"
        :key="groupIndex"
        class="component-group"
      >
        <p class="component-title">
          {{ group.text }}
          <el-tag effect="dark" round size="small">
            {{ group.children.length }}
          </el-tag>
        </p>
        <div class="card-content">
          <el-card
            v-for="(item, index) in group.children"
            :key="index"
            tabindex="0"
            shadow="hover"
            @click="toPage(item.link)"
            @keydown.enter="toPage(item.link)"
          >
            <template #header>
              <el-text truncated>{{ item.text }}</el-text>
              <span v-if="item.promotion" class="vp-tag">
                {{ item.promotion }}
              </span>
            </template>

            <template #default>
              <component :is="getIcon(item.link)" v-if="getIcon(item.link)" />
              <span v-else>Todo</span>
            </template>
          </el-card>
        </div>
      </div>

      <el-empty
        v-if="!filteredSidebars.length"
        :description="locale['empty-description']"
      />

      <p class="designed-by">
        Icons designed by
        <el-link
          type="primary"
          :underline="false"
          href="https://github.com/daodaozz08"
          target="_blank"
        >
          @叨叨
        </el-link>
        <el-link
          type="primary"
          :underline="false"
          href="https://github.com/zhiwendesign"
          target="_blank"
        >
          @卡卡
        </el-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vitepress'
import { Search } from '@element-plus/icons-vue'
import overviewLocale from '../../../i18n/component/overview.json'
import type { InputInstance } from 'element-plus'
import { useSidebar } from '~/composables/sidebar'
import { useLang } from '~/composables/lang'
import overviewIcons from '~/components/overview-icons'

const lang = useLang()
const router = useRouter()
const { sidebars } = useSidebar()

const query = ref('')
const searchRef = ref<InputInstance>()
const locale = computed(() => overviewLocale[lang.value])
const filteredSidebars = computed(() =>
  sidebars.value
    .slice(1)
    .map((group) => ({
      ...group,
      children: group.children.filter((item) => {
        const value = query.value.trim().toLowerCase()
        return (
          group.text.toLowerCase().includes(value) ||
          item.text.toLowerCase().includes(value) ||
          item.promotion?.includes(value)
        )
      }),
    }))
    .filter((group) => group.children.length)
)

const toPage = (link: string) => {
  router.go(link)
}

const getIcon = (link: string) => {
  const name = link.split('/').pop()
  return name ? overviewIcons[name] : null
}

onMounted(() => {
  nextTick(() => {
    searchRef.value?.focus()
  })
})
</script>

<style scoped lang="scss">
.overview-container {
  position: relative;

  .search-content {
    position: sticky;
    top: 60px;
    z-index: 10;

    .el-input {
      background: var(--bg-color);
    }
  }

  .main-content {
    .component-group {
      margin-top: 32px;

      .component-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        color: var(--el-text-color-primary);
        gap: 8px;
      }

      .card-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;

        :deep(.el-card) {
          cursor: pointer;
          transition: none;

          &:focus-visible {
            outline: 2px solid var(--el-color-primary);
            outline-offset: 1px;
          }

          .el-card__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;

            .el-text {
              font-size: 14px;
              font-weight: 500;
              color: var(--el-text-color-regular);
              line-height: 24px;
            }
          }

          .el-card__body {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 280 / 180;

            svg {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    .designed-by {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      font-size: 14px;
    }
  }
}
</style>
