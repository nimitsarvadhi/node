const http = require('http')
const port = 3000
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/'){
         res.end('<h1>This is Nimit Agrawal</h1>')
    }
    else if(req.url == '/about'){
        res.end('<h1>About Nimit Agrawal</h1')
    }
   
})
server.listen(port, ()=>{
console.log(`Server is listening on port ${port}`)
})