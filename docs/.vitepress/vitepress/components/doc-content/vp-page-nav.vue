<script setup lang="ts">
import { withBase } from 'vitepress'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { usePageNav } from '../../composables/page-nav'

const { hasLinks, prev, next } = usePageNav()
</script>

<template>
  <div v-if="hasLinks" class="next-and-prev-link">
    <div class="container">
      <div class="prev">
        <a v-if="prev" class="link" :href="withBase(prev.link)">
          <ElIcon class="mr-1">
            <ArrowLeft />
          </ElIcon>
          <span class="text">{{ prev.text }}</span>
        </a>
      </div>
      <div class="next">
        <a v-if="next" class="link" :href="withBase(next.link)">
          <span class="text">{{ next.text }}</span>
          <ElIcon class="ml-1">
            <ArrowRight />
          </ElIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.next-and-prev-link {
  padding-top: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.prev,
.next {
  display: flex;
  flex-shrink: 0;
  width: 50%;
}

.prev {
  justify-content: flex-start;
  padding-right: 12px;
}

.next {
  justify-content: flex-end;
  padding-left: 12px;
}

.link {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
}

.text {
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.el-icon {
  display: inline-flex;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--text-color);
  transform: translateY(1px);
}

.icon-prev {
  margin-right: 8px;
}
.icon-next {
  margin-left: 8px;
}
</style>
