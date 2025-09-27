import {
  Comment,
  Fragment,
  Text,
  createBlock,
  createCommentVNode,
  isVNode,
  openBlock,
} from 'vue'
import { camelize } from '../strings'
import { isArray } from '../types'
import { hasOwn } from '../objects'
import { debugWarn } from '../error'

import type { VNode, VNodeChild, VNodeNormalizedChildren } from 'vue'

const SCOPE = 'utils/vue/vnode'

export enum PatchFlags {
  TEXT = 1,
  CLASS = 2,
  STYLE = 4,
  PROPS = 8,
  FULL_PROPS = 16,
  HYDRATE_EVENTS = 32,
  STABLE_FRAGMENT = 64,
  KEYED_FRAGMENT = 128,
  UNKEYED_FRAGMENT = 256,
  NEED_PATCH = 512,
  DYNAMIC_SLOTS = 1024,
  HOISTED = -1,
  BAIL = -2,
}
export enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
}

export type VNodeChildAtom = Exclude<VNodeChild, Array<any>>
export type RawSlots = Exclude<
  VNodeNormalizedChildren,
  Array<any> | null | string
>

export function isFragment(node: VNode): boolean
export function isFragment(node: unknown): node is VNode
export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment
}

export function isText(node: VNode): boolean
export function isText(node: unknown): node is VNode
export function isText(node: unknown): node is VNode {
  return isVNode(node) && node.type === Text
}

export function isComment(node: VNode): boolean
export function isComment(node: unknown): node is VNode
export function isComment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Comment
}

const TEMPLATE = 'template'
export function isTemplate(node: VNode): boolean
export function isTemplate(node: unknown): node is VNode
export function isTemplate(node: unknown): node is VNode {
  return isVNode(node) && node.type === TEMPLATE
}

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export function isValidElementNode(node: VNode): boolean
export function isValidElementNode(node: unknown): node is VNode
export function isValidElementNode(node: unknown): node is VNode {
  return isVNode(node) && !isFragment(node) && !isComment(node)
}

/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
function getChildren(
  node: VNodeNormalizedChildren | VNodeChild,
  depth: number
): VNodeNormalizedChildren | VNodeChild {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : undefined
  }
  return node
}

export const getFirstValidNode = (
  nodes: VNodeNormalizedChildren,
  maxDepth = 3
) => {
  if (isArray(nodes)) {
    return getChildren(nodes[0], maxDepth)
  } else {
    return getChildren(nodes, maxDepth)
  }
}

export function renderIf(
  condition: boolean,
  ...args: Parameters<typeof createBlock>
) {
  return condition ? renderBlock(...args) : createCommentVNode('v-if', true)
}

export function renderBlock(...args: Parameters<typeof createBlock>) {
  return openBlock(), createBlock(...args)
}

export const getNormalizedProps = (node: VNode) => {
  if (!isVNode(node)) {
    debugWarn(SCOPE, '[getNormalizedProps] must be a VNode')
    return {}
  }

  const raw = node.props || {}
  const type = (isVNode(node.type) ? node.type.props : undefined) || {}
  const props: Record<string, any> = {}

  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], 'default')) {
      props[key] = type[key].default
    }
  })

  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key]
  })

  return props
}

export type FlattenVNodes = Array<VNodeChildAtom | RawSlots>

export const flattedChildren = (
  children: FlattenVNodes | VNode | VNodeNormalizedChildren
): FlattenVNodes => {
  const vNodes = isArray(children) ? children : [children]
  const result: FlattenVNodes = []

  vNodes.forEach((child) => {
    if (isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) && child.component?.subTree) {
      result.push(child, ...flattedChildren(child.component.subTree))
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else if (isVNode(child) && child.shapeFlag === 2) {
      // @ts-ignore
      result.push(...flattedChildren(child.type()))
    } else {
      result.push(child)
    }
  })
  return result
}
