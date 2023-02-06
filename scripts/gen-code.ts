import path from 'path'
import fs from 'fs'

const checkTypes = [
  'Arguments',
  'Function',
  'String',
  'Number',
  'Date',
  'RegExp',
  'Error',
  'Symbol',
  'Map',
  'WeakMap',
  'Set',
  'WeakSet',
  'Array',
  'Object',
  'Boolean',
  'Null',
  'Undefined',
]

const generateTemplate = (name: string): string => {
  return `// Automatically generate code
import getTag from './getTag'

/**
 * Check value is ${name}
 * @param {any} value
 * @returns {boolean}
 */
export function is${name}(value: any): boolean {
  return getTag(value) === '[object ${name}]'
}
`
}

const generateCheckTypes = (): string => {
  let str = 'export const CheckTypes = {'
  checkTypes.forEach((name) => {
    str += '\n' + `  ${name}: '${name}',`
  })
  str += '\n}\n'
  return str
}

function generateExportFile() {
  const content: string[] = []
  checkTypes.forEach((name) => {
    content.push(`export * from './is${name}'`)
  })
  return `${generateCheckTypes()}\n${content.join('\n')}\n`
}

function generateIndependentFile() {
  const sourcePath = path.resolve(__dirname, '../src')
  checkTypes.forEach((name) => {
    const template = generateTemplate(name)
    const filePath = path.join(sourcePath, `is${name}.ts`)
    if (fs.existsSync(filePath))
      fs.unlinkSync(filePath)

    fs.writeFileSync(filePath, template)
  })
}

generateIndependentFile()
let fileContent = generateExportFile()
const filePath = path.resolve(__dirname, '../src/index.ts')

const existFileContent: string[] = []
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const splitContent = content.split('\n')
  for (let i = 0; i < splitContent.length; i++) {
    const line = splitContent[i]
    existFileContent.push(line)
    if (line.startsWith('// GenCode Start'))
      break
  }

  fileContent = `${existFileContent.join('\n')}\n${fileContent}`

  fs.writeFileSync(filePath, fileContent)
  console.log('Successful !')
}
