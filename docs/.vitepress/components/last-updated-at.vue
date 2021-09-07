<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { useLang } from '../utils/routes'
import localeData from '../i18n/component/last-update-at.json'

const { theme, page } = useData()
const lang = useLang()

const prefix = computed(() => {
  return localeData[lang.value].title
})

const datetime = ref('')
onMounted(() => {
  datetime.value = new Date(page.value.lastUpdated).toLocaleString(lang.value)
})
</script>

<template>
  <p class="last-updated">
    <span class="prefix">{{ prefix }}:</span>
    <span class="datetime">{{ datetime }}</span>
  </p>
</template>

<style scoped>
.last-updated {
  display: inline-block;
  margin: 0;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--text-color-light);
}

@media (min-width: 960px) {
  .last-updated {
    font-size: 1rem;
  }
}

.prefix {
  display: inline-block;
  font-weight: 500;
}

.datetime {
  display: inline-block;
  margin-left: 6px;
  font-weight: 400;
}
</style>
