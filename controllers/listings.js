const { model } = require('mongoose');
const Listing = require('../models/listing');


module.exports.index =async (req, res) => {
    const allListings = await Listing.find();
    res.render('listings/index.ejs', ({ allListings }));
};

module.exports.randerNewForm = (req, res) => {
    res.render('listings/new');
}

module.exports.showListing =  async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: 'reviews',
            populate: {
                path: "author"
            }
        })
        .populate('owner');
    if (!listing) {
        req.flash('error', "Listing you requested for does not exist!");
        res.redirect('/listings')
    }
    res.render('listings/show', { listing });

}

module.exports.createListing = async (req, res, next) => {
   
    let url = req.file.path;
    let filename = req.file.filename;
  
    const newListing= new Listing(req.body.listings);
    newListing.owner = req.user._id;
    newListing.image ={url,filename};
    await newListing.save();
    req.flash('success', "New Listing Created!")
    res.redirect('/listings');
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', "Listing you requested for does not exist!");
        res.redirect('/listings')
    }
    let orignalimg = listing.image.url;
    orignalimg = orignalimg.replace('/upload', '/upload/w_250');
    res.render('listings/edit', { listing ,orignalimg});
}

module.exports.updateListing = async (req, res) => {
   
    let { id } = req.params;
    let listing =await Listing.findByIdAndUpdate(id, { ...req.body.listings });

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image ={ url,filename };
        await listing.save();
    }
   
    req.flash('success', "Listing Updated!")
    res.redirect('/listings/' + id)
}

module.exports.destroyListing= async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash('success', "Listing Deleted")
    res.redirect('/listings');
};