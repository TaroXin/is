import path from 'path'
import fs from 'fs'
import JsDoc2MD from 'jsdoc-to-markdown'

const readmePath = path.resolve(__dirname, '../README.md')

JsDoc2MD.render({
  files: 'dist/is*.js',
}).then((docsContent) => {
  const readme = fs.readFileSync(readmePath, { encoding: 'utf-8' }).split('\n')
  const content: string[] = []
  for (let i = 0; i < readme.length; i++) {
    const line = readme[i]
    content.push(line)
    if (line.startsWith('<!-- GenDocs -->'))
      break
  }
  fs.writeFileSync(readmePath, `${content.join('\n')}\n${docsContent}`)
})
