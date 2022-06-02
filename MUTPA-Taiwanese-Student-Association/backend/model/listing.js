const mongoose = require("mongoose");

const listingSchema = {
    name: String,
    price: Number,
    content: String
}

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;