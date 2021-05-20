<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>{{ langConfig.links }}</h4>
        <a href="https://github.com/element-plus/element-plus" class="footer-main-link" target="_blank">{{ langConfig.repo }}</a>
        <a href="https://github.com/element-plus/element-plus/releases" class="footer-main-link" target="_blank">{{ langConfig.changelog }}</a>
        <a href="https://github.com/element-plus/element-plus-starter" class="footer-main-link" target="_blank">{{ langConfig.starter }}</a>
        <a :href="'/#/' + lang + '/component/custom-theme'" class="footer-main-link" target="_blank">{{ langConfig.theme }}</a>
      </div>
      <div class="footer-main">
        <h4>{{ langConfig.community }}</h4>
        <a :href="gitterLink" class="footer-main-link" target="_blank">{{ langConfig.gitter }}</a>
        <a href="https://github.com/element-plus/element-plus/issues" class="footer-main-link" target="_blank">{{ langConfig.feedback }}</a>
        <a :href="`https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.${ lang }.md`" class="footer-main-link" target="_blank">{{ langConfig.contribution }}</a>
        <a href="https://segmentfault.com/t/element-plus" class="footer-main-link" target="_blank">SegmentFault</a>
      </div>
      <div class="footer-social">
        <p class="footer-social-title">Element Team</p>
        <el-popover
          ref="weixin"
          v-model:visible="footerVisible"
          placement="top"
          width="120"
          popper-class="footer-popover"
          trigger="hover"
        >
          <template #reference>
            <i class="doc-icon-weixin elementdoc"></i>
          </template>
          <template #default>
            <div class="footer-popover-title">{{ langConfig.eleme }} UED</div>
            <img src="../assets/images/qrcode.png" alt="">
          </template>
        </el-popover>
        <a href="https://github.com/element-plus/element-plus" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import compoLang from '../i18n/component.json'
import { Language } from '../enums/language'
const version = '1.0.0' // element version

export default {
  data() {
    return {
      version,
      footerVisible: false,
    }
  },

  computed: {
    lang() {
      return this.$route.path.split('/')[1] || Language.CN
    },

    langConfig() {
      return compoLang.filter(config => config.lang === this.lang)[0]['footer']
    },

    gitterLink() {
      return this.lang === Language.CN ? 'https://gitter.im/ElemeFE/element' : 'https://gitter.im/element-en/Lobby'
    },
  },
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #F7FBFD;
    width: 100%;
    padding: 40px 150px;
    margin-top: -340px;
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
        color: #333;
        line-height: 1;
        margin: 0 0 15px 0;
      }

      .footer-main-link {
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;

        &:hover {
          color: #333;
        }
      }
    }

    .footer-social {
      float: right;
      text-align: right;

      .footer-social-title {
        color: #666;
        font-size: 18px;
        line-height: 1;
        margin: 0 0 20px 0;
        padding: 0;
        font-weight: bold;
      }

      .elementdoc {
        transition: .3s;
        display: inline-block;
        line-height: 32px;
        text-align: center;
        color: #c8d6e8;
        background-color: transparent;
        size: 32px;
        font-size: 32px;
        vertical-align: middle;
        margin-right: 20px;
        &:hover {
          transform: scale(1.2);
          color: #8D99AB;
        }
      }

      .doc-icon-gitter {
        margin-right: 0;
      }
    }
  }

  .el-popover.footer-popover {
    padding: 0;
    min-width: 120px;
    line-height: normal;
    box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);

    .footer-popover-title {
      border-bottom: solid 1px #eaeefb;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #99a9bf;
      background-color: #f8f9fe;
    }

    img {
      size: 100px;
      margin: 10px;
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

