const express = require('express');
// const request = require('request')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000

app.use(cors());
app.use(express.json());

// Connecting mongoose
mongoose.connect("mongodb+srv://lf2lf2kk:gp6au42k7bp6@cluster0.bs7lj.mongodb.net/listing?retryWrites=true&w=majority")

// Routers
app.use("/", require("./route/ListingRoute"))

app.get('/', function (req, res) { res.send('Check') });
app.get('/new', function (req, res) { res.send('new') });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));