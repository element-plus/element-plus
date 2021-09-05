import { h } from 'vue'
import { useRoute, useData } from 'vitepress'
import { joinUrl, isActive } from '../utils/index'

import type { PageData } from 'vitepress'

type EnhanceArrayElement<T, P> = T extends Array<infer U> ? (U & P)[] : never

type Headers = EnhanceArrayElement<
  PageData['headers'],
  {
    children: Headers
  }
>

export const SidebarLink = (props) => {
  const route = useRoute()
  const { site, frontmatter } = useData()
  const depth = props.depth || 1
  const maxDepth = frontmatter.value.sidebarDepth || Infinity
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

function resolveLink(base: string, path: string) {
  if (path === undefined) {
    return path
  }
  // keep relative hash to the same page
  if (path.startsWith('#')) {
    return path
  }
  return joinUrl(base, path)
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

function resolveHeaders(headers: Headers) {
  return mapHeaders(groupHeaders(headers))
}

function groupHeaders(headers: Headers) {
  headers = headers.map((h) => Object.assign({}, h))
  let lastH2

  headers.forEach((h) => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      ;(lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter((h) => h.level === 2)
}

function mapHeaders(headers: Headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : undefined,
  }))
}
