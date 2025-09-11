import fs from 'fs'
import path from 'path'
import { vpRoot } from '@element-plus/build-utils'
import { languages } from '../utils/lang'

import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/element-plus-logo-small.svg',
      type: 'image/svg+xm',
    },
  ],
  [
    'meta',
    {
      property: 'og:image',
      content: '/images/element-plus-og-image.png',
    },
  ],
  [
    'meta',
    {
      property: 'og:image:width',
      content: '1200',
    },
  ],
  [
    'meta',
    {
      property: 'og:image:height',
      content: '630',
    },
  ],
  [
    'meta',
    {
      property: 'og:description',
      content: 'A Vue 3 based component library for designers and developers',
    },
  ],
  [
    'meta',
    {
      name: 'baidu-site-verification',
      content: 'codeva-q5gBxYcfOs',
    },
  ],
  [
    'script',
    {},
    `;(() => {
      window.supportedLangs = ${JSON.stringify(languages)}
    })()`,
  ],

  ['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')],
  [
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-175337989-1',
    },
  ],
  [
    'script',
    {},
    `if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach(sw => sw.unregister())
      })
    }`,
  ],
  [
    'script',
    {
      async: 'true',
    },
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175337989-1');`,
  ],
  [
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-M74ZHEQ1M1',
    },
  ],
  [
    'script',
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M74ZHEQ1M1');
    `,
  ],
  [
    'script',
    {
      async: 'true',
    },
    `
  var resource = document.createElement('link');
  resource.setAttribute("rel", "stylesheet");
  resource.setAttribute("href","https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800|Open+Sans:400,600;display=swap");
  resource.setAttribute("type","text/css");
  var head = document.querySelector('head');
  head.appendChild(resource);
    `,
  ],
]
