import { withInstall, withNoopInstall } from '@element-plus/utils'

// import { withInstall } from '@element-plus/utils'
import Typography from './src/typography.vue'
import Base from './src/base.vue'
import Paragraph from './src/paragraph.vue'

Typography.Base = Base
Typography.Paragraph = Paragraph
export const ElTypography = withInstall(Typography, {
  Base,
  Paragraph,
})
export const ElBase = withNoopInstall(Base)
export const ElParagraph = withNoopInstall(Paragraph)

export default Typography

export * from './src/typography'
export * from './src/base'

export type { TypographyInstance, BaseInstance } from './src/instance'
