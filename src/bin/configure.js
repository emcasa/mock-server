const child_process = require('child_process')
const path = require('path')

function getCwd() {
  const cwd = process.cwd()
  let name
  try {
    name = require(`${cwd}/package.json`).name
  } finally {
    if (name === '@emcasa/mock-server') return cwd
    return `${cwd}/node_modules/@emcasa/mock-server`
  }
}

export default async function configure([arg0]) {
  const cwd = getCwd()
  const backendPath = path.relative(cwd, arg0)
  console.log(`configuring emcasa-mock-server at:\n  ${cwd}`)
  console.log(`with backend repository at:\n  ${backendPath}`)
  child_process.exec(`rm ./backend; ln -s ${backendPath} ./backend; yarn update-schema`, {cwd})
}
