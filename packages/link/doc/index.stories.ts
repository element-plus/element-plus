import ElLink from '../index'

export default {
  title: 'Link',
}

const commonProps = 'href="https://vuejs.org" target="_blank" rel="noreferrer noopener" style="margin-right: 10px;"'

export const BasicLinks = () => `
<el-link ${commonProps}>normal link</el-link>
<el-link ${commonProps} type="primary">primary link</el-link>
<el-link ${commonProps} type="success">success link</el-link>
<el-link ${commonProps} type="info">info link</el-link>
<el-link ${commonProps} type="warning">warning link</el-link>
<el-link ${commonProps} type="error">error link</el-link>
`

export const DisabledLinks = () => `
<el-link disabled="true" ${commonProps}>disabled link</el-link>
`
