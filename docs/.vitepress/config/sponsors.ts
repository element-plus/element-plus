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

export const rightBigLogoSponsors: Sponsor[] = []

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
    name: 'frsimple',
    img: '/images/frsimple.png',
    imgL: '/images/frsimple-l.png',
    url: 'https://el.frsimple.com',
    slogan: 'A simple and efficient front-end framework',
    slogan_cn: '信创开发平台',
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
    name: 'JNPF',
    img: '/images/jnpf_index.png',
    url: 'https://www.jnpfsoft.com/index.html?from=elementUI',
    slogan: 'JNPF low code development platform to develop simple!',
    slogan_cn: 'JNPF 低代码开发平台，让开发变得简单！',
    className: 'jnpf',
    banner_img: '/images/jnpfsoft.png',
  },
  {
    name: 'CRMEB',
    img: '/images/CRMEB.png',
    url: 'http://github.crmeb.net/u/Elementyouce',
    slogan: 'High-quality open source mall system',
    slogan_cn: '高品质开源商城系统 累计服务40W+开发者',
    banner_img: '/images/CRMEB-l.jpg',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors: Sponsor[] = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
