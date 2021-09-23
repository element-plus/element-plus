/* eslint-disable */
const fs = require('fs')
const path = require('path')
const sidebars = require('./sidebars')
const nav = require('./nav')
const mdPlugin = require('./plugins')
const features = require('./features')

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
console.log(process.env.DOC_ENV)

const languages = fs.readdirSync(path.resolve(__dirname, './crowdin'))

const head = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/element-plus-logo-small.svg',
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
    'link',
    {
      rel: 'stylesheet',
      href: '//unpkg.com/nprogress@0.2.0/nprogress.css',
    },
  ],
  [
    'script',
    {},
    `;(() => {
      window.supportedLangs = ${JSON.stringify(languages)}
    })()`,
  ],

  [
    'script',
    {},
    require('fs').readFileSync(path.resolve(__dirname, './lang.js'), 'utf-8'),
  ],
]

if (features.theme) {
  head.push([
    'script',
    {},
    require('fs').readFileSync(
      path.resolve(__dirname, './darkmode.js'),
      'utf-8'
    ),
  ])
}

module.exports = {
  title: 'Element Plus',
  head,
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
    features,
    langs: languages,
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
    server: {
      host: true,
    },
    sourcemap: true,
    ...(process.env.DOC_ENV === 'production'
      ? {}
      : {
          resolve: {
            alias: [
              {
                find: /^element-plus$/,
                replacement: path.resolve(
                  __dirname,
                  '../../dist/element-plus/es/index'
                ),
              },
              {
                find: /^element-plus\/lib\/utils\/(.*)/,
                replacement: path.resolve(
                  __dirname,
                  '../../dist/element-plus/es/utils/$1'
                ),
              },
            ],
          },
        }),
  },
}
