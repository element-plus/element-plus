import { Fragment, Text, Comment } from 'vue'

import type { VNode } from 'vue'

export const isFragment = (node: VNode) => node.type === Fragment

export const isText = (node: VNode) => node.type === Text

export const isComment = (node: VNode) => node.type === Comment

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export const isValidElementNode = (node: VNode) => !(isFragment(node) || isComment(node))

export const getFirstValidNode = (nodes: VNode[]) => {
  for (let i = 0; i < nodes.length; i++) {
    if (isValidElementNode(nodes[i])) {
      return nodes[i]
    }
  }
}
