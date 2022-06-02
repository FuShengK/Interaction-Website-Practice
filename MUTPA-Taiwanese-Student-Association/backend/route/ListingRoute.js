const express = require("express");
const router = express.Router();
const Listing = require("../model/listing");

router.route("/secondhand/create").post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const content = req.body.content;

    const newItem = new Listing({
        name,
        price,
        content
    })

    newItem.save();
})

router.route("/secondhand").get((req, res) => {
    Listing.find().then(results => res.json(results))
})

module.exports = router;