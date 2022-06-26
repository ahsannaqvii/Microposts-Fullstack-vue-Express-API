const express = require('express')
const bodyParser = require('body-parser')

const cors=require('cors')
const app=express()

//Middleware
app.use(bodyParser.json());
app.use(cors())
  
const posts=require('./routes/api/posts')

//ANY FILE THAT GOES TO /API/POSTS WILL GO TO POSTS.JS
app.use('/api/posts',posts)

// //FOR PRODUCTION.
// if (process.env.NODE_ENV ==='production'){
//     // Static folder 
//     app.use(express.static(__dirname + '/public/'))

//     // HANDLE SINGLE PAGE APP 
//     app.get('/.*/' , (req,res)=>res.sendFile(__dirname + '/public/index.html'))
// }
const port=process.env.PORT || 5000

app.listen(port,()=>console.log(`server started on port ${port}`))