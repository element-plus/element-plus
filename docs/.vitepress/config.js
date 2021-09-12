/* eslint-disable */
const sidebars = require('./sidebars')
const nav = require('./nav')
const mdPlugin = require('./plugins')

const transformer = () => {
  return {
    props: [],
    needRuntime: true,
  }
}

const buildTransformers = () => {
  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

module.exports = {
  title: 'ElementPlus',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//fonts.loli.net/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
      },
    ],
    [
      'script',
      {},
      require('fs').readFileSync(
        require('path').resolve(__dirname, './darkmode.js'),
        'utf-8'
      ),
    ],
  ],
  themeConfig: {
    repo: 'element-plus/element-plus',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '/images/element-plus-logo.svg',
    logoSmall: '/images/element-plus-logo-small.svg',
    sidebars,
    nav,
    agolia: {
      apiKey: 'e32c681af38f324039e81d81834e70b8',
      appId: '7DCTSU0WBW',
    },
  },

  markdown: {
    config: (md) => {
      mdPlugin(md)
    },
  },
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
  vite: {
    sourcemap: true,
  },
}
