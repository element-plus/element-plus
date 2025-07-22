export type Sponsor = {
  url: string
  name_cn?: string
  name: string
  slogan_cn?: string
  slogan: string
  img: string
  isDark?: boolean
  imgL?: string
  slogan_index?: string
  banner_img?: string
  className?: string
}

export const rightRichTextSponsors: Sponsor[] = []

export const rightBigLogoSponsors: Sponsor[] = [
  {
    name: 'CRMEB',
    img: '/images/CRMEB.png',
    imgL: '/images/CRMEB-l.png',
    url: 'http://github.crmeb.net/u/Elementyouce',
    slogan: 'High-quality open source mall system',
    slogan_cn: '高品质开源商城系统 累计服务40W+开发者',
    slogan_index: '高品质开源商城系统累计服务40W+开发者',
  },
]

export const rightLogoSmallSponsors: Sponsor[] = [
  {
    name: 'BuildAdmin',
    img: '/images/buildadmin.png',
    imgL: '/images/buildadmin-l.png',
    url: 'https://doc.buildadmin.com/?from=element-plus',
    slogan: 'Vue3 open source admin system',
    slogan_cn: 'Vue3企业级开源后台管理系统',
  },
  {
    name: 'Fantastic-admin',
    img: '/images/fantastic-admin.png',
    imgL: '/images/fantastic-admin-l.png',
    url: 'https://fantastic-admin.github.io/?from=element-plus',
    slogan: 'An out-of-the-box backend framework',
    slogan_cn: '开箱即用的 Vue 后台管理框架',
  },
  {
    name: 'frsimple',
    img: '/images/frsimple.png',
    imgL: '/images/frsimple-l.png',
    url: 'https://el.frsimple.com',
    slogan: 'A simple and efficient front-end framework',
    slogan_cn: '数智底座',
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

export const leftCustomImgSponsors: Sponsor[] = [
  {
    name: '美乐',
    img: '/images/mele.png',
    url: 'https://melecode.com/prom.html',
    slogan: 'Enterprise-level low-code development platform',
    slogan_cn: '企业级全栈低代码开发平台',
    banner_img: '/images/mele-banner.png',
  },
  {
    name: 'JNPF',
    img: '/images/jnpf_index.png',
    url: 'https://www.jnpfsoft.com/index.html?from=elementUI',
    slogan: 'JNPF low code development platform to develop simple!',
    slogan_cn: 'JNPF 低代码开发平台，让开发变得简单！',
    className: 'jnpf',
    banner_img: '/images/jnpfsoft.png',
  },
  {
    name: 'MISBoot',
    img: '/images/misboot-logo.png',
    banner_img: '/images/misboot-left.png',
    url: 'https://vue.misboot.com/#/login?from=element-plus',
    slogan: 'Low code development platform built on Element Plus',
    slogan_cn: '基于Element Plus构建的低代码开发平台',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors: Sponsor[] = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
