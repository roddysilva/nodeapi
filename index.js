const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
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



mongoose.connect(process.env.URLDB)
.then(() => {
    console.log('Conectamos ao MongoBD!');
    app.listen(3000)
})
.catch((err) => console.group(err));