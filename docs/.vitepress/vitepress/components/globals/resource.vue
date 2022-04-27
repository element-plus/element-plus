<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import resourceLocale from '../../../i18n/pages/resource.json'
const lang = useLang()
const resourceLang = computed(() => resourceLocale[lang.value])
</script>

<template>
  <div class="page-resource">
    <h1>{{ resourceLang.title }}</h1>
    <p>{{ resourceLang.lineOne }}</p>
    <div class="flex flex-wrap justify-center">
      <div class="inline-flex w-full md:w-1/3" p="2">
        <el-card class="card" shadow="hover">
          <axure-components-svg w="30" alt="axure" />
          <h3>{{ resourceLang.axure }}</h3>
          <p>
            {{ resourceLang.axureIntro }}
          </p>
          <a
            href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib"
          >
            <el-button type="primary">{{ resourceLang.download }}</el-button>
          </a>
        </el-card>
      </div>
      <div class="inline-flex w-full md:w-1/3" p="2">
        <el-card class="card" shadow="hover">
          <sketch-template-svg w="30" alt="Sketch" />
          <h3>{{ resourceLang.sketch }}</h3>
          <p>
            {{ resourceLang.sketchIntro }}
          </p>
          <a
            href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch"
          >
            <el-button type="primary">{{ resourceLang.download }}</el-button>
          </a>
        </el-card>
      </div>
      <div class="inline-flex w-full md:w-1/3" p="2">
        <el-card class="card" shadow="hover">
          <figma-template-svg w="30" alt="Figma" />
          <h3>{{ resourceLang.figma }}</h3>
          <p>
            {{ resourceLang.figmaIntro }}
          </p>
          <a
            href="https://www.figma.com/community/file/1021254029764378306"
            target="_blank"
          >
            <el-button type="primary">{{ resourceLang.download }}</el-button>
          </a>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-resource {
  box-sizing: border-box;
  padding: 0 40px;

  h1 {
    color: var(--text-color);

    + p {
      color: var(--text-color-light);
    }
  }
}

.card {
  text-align: center;
  padding: 32px 0;

  img {
    margin: auto;
    margin-bottom: 16px;
    height: 87px;
  }

  h3 {
    margin: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 30px;
    margin: 0;
    word-break: break-word;
    line-height: 1.8;
    min-height: 75px;
    margin-bottom: 16px;
  }
}
</style>
