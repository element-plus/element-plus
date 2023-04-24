<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/last-update-at.json'

const { page } = useData()
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
  <p class="last-updated text-sm">
    <span class="prefix">{{ prefix }}:</span>
    <span class="datetime">{{ datetime }}</span>
  </p>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;

.last-updated {
  display: inline-block;
  margin: 0;
  line-height: 1.4;
  color: var(--text-color-light);

  .prefix {
    display: inline-block;
    font-weight: 500;
  }

  .datetime {
    display: inline-block;
    margin-left: 6px;
    font-weight: 400;
  }
}
</style>
