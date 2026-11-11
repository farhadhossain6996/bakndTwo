require('dotenv').config()
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);
const express= require('express');
const { dbConfig } = require('./config/db.config');
const app =express();
const port=process.env.PORT;
dbConfig();
app.get('/',(req,res)=>{
    res.send("Hello world")
    
}); 

app.listen(port,()=>{
    console.log(`i am Server ${port} `)
})

                
