#!node
const fs = require('fs')
const path = require('path')
let ext = process.argv[2] || ""
let currentDir = process.cwd()
const fileName = path.resolve(currentDir, (new Date()).getTime() + ext) 
fs.writeFileSync(fileName, "")
console.log(`创建成功：\n\t${fileName}`)

