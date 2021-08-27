module.exports = {
  title: 'ElementPlus',
  themeConfig: {
    logo: '../assets/images/element-plus-logo.svg',
    logoSmall: '../assets/images/element-plus-logo-small.svg',
    sidebar: {
      '/guide/': getGuideSideBar(),
      '/component/': getComponentsSideBar(),
    }
  },
}

function getGuideSideBar() {
  return []
}

function getComponentsSideBar() {
  return []
}
