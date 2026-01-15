const express = require('express')
const app = express()
const path = require('path')

app.set('view enine', 'ejs')
//app.set("views", path.join(__dirname,"/views"))
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.patch('/about', (req,res)=>{
    res.send("Its about Nimit Agrawal-//Patching")
})
app.post('/about/sarvadhi',(req,res)=>{
    res.send("About Sarvadhi posting")
})
app.get('/:id/:name',(req,res)=>{
    let {id, name} = req.params
    res.send(id+name)
})
app.get('/search',(req,res)=>{
    let {q,g}= req.query
    q = q.toUpperCase()
    g = g.toUpperCase()
    if(!q && !g){
        res.send("No Queries found");
    }
    else{
        //res.send(q + ' ' +g)
        res.render("index.ejs",{q,g})
    }
})
app.listen(3000, ()=>{
    console.log("Server is starting...!!")
})