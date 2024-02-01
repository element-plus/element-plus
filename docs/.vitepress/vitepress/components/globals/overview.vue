<template>
  <div class="overview-container">
    <div class="search-content">
      <el-input
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
            shadow="hover"
            @click="toPage(item.link)"
          >
            <template #header>
              <el-text truncated>{{ item.text }}</el-text>
            </template>
            <ov-button />
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vitepress'
import { Search } from '@element-plus/icons-vue'
import { useSidebar } from '~/composables/sidebar'

const router = useRouter()
const { sidebars } = useSidebar()

const query = ref('')

const filteredSidebars = computed(() =>
  sidebars.value
    .slice(1)
    .map((group) => ({
      ...group,
      children: group.children.filter((item) =>
        item.text.toLowerCase().includes(query.value.trim().toLowerCase())
      ),
    }))
    .filter((group) => group.children.length)
)

const toPage = (link: string) => {
  router.go(link)
}
</script>

<style scoped lang="scss">
.overview-container {
  position: relative;

  .search-content {
    position: sticky;
    top: 60px;

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
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        ::v-deep(.el-card) {
          cursor: pointer;

          .el-card__header {
            display: flex;
            padding: 8px 12px;

            .el-text {
              font-size: 14px;
              font-weight: 500;
              color: var(--el-text-color-regular);
            }
          }

          .el-card__body {
            padding: 0;
            display: flex;

            svg {
              width: 100%;
              height: auto;
            }
          }
        }

        @media (max-width: 1440px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1200px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
}
</style>
