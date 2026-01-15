const path = require('path')
const a1 = path.win32.basename('C:\\temp\\myfile.html');
const a2 = path.win32.dirname('C:\\temp\\myfile.html');
console.log(a1)
console.log(a2)
const a3 = path.extname(__filename)
console.log(a3)
// Returns: 'myfile.html'