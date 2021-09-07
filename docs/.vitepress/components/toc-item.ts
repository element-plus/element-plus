import { useData } from 'vitepress'
import { h } from 'vue'
import { resolveLink } from '../utils/toc'

interface ITocProps {
  text: string
  link: string
  depth?: number
  children?: ITocProps[]
}

export default function TocItem(props: ITocProps) {
  const { site } = useData()
  const { text } = props

  const link = resolveLink(site.value.base, props.link)

  const depth = props.depth || 1
  // There will be maximum depth of 2
  const isSubItem = props.depth && props.depth > 1

  const childItems = props.children
    ? props.children.map((c) =>
        h(TocItem, {
          ...c,
          depth: depth + 1,
        })
      )
    : []

  return h('li', { class: { 'toc-item': true, subitem: isSubItem } }, [
    h(
      link ? 'a' : 'p',
      {
        class: { 'toc-link': true },
        href: link,
        title: text,
      },
      text
    ),
    childItems,
  ])
}
