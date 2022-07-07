export const rightRichTextSponsors = [
  {
    name: 'Fantastic-admin',
    img: '/images/sponsors/fantasticadmin.png',
    url: 'https://hooray.gitee.io/fantastic-admin/?from=element-plus',
    slogan: 'An out-of-the-box backend framework',
    slogan_cn: '开箱即用的后台框架 为开发提供舒适体验',
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

export const leftLogoSponsors = [
  {
    name: 'bit',
    img: '/images/bit.svg',
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
    isDark: true, // dark theme
  },
  {
    name: 'renren.io',
    name_cn: '人人开源',
    img: '/images/renren.png',
    url: 'https://www.renren.io/?from=element-ui',
    slogan: 'Rapid development platform',
    slogan_cn: '企业级的快速开发平台',
    className: 'renren',
  },
  {
    name: 'FormMaking',
    name_cn: 'FormMaking',
    img: '/images/formmaking.png',
    url: 'https://form.making.link/?from=element_plus',
    slogan: 'Vue form designer',
    slogan_cn: 'Vue表单设计器，赋能企业快速开发',
  },
]

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
