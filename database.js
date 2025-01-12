const mysql = require('mysql2')
const con = mysql.createConnection({
    host : 'localhost',
    user :"root",
    password:"@Ambika7914",
    database:'student'
})
con.connect((err)=>{
    if(err){
        console.log(`err ${err}`)
        return
    }
    console.log(`coneect to mysql`)
})
module.exports = con