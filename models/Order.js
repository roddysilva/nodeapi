const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const orderSchema = new Schema({
        sale: [{
                saleOrder: [{
                        item: {
                                itemName: String,
                                itemCategory: String
                        
                        },
                        quantity: { type: Number, min: 1 },
                        unitPrice: Number,
                        totalPrice: Number,
                        itemDiscount: Number,
                        available: Boolean
                }],
                wholeSalePrice: Number,
                wholeSaleDiscount: Number,
                whoSaleDiscountPercentage: Number,
                orderDate: Date,
                dueOrderDate: Date
        }],
        saleDate: Date,
        dueSaleDate: Date
});


// const orderSchema = new Schema({
//         name: String,
//         price: Number,
//         available: Boolean,
//         quantity: Number
        
// });

// const saleSchema = new mongoose.Schema({
//     orders: [order],
// });

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
