export const rightRichTextSponsors = []

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
    name: 'VForm',
    img: '/images/vform.png',
    url: 'https://vform666.com/vform3.html?from=element_plus',
    slogan: 'Vue 2/3 Visual/Low-Code Forms',
    slogan_cn: 'Vue 2/3 可视化低代码表单',
    banner_img: '/images/vform-banner.png',
  },
  {
    name: 'JSDesign',
    name_cn: '即时设计',
    img: '/images/js-design.png',
    url: 'https://js.design?source=element-plus',
    slogan: 'Professional online UI design tool',
    slogan_cn: '专业在线UI设计工具',
    banner_img: '/images/js-design-banner.jpg',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
