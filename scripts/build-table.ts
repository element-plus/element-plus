import fs from 'fs/promises'
import path from 'path'

async function main() {
  const threshold = Number(process.env.THRESHOLD) || 40
  let output: string
  const diffOutput = await fs.readFile(
    path.resolve(__dirname, '..', 'tmp/diff.txt'),
    'utf-8'
  )
  const fileDiffs = diffOutput
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s)
    .map((s) => s.split(':'))

  if (fileDiffs.length === 0) {
    output = ''
  } else {
    const table = fileDiffs.reduce(
      (prev, [source, filename]) => {
        const row = `|${filename}`
        let status: 'Added 🟢' | 'Removed ⛔️'
        if (!source.startsWith('./dist')) {
          status = 'Removed ⛔️'
        } else {
          status = 'Added 🟢'
        }
        return `${prev}
  ${row}|${status}|`
      },
      `| Filename | Status |
  |:---|:---:|`
    )

    output = `**Total changed files:** ${fileDiffs.length}

${
  fileDiffs.length >= threshold
    ? `#### 🚔 Attention: the changed file has exceeded the threshold`
    : ''
}

<details><summary>:information_source: Files have been changed</summary>

${table}

</details>

<sub>Generated with :heart: by Element Plus bot</sub>`
  }

  await fs.writeFile(path.resolve(__dirname, '..', 'tmp/diff.md'), output)
}

main()
