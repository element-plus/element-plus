import { addDecorator } from '@storybook/html';
import { createApp } from 'vue';
import '../src/style/element-ui@2.13.2.css';
/**
 * Wraps a story into a Vue Element
 * @param {JSX.Element} template - Story templates
 * @param {VueElement}
 */
const Wrapper = (template) => {
  return {
    data() {
      return {};
    },
    template,
  };
};

/**
 * Custom Addon for previewing ElementPlus component in Vue3
 * Due to lacking of support for Vue3, the rendering method has to be made by ourself
 * This method takes a template string as parameter returns a HTMLElement which will be inserted to the iframe root node by `@StoryBook`
 * @param {Story} content
 * @return {HTMLElement}
 */
function CustomDecorator(content) {
  const { template, installer } = content();
  const app = createApp(Wrapper(template));
  installer(app);
  const entry = document.createElement('div');
  entry.className = 'element-plus-previewer';
  app.mount(entry);
  return entry;
}

addDecorator(CustomDecorator);
