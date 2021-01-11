/**
 * utils - index
 * --------------------------------------
 * This script reads the filter.json and creates
 * out of this information the index.ts file with
 * all the types and exports.
 */

const file = require('../../../.scripts/common/file')
const { banner, log } = require('../../../.scripts/common/log')

const run = async () => {
  await banner('utils : index')

  let filters = []
  try {
    const fileContent = await file.read('./src/filters.json')
    filters = JSON.parse(fileContent)
    log.info(`Read ${filters.length} filters`).break()
  } catch (error) {
    log.error('Could not read file ./src/filters.json. Maybe run `npm run build:docs` first.', error)
  }

  const utilExports = filters.map(f => `export { ${f.name} } from './filters/${f.name}'`)
  const utilStaticTypes = filters.map(f => `  ${f.name}: ${f.signature}`)

  const content = [
    utilExports.join('\n'),
    '',
    'export interface BalUtilsStatic {',
    utilStaticTypes.join('\n'),
    '}',
    '',
  ].join('\n')

  try {
    await file.write('./src/index.ts', content)
    log.success('Successfully updated `src/index.ts`')
  } catch (error) {
    log.error('Could not update `src/index.ts`', error)
  }
}

run()
