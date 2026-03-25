<script setup lang="ts">
import { computed } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import { useLang } from '../../composables/lang'
import apiTypingLocale from '../../../i18n/component/api-typing.json'

defineProps({
  type: String,
  details: String,
})

const lang = useLang()
const detail = computed(() => apiTypingLocale[lang.value].detail)
</script>

<template>
  <span class="inline-flex items-center">
    <code class="api-typing mr-1">
      {{ type }}
    </code>
    <ClientOnly>
      <ElTooltip v-if="details" effect="light" trigger="click">
        <ElButton
          text
          :icon="Warning"
          :aria-label="detail"
          class="p-2 text-4"
        />
        <template #content>
          <slot>
            <ElScrollbar
              class="max-w-[600px] text-sm text-[--code-tooltip-color] bg-[--code-tooltip-bg-color]"
            >
              <div class="m-1">
                <pre
                  class="my-0"
                  dir="ltr"
                ><code><span v-for="(code, codeI) in details.split('\\n')" :key="codeI" class="line">{{ code }}
</span></code></pre>
              </div>
            </ElScrollbar>
          </slot>
        </template>
      </ElTooltip>
    </ClientOnly>
  </span>
</template>
