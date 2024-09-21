const express=require('express')

const data=require('./data/data.js')

const app=express()
const port=3000

app.get('/' ,(req,res) => {
    res.send('Hello World')
})

app.get('/api/auth' , (req,res)=>{
    res.send(`${data}`)
})





app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})