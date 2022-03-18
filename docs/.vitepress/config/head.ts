import fs from 'fs'
import path from 'path'
import { vpRoot } from '@element-plus/build'
import { languages } from '../utils/lang'
import { features } from './features'
import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
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
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175337989-1');`,
  ],
]
if (features.theme) {
  head.push([
    'script',
    {},
    fs.readFileSync(path.resolve(vpRoot, 'dark-mode.js'), 'utf-8'),
  ])
}
