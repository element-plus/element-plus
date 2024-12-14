export const rightRichTextSponsors = []

export const rightBigLogoSponsors = [
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

export const rightLogoSmallSponsors = [
  {
    name: 'BuildAdmin',
    img: '/images/buildadmin.png',
    imgL: '/images/buildadmin-l.png',
    url: 'https://doc.buildadmin.com/?from=element-plus',
    slogan: 'Vue3 open source admin system',
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
    name: '美乐',
    img: '/images/mele.png',
    url: 'https://melecode.com/',
    slogan: 'Enterprise-level low-code development platform',
    slogan_cn: '企业级全栈低代码开发平台',
    banner_img: '/images/mele-banner.png',
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
    banner_img: '/images/jnpfsoft.png',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
