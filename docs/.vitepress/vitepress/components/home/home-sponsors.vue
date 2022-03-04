<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import { sponsors } from '../../../config/sponsors'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()

const homeLang = computed(() => homeLocale[lang.value])
const langZhCN = 'zh-CN'

const getSponsorName = (sponsor) => {
  if (lang.value === langZhCN) {
    return sponsor.name_cn || sponsor.name
  }
  return sponsor.name
}
const getSponsorSlogan = (sponsor) => {
  if (lang.value === langZhCN) {
    return sponsor.slogan_cn || sponsor.slogan
  }
  return sponsor.slogan
}
</script>

<template>
  <div class="sponsors-container">
    <div class="sponsors-list">
      <a
        v-for="(sponsor, i) in sponsors"
        :key="i"
        :class="['sponsor', sponsor.className]"
        :href="sponsor.url"
        target="_blank"
      >
        <img width="45" :src="sponsor.img" :alt="sponsor.name" />
        <div>
          <p>
            Sponsored by
            <span class="name">{{ getSponsorName(sponsor) }}</span>
          </p>
          <p>{{ getSponsorSlogan(sponsor) }}</p>
        </div>
      </a>
    </div>
    <div class="join">
      <el-tooltip placement="top" :hide-after="1000" :offset="20">
        <template #content>
          {{ homeLang['21'] }}
          <a href="mailto:element-plus@outlook.com" target="_blank">
            &nbsp;element-plus@outlook.com
          </a>
        </template>
        <a href="mailto:element-plus@outlook.com" target="_blank">
          <el-button round>{{ homeLang['20'] }}</el-button>
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  .sponsors-container {
    width: 92%;
    margin: 0 auto;
    .join {
      text-align: center;
      margin: 0 0 50px 0;
    }
  }

  .sponsors-list {
    display: flex;
    justify-content: center;
  }

  .sponsor {
    margin: 0 20px 10px;
    display: inline-flex;
    width: 300px;
    height: 100px;
    justify-content: center;
    align-items: center;

    .name {
      font-weight: bold;
      color: var(--text-color);
    }

    img {
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: var(--text-color-light);
      font-size: 12px;
    }
  }
}
</style>
