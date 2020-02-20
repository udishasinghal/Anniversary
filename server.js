const express = require('express')
const {db,Mess} = require('./db.js')
const app = express()

app.use(express.json)
app.use(express.urlencoded({extended:true}))



app.use('/',express.static(__dirname+'/public'))

let message = []

app.get('/msg',async (req,res)=>{
    let whereObj = {}
    
    if(req.query.done){
        whereObj.done = req.query.done =='true'
    }

    message.push({
        description : req.body.description
    })

    let data = await Mess.findAll({
        where : whereObj
    })
    res.send(data)
})

app.post('/msg',async (req,res)=>{
  let newItem = await Mess.create({
      description:req.body.description
  })
  res.send(newItem)
})

db.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log('Server started at http://localhost:1234 '+PORT )
    })
})

