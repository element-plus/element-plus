/**
 * download txt file
 * @param name
 * @param content
 */
export function downloadFile(name: string, content: string) {
  const link = document.createElement('a')
  link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`
  link.setAttribute('download', name || 'ep-custom-theme.css')
  link.style.display = 'none'

  // Append to html link element page
  document.body.appendChild(link)
  // Start download
  link.click()
  // Clean up and remove the link
  document.body.removeChild(link)
}
