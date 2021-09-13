<script setup lang="ts">
import { useEditLink } from '../../composables/edit-link'
import ExternalIcon from '../icons/external-link-icon.vue'

const { url, text } = useEditLink()
</script>

<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ text }}
      <ElIcon :size="16" style="vertical-align: text-top; line-height: 24px">
        <ExternalIcon />
      </ElIcon>
    </a>
  </div>
</template>

<style scoped>
.link {
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color-light);
}

.link:hover {
  text-decoration: none;
  color: var(--brand-color);
}

.icon {
  margin-left: 4px;
}
</style>
