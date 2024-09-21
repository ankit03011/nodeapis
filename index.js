import express from 'express';          //--1. sabse pahle express ko import kiya npm i express ke baad
import cors from 'cors'                 //--3. install cors to connect backend with frontend request
import mysql from 'mysql2'

let app = express();                    //--2  express ko ek app variable me store kiye
app.use(cors())
let port = 8000;


///db config
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    port:3306,
    database:"pratibha"

})

//db connect
db.connect((error)=>{
    if(error){
        console.log('faild to connect with databse', error.message)
    }else{
        console.log('database connected !!')
    }
})

//get api
app.get('/getUser', (req, res)=>{
   let sqlquery = 'select * from user'; 
   db.query(sqlquery, (error, result)=>{
    if(error){
        res.status(400).json({error: error.message})
    }else{
        res.status(200).json(result)
        console.log(result)
    }
   })
})


app.listen(port, ()=>{                                               //--3  express ki method listen ka ue krte huye port number or ek callback function diya
    console.log(`server is running on http://localhost:${port}`)    //     jo yah batayega ki server kis port pe chal raha hai
})