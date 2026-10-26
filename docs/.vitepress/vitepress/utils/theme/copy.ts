import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'

export async function copyThemeText(
  text: string,
  messages: { success: string; error: string }
) {
  try {
    await clipboardCopy(text)
    ElMessage.success({ message: messages.success, grouping: true })
  } catch {
    ElMessage.error({ message: messages.error, grouping: true })
  }
}
