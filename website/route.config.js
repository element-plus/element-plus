import { defineAsyncComponent } from 'vue'
import navConfig from './nav.config'
import langs from './i18n/route'

const LOAD_MAP = {
  'zh-CN': name => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "zh-CN" */ `./pages/${name}.vue`))
  },
  'en-US': name => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "en-US" */ `./pages/${name}.vue`))
  },
  'es': name => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "es" */ `./pages/${name}.vue`))
  },
  'fr-FR': name => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "fr-FR" */ `./pages/${name}.vue`))
  },
}

const load = function(lang, path) {
  return LOAD_MAP[lang](path)
}

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "DOCS zh-CN" */ `./docs/zh-CN${path}.md`))
  },
  'en-US': path => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "DOCS en-US" */ `./docs/en-US${path}.md`))
  },
  'es': path => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "DOCS es" */ `./docs/es${path}.md`))
  },
  'fr-FR': path => {
    return defineAsyncComponent(() => import(/* webpackChunkName: "DOCS fr-FR" */ `./docs/fr-FR${path}.md`))
  },
}

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path)
}

const registerRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/installation`,
      component: load(lang, 'component'),
      children: [],
    })
    navs.forEach(nav => {
      if (nav.href) return
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index)
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang,
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component,
    }

    route[index].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function(lang) {
  let guideRoute = {
    path: `/${ lang }/guide`, // 指南
    redirect: `/${ lang }/guide/design`,
    component: load(lang, 'guide'),
    children: [{
      path: 'design', // 设计原则
      name: 'guide-design' + lang,
      meta: { lang },
      component: load(lang, 'design'),
    }, {
      path: 'nav', // 导航
      name: 'guide-nav' + lang,
      meta: { lang },
      component: load(lang, 'nav'),
    }],
  }

  let resourceRoute = {
    path: `/${ lang }/resource`, // 资源
    meta: { lang },
    name: 'resource' + lang,
    component: load(lang, 'resource'),
  }

  let indexRoute = {
    path: `/${ lang }`, // 首页
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, 'index'),
  }

  return [guideRoute, resourceRoute, indexRoute]
}

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang))
})

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue'),
})

let userLanguage = localStorage.getItem('ELEMENT_LANGUAGE') || window.navigator.language || 'en-US'
let defaultPath = '/en-US'
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = '/zh-CN'
} else if (userLanguage.indexOf('es') !== -1) {
  defaultPath = '/es'
} else if (userLanguage.indexOf('fr') !== -1) {
  defaultPath = '/fr-FR'
}

route = route.concat([{
  path: '/',
  redirect: { path: defaultPath },
}, {
  path: '/*',
  redirect: { path: defaultPath },
}])

export default route
