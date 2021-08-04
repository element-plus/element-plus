import { defineAsyncComponent } from 'vue'
import langs from './i18n/route'
import navConfig from './nav.config'
import { Language } from './enums/language'

const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}
const getAsyncComponent = func => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

const LOAD_MAP = {
  [Language.CN]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "zh-CN" */ `./pages/${name}.vue`))
  },
  [Language.EN]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "en-US" */ `./pages/${name}.vue`))
  },
  [Language.ES]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "es" */ `./pages/${name}.vue`))
  },
  [Language.FR]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "fr-FR" */ `./pages/${name}.vue`))
  },
  [Language.JP]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "jp" */ `./pages/${name}.vue`))
  },
}

const load = function(lang, path) {
  return LOAD_MAP[lang](path)
}

const LOAD_DOCS_MAP = {
  [Language.CN]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS zh-CN" */ `./docs/zh-CN${path}.md`))
  },
  [Language.EN]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS en-US" */ `./docs/en-US${path}.md`))
  },
  [Language.ES]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS es" */ `./docs/es${path}.md`))
  },
  [Language.FR]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS fr-FR" */ `./docs/fr-FR${path}.md`))
  },
  [Language.JP]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS jp" */ `./docs/jp${path}.md`))
  },
}

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path)
}

const registerRoute = navConfig => {
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

let userLanguage = localStorage.getItem('ELEMENT_LANGUAGE') || window.navigator.language || Language.EN
let defaultPath = Language.EN
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = Language.CN
} else if (userLanguage.indexOf('es') !== -1) {
  defaultPath = Language.ES
} else if (userLanguage.indexOf('fr') !== -1) {
  defaultPath = Language.FR
} else if (userLanguage.indexOf('jp') !== -1) {
  defaultPath = Language.JP
}

route = route.concat([{
  path: '/',
  redirect: { path: `/${defaultPath}` },
}, {
  path: '/*',
  redirect: { path: `/${defaultPath}` },
}])

export default route
