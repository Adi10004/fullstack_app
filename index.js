const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jokes',(req,res)=>{
    const jokes=[
        {id:1, title:"Why did the scarecrow win an award?", content:"Because he was outstanding in his field!"},
        {id:2, title:"Why don't scientists trust atoms?", content:"Because they make up everything!"},
        {id:3, title:"Why did the math book look sad?", content:"Because it had too many problems."},
        {id:4, title:"Why was the computer cold?", content:"Because it left its Windows open!"},
        {id:5, title:"Why did the coffee file a police report?", content:"It got mugged!"}
    ]
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
