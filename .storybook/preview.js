import { addDecorator } from '@storybook/html'
import { createApp } from 'vue'
// import '../src/style/element-ui@2.13.2.css'
import '../packages/theme-chalk/src/index.scss'
import ElementUI from '../packages/element-plus'
import './demo.css'

/**
 * Wraps a story into a Vue Element
 * @param {JSX.Element} template - Story templates
 * @param {VueElement}
 */
const Wrapper = (template) => {
  return {
    data() {
      return {}
    },
    template,
  }
}

/**
 * Custom Addon for previewing ElementPlus component in Vue3
 * Due to lacking of support for Vue3, the rendering method has to be made by ourself
 * This method takes a template string as parameter returns a HTMLElement which will be inserted to the iframe root node by `@StoryBook`
 * @param {Story} content
 * @return {HTMLElement}
 */
function CustomDecorator(content, context) {
  const templateOrComponent = content()
  const app = typeof templateOrComponent === 'string'
    ? createApp(Wrapper(templateOrComponent))
    : createApp(templateOrComponent)
  ElementUI.install(app)
  const entry = document.createElement('div')
  entry.className = 'element-plus-previewer'
  app.mount(entry)
  return entry
}

addDecorator(CustomDecorator);
