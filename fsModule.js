const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (err,data)=>{
//     console.log(err,data)
// })

// const a = fs.readFileSync('file.txt')//to intentionally block the async process
// console.log(a.toString())
// fs.writeFile('file2.txt',"This is file2", ()=>{
//     console.log("Finished Writing file")
// })
fs.writeFileSync('file2.txt',"This is data2")
console.log("Finished reading File")