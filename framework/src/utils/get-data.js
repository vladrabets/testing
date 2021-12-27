const fs = require("fs/promises")

const getFilePath = (env) => `./resources/${env}.properties`

async function getData(env) {
  const data = await fs.readFile(`${getFilePath(env)}`, 'utf-8')
  return data
    .replace(/\r\n/g, '\n')
    .split('\n')
    .reduce((acc, prop) => {
      const [key, value] = prop.split('=')
      acc[key] = value
      return acc
    }, {})
}

module.exports = getData