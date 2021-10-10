<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { withBase } from 'vitepress'

import { useParallax } from '@vueuse/core'
import type { CSSProperties } from 'vue'

const target = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(target))

const sponsors = [
  {
    name: 'bit',
    img: withBase('/images/bit.svg'),
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
  },
  {
    name: 'renren.io',
    img: withBase('/images/renren.png'),
    url: 'https://www.renren.io/?from=element-ui',
    slogan: 'Rapid development platform',
    className: 'renren',
  },
]

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.3s ease-out all',

  position: 'relative',

  perspective: '300px',
}

const cardStyle = computed(() => ({
  background: '#fff',
  minHeight: '30rem',
  width: '50rem',
  borderRadius: '5px',
  transition: '.3s ease-out all',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${parallax.roll}deg) rotateY(${parallax.tilt}deg)`,
}))

const layerBase: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: '.3s ease-out all',
}

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1)`,
}))
</script>

<template>
  <div ref="target" class="home-page">
    <div class="banner">
      <div class="banner-desc">
        <h1>A Desktop UI Library</h1>
        <p>
          Element Plus, a Vue 3 based component library for developers,
          designers and product managers
        </p>
      </div>
    </div>
    <div class="jumbotron">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div class="banner" :style="layer0">
            <img src="/images/theme-index-blue.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
    <div class="sponsors">
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
            <span class="name">{{ sponsor.name }}</span>
          </p>
          <p>{{ sponsor.slogan }}</p>
        </div>
      </a>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="/images/guide.png" alt="" />
            <h3>Guide</h3>
            <p>
              Understand the design guidelines, helping designers build product
              that's logically sound, reasonably structured and easy to use.
            </p>
            <a href="/en-US/guide/design.html"> View Detail </a>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="/images/component.png" alt="" />
            <h3>Component</h3>
            <p>
              Experience interaction details by strolling through component
              demos. Use encapsulated code to improve developing efficiency.
            </p>
            <a href="/en-US/component/layout.html"> View Detail </a>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="/images/resource.png" alt="" />
            <h3>Resource</h3>
            <p>
              Download relevant design resources for shaping page prototype or
              visual draft, increasing design efficiency.
            </p>
            <a href="/en-US/resource/index.html"> View Detail </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-main">
      <h4>Links</h4>
      <a
        href="https://github.com/element-plus/element-plus"
        class="footer-main-link"
        target="_blank"
      >
        GitHub
      </a>
      <a
        href="https://github.com/element-plus/element-plus/releases"
        class="footer-main-link"
        target="_blank"
      >
        Changelog
      </a>
      <a
        href="https://github.com/element-plus/element-plus-starter"
        class="footer-main-link"
        target="_blank"
      >
        Starter kit
      </a>
      <a
        href="/en-US/component/custom-theme"
        class="footer-main-link"
        target="_blank"
      >
        Online Theme Roller
      </a>
    </div>

    <div class="footer-main">
      <h4>Community</h4>
      <a
        href="https://gitter.im/element-en/Lobby"
        class="footer-main-link"
        target="_blank"
        >Gitter</a
      >
      <a
        href="https://github.com/element-plus/element-plus/issues"
        class="footer-main-link"
        target="_blank"
      >
        Feedback
      </a>
      <a
        href="https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.en-US.md"
        class="footer-main-link"
        target="_blank"
      >
        Contribution
      </a>
      <a
        href="https://segmentfault.com/t/element-plus"
        class="footer-main-link"
        target="_blank"
      >
        SegmentFault
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.home-page {
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 30px;

    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: var(--text-color);
    }

    p {
      font-size: 18px;
      line-height: 28px;
      color: var(--text-color-light);
      margin: 20px 0 5px;
    }
  }

  .sponsors {
    display: flex;
    justify-content: center;
  }

  .sponsor {
    margin: 0 20px 50px;
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
      font-size: 14px;
    }
  }
  .jumbotron {
    width: 890px;
    margin: 30px auto;
    position: relative;
    img {
      width: 100%;
    }
    .jumbotron-red {
      transition: height 0.1s;
      background: #fff;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
    }
  }
  .cards {
    margin: 0 auto 110px;
    width: 1140px;

    .container {
      padding: 0;
      margin: 0 -11px;
      width: auto;
      &::before,
      &::after {
        display: table;
        content: '';
      }
      &::after {
        clear: both;
      }
    }

    li {
      width: 33.3%;
      padding: 0 19px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }

    img {
      width: 160px;
      height: 120px;
    }
  }
  .card {
    height: 430px;
    width: 100%;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all 0.3s ease-in-out;
    bottom: 0;

    img {
      margin: 66px auto 60px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
      color: #1f2f3d;
      font-weight: normal;
    }
    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
      line-height: 20px;
    }
    a {
      height: 53px;
      line-height: 52px;
      font-size: 14px;
      color: var(--brand-color);
      text-align: center;
      border: 0;
      border-top: 1px solid var(--border-color);
      padding: 0;
      cursor: pointer;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--bg-color);
      border-radius: 0 0 5px 5px;
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
      box-shadow: 0 6px 18px 0 rgba(232, 237, 250, 0.5);
    }
  }
  @media (max-width: 1140px) {
    .cards {
      width: 100%;
      .container {
        width: 100%;
        margin: 0;
      }
    }
    .banner .container {
      width: 100%;
      box-sizing: border-box;
    }
    .banner img {
      right: 0;
    }
  }

  @media (max-width: 1000px) {
    .banner .container {
      img {
        display: none;
      }
    }
    .jumbotron,
    .banner {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .cards {
      li {
        width: 80%;
        margin: 0 auto 20px;
        float: none;
      }
      .card {
        height: auto;
        padding-bottom: 54px;
      }
    }
    .banner-stars {
      display: none;
    }
    .banner-desc {
      #line2 {
        display: none;
      }
      h2 {
        font-size: 32px;
      }
      p {
        width: auto;
      }
    }
  }
  .theme-intro-b {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .intro-banner {
      position: absolute;
    }
    img {
      width: 300px;
    }
    .title {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding: 0;
        margin: 10px 0;
      }
    }
  }
  .theme-intro-a {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: 0.5;
    }
    .intro-banner {
      top: 50%;
      left: 50%;
      position: fixed;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      text-align: center;
      z-index: 100;
      img {
        width: 100%;
      }
      .intro-text {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        p {
          padding: 0;
          margin: 0;
          font-size: 48px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}
.footer {
  background-color: var(--bg-color);
  width: 100%;
  padding: 40px 150px;
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
