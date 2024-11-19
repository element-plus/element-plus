<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VPLink from '../common/vp-link.vue'
import VPMarkdown from '../common/vp-markdown.vue'
import { useLang } from '../../composables/lang'
import { useLocale } from '../../composables/locale'
import changelogLocale from '../../../i18n/component/changelog.json'

interface Release {
  id: number
  name: string
}

const loading = ref(true)
const releases = ref<Release[]>([])
const currentRelease = ref()
const changelog = useLocale(changelogLocale)
const lang = useLang()

const onVersionChange = (val) => {
  const _releases = releases.value
  currentRelease.value = _releases[_releases.findIndex((r) => r.name === val)]
}

onMounted(async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/element-plus/element-plus/releases'
    )
    const data: Release[] = await response.json()
    if (response.ok) {
      releases.value = data
      currentRelease.value = data[0]
    } else {
      releases.value = []
      currentRelease.value = undefined
    }
  } catch {
    releases.value = []
    currentRelease.value = undefined
    // do something
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="changelogs">
    <ClientOnly>
      <ElSkeleton :loading="loading">
        <div class="changelog-versions">
          <p>{{ changelog['select-version'] }}:</p>
          <ElSelect
            :model-value="currentRelease.name"
            :placeholder="changelog['select-version']"
            style="width: 200px"
            @change="onVersionChange"
          >
            <ElOption
              v-for="release in releases"
              :key="release.id"
              :value="release.name"
            >
              {{ release.name }}
            </ElOption>
          </ElSelect>
        </div>
        <ElCard v-if="currentRelease">
          <template #header>
            <div class="changelog-header">
              <div class="changelog-meta">
                <p class="changelog-by">
                  {{ changelog['published-by'] }}
                  <strong>{{ currentRelease.author.login }}</strong>
                </p>
                <p class="changelog-date">
                  {{
                    new Date(currentRelease.published_at).toLocaleString(lang)
                  }}
                </p>
              </div>
              <div class="operators">
                <VPLink :href="currentRelease.html_url">
                  {{ changelog['open-link'] }}
                </VPLink>
              </div>
            </div>
          </template>
          <div>
            <VPMarkdown :content="currentRelease.body" />
          </div>
        </ElCard>
      </ElSkeleton>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.changelog-versions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    margin-right: 2rem;
  }
}
.changelog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .changelog-meta {
    display: flex;
    flex: 1;
    flex-direction: column;
    p {
      margin: 0;
    }
  }

  .link-item {
    line-height: 1.7;
  }
}
</style>
