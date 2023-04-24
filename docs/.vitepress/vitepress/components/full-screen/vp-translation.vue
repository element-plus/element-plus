<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import VPLink from '../common/vp-link.vue'
import { useTranslation } from '../../composables/translation'
import ExpandIcon from '../icons/expand.vue'

const emit = defineEmits(['close'])

const { languageMap, langs, lang, switchLang, locale } = useTranslation()

const [show, toggle] = useToggle()

const onSwitchLang = (lang: string) => {
  switchLang(lang)
  emit('close')
}
</script>

<template>
  <div class="full-screen-translation">
    <ElButton
      :aria-label="locale.language"
      :aria-expanded="show"
      aria-controls="translation-items"
      style="width: 100%; color: var(--text-color)"
      text
      @click="toggle()"
    >
      <div class="translation-toggler">
        <span> Translations </span>
        <ElIcon :size="14">
          <ExpandIcon class="toggle-icon" :class="{ expanded: show }" />
        </ElIcon>
      </div>
    </ElButton>
    <div v-show="show" class="translation-items">
      <p
        v-for="l in langs"
        :key="l"
        :class="{ active: l === lang }"
        tabindex="0"
        role="link"
        class="translation-item"
        @click="onSwitchLang(l)"
        @keydown.prevent.enter="onSwitchLang(l)"
        @keydown.prevent.space="onSwitchLang(l)"
      >
        {{ languageMap[l] }}
      </p>
      <p class="translation-item">
        <VPLink :href="`/${lang}/guide/translation`">
          {{ locale.help }}
        </VPLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-screen-translation {
  border-bottom: 1px solid var(--border-color);
}
.translation-toggler {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 24px;
  .toggle-icon {
    transition: transform var(--el-transition-duration);
    transform: rotate(180deg);

    &.expanded {
      transform: rotate(0deg);
    }
  }
}

.translation-items {
  padding-bottom: 12px;
  .translation-item {
    cursor: pointer;
    margin: 0;
    font-size: 14px;
    line-height: 32px;

    &.active {
      font-weight: 500;
      color: var(--brand-color);
    }

    .link-item {
      font-weight: 500;
    }
  }
}
</style>
