const { default: mongoose } = require("mongoose")

exports.dbConfig=()=>{
  mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("database is connected").catch((err)=>{
        console.log(err.message)
    })
  })
    
}