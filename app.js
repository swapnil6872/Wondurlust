const express = require('express');
const app = express();
const mongoose= require('mongoose');
const Listing = require('./models/listing') 

const MONGO_URL = "mongodb://127.0.0.1:27017/wondurlust";

main().then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err);
})

async function main(){
      await mongoose.connect (MONGO_URL)
}

app.get('/',(req,res)=>{
    res.send('hi i am root')
})
app.get('/test',async(req,res)=>{
    let newList = await Listing.findOneAndUpdate({price:1200},{

        location:"goa",
        country:"india"
    });
    await newList.save();
    console.log('saved');
    res.send('sucesss new')
})

app.listen(8080,()=>{
   console.log("server is listening to port 8080");
})