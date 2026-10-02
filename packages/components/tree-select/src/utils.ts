import { isArray } from '@element-plus/utils'

import type { TreeNodeData } from '@element-plus/components/tree/src/tree.type'

export function isValidValue(val: any) {
  return val || val === 0
}

export function isValidArray(val: any) {
  return isArray(val) && val.length
}

export function toValidArray(val: any) {
  return isArray(val) ? val : isValidValue(val) ? [val] : []
}

type TreeCallback<T extends TreeNodeData, R> = (
  data: T,
  index: number,
  array: T[],
  parent?: T
) => R

type TreeFindCallback<T extends TreeNodeData> = TreeCallback<T, boolean>

export function treeFind<T extends TreeNodeData>(
  treeData: T[],
  findCallback: TreeFindCallback<T>,
  getChildren: (data: T) => T[]
): T | undefined
export function treeFind<T extends TreeNodeData, R>(
  treeData: T[],
  findCallback: TreeFindCallback<T>,
  getChildren: (data: T) => T[],
  resultCallback?: TreeCallback<T, R>,
  parent?: T
): R | undefined
export function treeFind<T extends TreeNodeData, R>(
  treeData: T[],
  findCallback: TreeFindCallback<T>,
  getChildren: (data: T) => T[],
  resultCallback?: TreeCallback<T, R>,
  parent?: T
): T | R | undefined {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i]
    if (findCallback(data, i, treeData, parent)) {
      return resultCallback ? resultCallback(data, i, treeData, parent) : data
    } else {
      const children = getChildren(data)
      if (isValidArray(children)) {
        const find = treeFind(
          children,
          findCallback,
          getChildren,
          resultCallback,
          data
        )
        if (find) return find
      }
    }
  }
}

export function treeEach<T extends TreeNodeData>(
  treeData: T[],
  callback: TreeCallback<T, void>,
  getChildren: (data: T) => T[],
  parent?: T
) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i]
    callback(data, i, treeData, parent)

    const children = getChildren(data)
    if (isValidArray(children)) {
      treeEach(children, callback, getChildren, data)
    }
  }
}
