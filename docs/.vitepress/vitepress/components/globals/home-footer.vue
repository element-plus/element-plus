<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])
</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <h4>{{ homeLang['10'] }}</h4>
      <a
        href="https://github.com/element-plus/element-plus"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['11'] }}
      </a>
      <a
        href="https://github.com/element-plus/element-plus/releases"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['12'] }}
      </a>
      <a
        href="https://element.eleme.io/"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['13'] }}
      </a>
      <a
        :href="`/${lang}/guide/theming`"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['14'] }}
      </a>
    </div>

    <div class="footer-main">
      <h4>{{ homeLang['19'] }}</h4>
      <a
        href="https://gitter.im/element-en/Lobby"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['15'] }}
      </a>
      <a
        href="https://github.com/element-plus/element-plus/issues"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['16'] }}
      </a>
      <a
        href="https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.en-US.md"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['17'] }}
      </a>
      <a
        href="https://segmentfault.com/t/element-plus"
        class="footer-main-link"
        target="_blank"
      >
        {{ homeLang['18'] }}
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--bg-color);
  width: 100%;
  padding: 40px 100px;
  box-sizing: border-box;
  height: 340px;

  .container {
    box-sizing: border-box;
    width: auto;
  }

  .footer-main {
    font-size: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 110px;

    h4 {
      font-size: 18px;
      line-height: 1;
      margin: 0 0 15px 0;
    }

    .footer-main-link {
      display: block;
      margin: 0;
      line-height: 2;
      font-size: 14px;
      color: var(--text-color-light);

      &:hover {
        color: var(--text-color);
      }
    }
  }

  .footer-social {
    float: right;
    text-align: right;

    .footer-social-title {
      color: var(--text-color-light);
      font-size: 18px;
      line-height: 1;
      margin: 0 0 20px 0;
      padding: 0;
      font-weight: bold;
    }

    .ep-icon-github {
      transition: 0.3s;
      display: inline-block;
      line-height: 32px;
      text-align: center;
      color: #c8d6e8;
      background-color: transparent;
      font-size: 32px;
      vertical-align: middle;
      margin-right: 20px;
      &:hover {
        transform: scale(1.2);
        color: #8d99ab;
      }
    }

    .doc-icon-gitter {
      margin-right: 0;
    }
  }
}

@media (max-width: 1140px) {
  .footer {
    height: auto;
  }
}

@media (max-width: 1000px) {
  .footer-social {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-main {
      margin-bottom: 30px;
    }
  }
}
</style>
