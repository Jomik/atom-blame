"use babel"

import path from 'path'
import fs from 'fs'
import pickForPath from './pick-for-path'

const types = ['git', 'svg', 'hg']

module.exports = function findRepoType(filePath) {
  return pickForPath(filePath, (currentPath) => {

    let type = types.find((type) => {
      return fs.existsSync(path.join(currentPath, `.${type}`))
    })

    if (type) { console.log('type', type); return type }
  })
}