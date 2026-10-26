/**
 * Download a text file with the requested content type.
 * @param name
 * @param content
 */
export function downloadFile(
  name: string,
  content: string,
  contentType = 'text/plain'
) {
  const link = document.createElement('a')
  link.href = `data:${contentType};charset=utf-8,${encodeURIComponent(content)}`
  link.setAttribute('download', name || 'ep-custom-theme.css')
  link.style.display = 'none'

  // Append to html link element page
  document.body.appendChild(link)
  // Start download
  link.click()
  // Clean up and remove the link
  document.body.removeChild(link)
}
