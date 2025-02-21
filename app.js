const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const listings = require('./routes/listing');
const reviews =require('./routes/review')

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

app.use('/listings',listings);
app.use('/listings/:id/reviews',reviews)

// Wildcard 404 Handler
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"));
})

// custom errorHandaler
app.use((err, req, res, next) => {
    let{status=500,message="something went wrong"} = err;
    res.status(status).render('error',{message});
    // res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("server is listening to port http://localhost:8080");
})