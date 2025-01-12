const express = require('express')
const app = express()
const con = require("./database")

con.connect((err)=>{
    if(err) throw err
    con.query('select * from person  ',(err,res)=>{
        if(err) throw err
        console.log(res)
    })

})
app.get('/',(req,res)=>{
    res.send('')
})
app.listen(3000,()=>{
    console.log('server up')
})