<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'

const lang = useLang()

const homeLang = computed(() => homeLocale[lang.value])
</script>

<template>
  <div class="cards">
    <el-card shadow="hover">
      <guide-svg w="40" m="y-12" />
      <h3>{{ homeLang['3'] }}</h3>
      <p>{{ homeLang['4'] }}</p>
      <template #footer>
        <a :href="`/${lang}/guide/design.html`">{{ homeLang['5'] }}</a>
      </template>
    </el-card>
    <el-card shadow="hover">
      <component-svg w="40" m="y-12" />
      <h3>{{ homeLang['6'] }}</h3>
      <p>{{ homeLang['7'] }}</p>
      <template #footer>
        <a :href="`/${lang}/component/overview.html`">
          {{ homeLang['5'] }}
        </a>
      </template>
    </el-card>
    <el-card shadow="hover">
      <resource-svg w="40" m="y-12" />
      <h3>{{ homeLang['8'] }}</h3>
      <p>{{ homeLang['9'] }}</p>
      <template #footer>
        <a :href="`/${lang}/resource/index.html`"> {{ homeLang['5'] }} </a>
      </template>
    </el-card>
  </div>
</template>

<style lang="scss">
.home-page {
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 0 auto 80px;
    max-width: 1200px;
  }

  .el-card {
    height: 430px;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    bottom: 0;

    .el-card__body {
      padding: 0;
      height: 100%;
    }

    .el-card__footer {
      position: sticky;
      bottom: 0;
      padding: 0;
    }

    img {
      margin: 48px auto;
    }

    h3 {
      margin: 0;
      font-size: 18px;
      color: var(--el-text-color-primary);
      font-weight: normal;
    }

    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
      line-height: 20px;
      margin: 16px 0;
    }

    a {
      line-height: 52px;
      font-size: 14px;
      color: var(--brand-color);
      text-align: center;
      border: 0;
      padding: 0;
      cursor: pointer;
      background-color: var(--bg-color);
      transition: all 0.3s;
      text-decoration: none;
      display: block;

      &:hover {
        color: #fff;
        background: var(--brand-color);
      }
    }

    &:hover {
      bottom: 6px;
    }
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
    }

    .el-card {
      height: auto;
    }
  }
}
</style>
