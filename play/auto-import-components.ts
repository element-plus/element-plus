import Components from 'unplugin-vue-components/vite'
import { kebabCase } from 'unplugin-vue-components'
import { ComponentInfo } from 'unplugin-vue-components/types'

export default Components({
  include: `${__dirname}/**`,
  resolvers: [
    {
      type: 'component',
      resolve: async (name: string) => {
        return resolveComponent(name)
      },
    },
    {
      type: 'directive',
      resolve: async (name: string) => {
        return resolveDirective(name)
      },
    },
  ],
  dts: false,
})

function resolveComponent(name: string): ComponentInfo | undefined {
  if (!name.match(/^El[A-Z]/)) return
  if (name.match(/^ElIcon.+/)) {
    return {
      name: name.replace(/^ElIcon/, ''),
      from: '@element-plus/icons-vue',
    }
  }
  if (name === 'ElAutoResizer') {
    return {
      name,
      from: '@element-plus/components/table-v2/index.ts',
    }
  }

  const partialName = kebabCase(name.slice(2)) // ElTableColumn -> table-column
  return {
    name,
    from: `@element-plus/components/${partialName.split('-')[0]}/index.ts`,
    sideEffects: getSideEffects(partialName),
  }
}
function resolveDirective(name: string): ComponentInfo | undefined {
  const directives = ['Loading', 'Popover', 'InfiniteScroll']

  if (!directives.includes(name)) return
  const kebabCaseName = kebabCase(name)

  return {
    from: `@element-plus/components/${kebabCaseName}/src/directive.ts`,
    sideEffects: getSideEffects(kebabCaseName),
  }
}

function getSideEffects(dirName: string) {
  return `@element-plus/components/${dirName}/style/index.ts`
}
