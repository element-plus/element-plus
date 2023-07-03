export const rightRichTextSponsors = [
  {
    name: 'MISBoot',
    img: '/images/sponsors/MISBoot.png',
    url: 'https://www.misboot.com/?from=element-plus',
    slogan: 'Low-code platform for rapid development',
    slogan_cn: '低代码开发平台，应用可视化快速开发',
    slogan_index: '低代码开发平台，应用快速开发',
  },
]

export const rightLogoSmallSponsors = [
  {
    name: 'BuildAdmin',
    img: '/images/sponsors/buildadmin.png',
    imgL: '/images/sponsors/buildadmin-l.png',
    url: 'https://wonderful-code.gitee.io/?from=element-plus',
    slogan: 'Vue3 opensource admin system',
    slogan_cn: 'Vue3企业级开源后台管理系统',
  },
  {
    name: 'bit',
    img: '/images/bit.svg',
    imgL: '/images/bit-l.png',
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
    isDark: true, // dark theme
  },
]

export const leftCustomImgSponsors = [
  {
    name: 'JSDesign',
    name_cn: '即时设计',
    img: '/images/js-design.png',
    url: 'https://js.design/?source=element-plus&plan=sy',
    slogan: 'Professional online UI design tool',
    slogan_cn: '专业在线UI设计工具',
    banner_img: '/images/js-design-banner.jpg',
  },
  {
    name: 'VForm',
    img: '/images/vform.png',
    url: 'https://vform666.com/',
    slogan: 'Vue 2/3 Visual/Low-Code Forms',
    slogan_cn: 'Vue 2/3 可视化低代码表单',
    banner_img: '/images/vform-banner.png',
  },
  {
    name: 'JNPF',
    img: '/images/jnpf_index.png',
    url: 'https://www.jnpfsoft.com/index.html?from=elementUI',
    slogan: 'JNPF low code development platform to develop simple!',
    slogan_cn: 'JNPF 低代码开发平台，让开发变得简单！',
    className: 'jnpf',
    banner_img: '/images/sponsors/jnpfsoft.jpg',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
