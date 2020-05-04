const path=require('path')
const express=require('express')

const publicDir=path.join(__dirname,'../public')
const app=express()

app.use(express.static(publicDir))

app.get('',(req,res)=>{
    res.send('<h1>Weather</h1>')
})

// app.get('/help',(req,res)=>{
//     res.send({name:'Aviral',age:27})
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page</h1>')
// })
app.get('/weather',(req,res)=>{
    res.send({
        city:'Los Angeles',
        weather:'20'
    })
})

app.listen(3000,()=>{
    console.log("server is up on port 3000")
})