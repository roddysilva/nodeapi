const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const urlMongo = require('../nodeapi/support/config/db.config').url;
require('dotenv').config();

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extends: true }));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// const personRoutes = require('./routes/personRoutes');
const orderRoutes = require('./routes/orderRoutes');

// app.use('/person', personRoutes);
app.use('/order', orderRoutes);


const PORT = process.env.NODE_DOCKER_PORT || 8080;
mongoose.connect(urlMongo)
.then(() => {
    console.log('Conectamos ao MongoBD!');
    app.listen(PORT)
})
.catch((err) => console.group(err));