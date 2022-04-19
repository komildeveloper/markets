const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const readFile = file => {
	return JSON.parse(
		readFileSync(path.resolve('./model', file), { encoding: 'utf8' })
	)
}

const writeFile = (file, data) => {
	writeFileSync(
		path.resolve('./model', file),
		JSON.stringify(data, null, 2),
		err => {
			if (err) throw err
			return 'OK'
		}
	)
}

module.exports = {
	readFile,
	writeFile
}
