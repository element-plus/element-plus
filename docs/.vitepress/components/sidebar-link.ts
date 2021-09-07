import { h } from 'vue'
import { useRoute, useData } from 'vitepress'
import { resolveLink, resolveHeaders } from '../utils/toc'
import { isActive } from '../utils'

export const SidebarLink = (props) => {
  const route = useRoute()
  const { site, frontmatter } = useData()
  const depth = props.depth || 1
  const maxDepth = frontmatter.value.sidebarDepth || 2
  const headers = route.data.headers
  const text = props.item.text
  const link = resolveLink(site.value.base, props.item.link)
  const children = props.item.children
  const active = isActive(route, props.item.link)
  const childItems =
    depth < maxDepth
      ? createChildren(active, children, headers, depth + 1)
      : null
  return h('li', { class: 'sidebar-link' }, [
    h(
      link ? 'a' : 'p',
      {
        class: { 'sidebar-link-item': true, active },
        href: link,
      },
      text
    ),
    childItems,
  ])
}

function createChildren(active: boolean, children, headers, depth = 1) {
  if (children && children.length > 0) {
    return h(
      'ul',
      { class: 'sidebar-links' },
      children.map((c) => {
        return h(SidebarLink, { item: c, depth })
      })
    )
  }
  return active && headers
    ? createChildren(false, resolveHeaders(headers), undefined, depth)
    : null
}
