const fs = require('node:fs')

const source = `${process.cwd()}/.env.example`
const destination = `${process.cwd()}/.env`

fs.copyFile(source, destination, function (err) {
    if (err) throw err
    console.log(`${source} was copied to ${destination}`)
})
