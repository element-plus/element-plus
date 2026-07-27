/**
 * Indentation-based code folding regions, mirroring VSCode's
 * `indentation` folding strategy: a line starts a foldable region when the
 * next non-blank line is indented deeper; the region ends right before the
 * first non-blank line whose indentation is back to (or less than) the
 * starting line's.
 */

export interface FoldRegion {
  /** index of the line that starts the region (stays visible) */
  start: number
  /** index of the last hidden line (inclusive) */
  end: number
}

export const getIndent = (line: string): number => {
  let indent = 0
  for (const ch of line) {
    if (ch === ' ') indent += 1
    else if (ch === '\t') indent += 2
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
