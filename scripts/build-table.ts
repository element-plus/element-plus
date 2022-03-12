import fs from 'fs/promises'
import path from 'path'

main()

async function main() {
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

<detail><summary>:info: Files have been changed</summary>

${table}

</detail>

<sub>Generated with :heart: by Element Plus bot</sub>`
  }

  await fs.writeFile(path.resolve(__dirname, '..', 'tmp/diff.md'), output)
}
