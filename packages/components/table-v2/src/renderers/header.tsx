import HeaderRow from '../table-header-row'
import { tryCall } from '../utils'

import type { FunctionalComponent } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { TableV2HeaderRendererParams } from '../table-header'
import type { TableV2Props } from '../table'

type HeaderRendererProps = TableV2HeaderRendererParams &
  Pick<TableV2Props, 'headerClass' | 'headerProps'> & {
    ns: UseNamespaceReturn
  }
//  & UnwrapNestedRefs<Pick<UseTableReturn, 'resizingKey'>>

const HeaderRenderer: FunctionalComponent<HeaderRendererProps> = (
  {
    columns,
    headerIndex,
    style,
    // derived from root
    headerClass,
    headerProps,

    ns,
    // returned by use-table
    // resizingKey,
  },
  { slots }
) => {
  const param = { columns, headerIndex }

  const kls = [
    ns.e('header-row'),
    tryCall(headerClass, param, ''),
    {
      // [ns.is('resizing')]: Boolean(resizingKey),
      [ns.is('customized')]: Boolean(slots.header),
    },
  ]

  const extraProps = {
    ...tryCall(headerProps, param),
    class: kls,
    columns,
    headerIndex,
    style,
  }

  return <HeaderRow {...extraProps}>{slots}</HeaderRow>
}

export default HeaderRenderer
