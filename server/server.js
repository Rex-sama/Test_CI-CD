const express = require('express')
const app = express()

app.get('/api/data',(req,res)=>{
    res.json({message:"Hello from server!"})
})

const PORT = 5000 

app.listen(PORT,()=>{
    console.log("Server is running on PORT " + PORT)
})