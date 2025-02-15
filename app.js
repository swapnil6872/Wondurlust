const express = require('express');
const app = express();
const mongoose= require('mongoose');
const Listing = require('./models/listing') 
const path = require('path');


const MONGO_URL = "mongodb://127.0.0.1:27017/wondurlust";

main().then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err);
})

async function main(){
      await mongoose.connect (MONGO_URL)
}

app.set('view engine' ,'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.send('hi i am root')
});

// app.get('/test',async(req,res)=>{
//     let newList = await Listing.findOneAndUpdate({price:1200},{

//         location:"goa",
//         country:"india"
//     });
//     await newList.save();
//     console.log('saved');
//     res.send('sucesss new')
// });



// index Route
app.get('/listings',async (req,res) =>{
  const allListings = await Listing.find();
  res.render('listings/index.ejs',({allListings}));
})

//show route 
app.get('/listings/:id' ,async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show',{listing}); 

})

app.listen(8080,()=>{
   console.log("server is listening to port 8080");
})