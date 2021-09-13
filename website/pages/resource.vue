<template>
  <div class="page-container page-resource">
    <h2>{{ langConfig[1] }}</h2>
    <p>{{ langConfig.placeholder2 }}</p>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/Axure-Components.svg" alt="" />
            <h3>{{ langConfig[3] }}</h3>
            <p>{{ langConfig[4] }}</p>
            <a
              onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Axure');"
              href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib"
              >{{ langConfig[5] }}</a
            >
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/Sketch-Template.svg" alt="" />
            <h3>{{ langConfig[6] }}</h3>
            <p>{{ langConfig[7] }}</p>
            <a
              onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Sketch');"
              href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch"
              >{{ langConfig[5] }}</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import pageLang from '../i18n/page.json'

export default {
  data() {
    return {
      lang: this.$route.meta.lang,
    }
  },
  computed: {
    langConfig() {
      return pageLang.filter((config) => config.lang === this.lang)[0].pages
        .resource
    },
  },
}
</script>

