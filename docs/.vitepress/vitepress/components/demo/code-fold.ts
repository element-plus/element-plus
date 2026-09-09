/**
 * Indentation-based code folding regions, mirroring VSCode's
 * `indentation` folding strategy: a line starts a foldable region when the
 * next non-blank line is indented deeper; the region ends right before the
 * first non-blank line whose indentation is back to (or less than) the
 * starting line's.
 */

export const normalizeCodeFoldLines = (code: HTMLElement): HTMLElement[] => {
  for (const node of Array.from(code.childNodes)) {
    if (
      node.nodeType === Node.TEXT_NODE &&
      /^\s*$/.test(node.textContent ?? '')
    ) {
      const separator = document.createElement('span')
      separator.className = 'code-fold-separator'
      separator.textContent = node.textContent ?? ''
      node.replaceWith(separator)
    }
  }

  const lineEls: HTMLElement[] = []
  for (const node of Array.from(code.childNodes)) {
    if (node instanceof HTMLElement && node.classList.contains('line')) {
      node.classList.add('code-line')
      lineEls.push(node)
    }
  }

  return lineEls
}

export interface FoldRegion {
  /** index of the line that starts the region (stays visible) */
  start: number
  /** index of the last hidden line (inclusive) */
  end: number
}

/**
 * Width of a rendered tab in columns. Must match the `tab-size: 4` rule for
 * code blocks in `docs/.vitepress/vitepress/styles/code.scss`.
 */
const TAB_SIZE = 4

export const getIndent = (line: string): number => {
  let indent = 0
  for (const ch of line) {
    if (ch === ' ') indent += 1
    // a tab advances to the next tab stop, so mixed tab/space prefixes
    // compute the same column width they render with
    else if (ch === '\t')
      indent = Math.floor(indent / TAB_SIZE) * TAB_SIZE + TAB_SIZE
    else break
  }
  return indent
}

const isBlank = (line: string) => line.trim() === ''

export const computeFoldRegions = (lines: string[]): FoldRegion[] => {
  const regions: FoldRegion[] = []

  for (let start = 0; start < lines.length - 1; start++) {
    if (isBlank(lines[start])) continue
    const indent = getIndent(lines[start])

    // first non-blank line after `start` that dedents back to `indent`
    let bound = -1
    for (let i = start + 1; i < lines.length; i++) {
      if (isBlank(lines[i])) continue
      if (getIndent(lines[i]) <= indent) {
        bound = i
        break
      }
    }
    if (bound === -1) bound = lines.length

    // trailing blank lines are not part of the region
    let end = bound - 1
    while (end > start && isBlank(lines[end])) end--

    // only fold when the region actually hides at least one line; this
    // already implies the first non-blank line after `start` is deeper
    if (end > start) {
      regions.push({ start, end })
    }
  }

  return regions
}
