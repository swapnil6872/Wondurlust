const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing')
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const wrapAsync=require('./utils/wrapAsync')
const ExpressError = require('./utils/ExpressError');


const MONGO_URL = "mongodb://127.0.0.1:27017/wondurlust";

main().then(() => {
    console.log('connected to db')
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
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
app.get('/listings',wrapAsync( async (req, res) => {
    const allListings = await Listing.find();
    res.render('listings/index.ejs', ({ allListings }));
}))

// new Route
app.get('/listings/new', (req, res) => {
    res.render('listings/new')
});

//show route 
app.get('/listings/:id',wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show', { listing });
}))

// create route 
app.post('/listings',wrapAsync(async(req,res,next) => {
         // Custom Error for Listing is empty
         if(!req.body.listing){
            throw new ExpressError(400,'send valid data for listing');
         }
        // direct add in model by instance 
        const newListing = new Listing(req.body.listings);
        await newListing.save();
        res.redirect('/listings');
}));

//Edit Route
app.get('/listings/:id/edit',wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit', { listing });
}));

//update route
app.put('/listings/:id',wrapAsync( async (req, res) => {
     // Custom Error for Listing is empty
     if(!req.body.listing){
        throw new ExpressError(400,'send valid data for listing');
     }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listings });
    res.redirect('/listings/' + id)
}))

//delete route
app.delete('/listings/:id',wrapAsync( async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}))

// Wildcard 404 Handler
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"));
})
// custom errorHandaler
app.use((err, req, res, next) => {
    let{status=500,message="something went wrong"} = err;
    res.status(status).render('error',{err});
    // res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
})