
const fakeOrder = {
    sale: [{
        saleOrder: [
            {
            item: {
                itemName: 'Pera',
                itemCategory: 'Fruta',
            },
            quantity: 10,
            unitPrice: 1,
            totalPrice: 10,
            itemDiscount: 0.1,
            available: true
            },
            {
            item: {
                itemName: 'Pepino',
                itemCategory: 'Legume',
            },
                quantity: 4,
                unitPrice: 2,
                totalPrice: 8,
                itemDiscount: 0.2,
                available: true
            }],
            wholeSalePrice: 18,
            wholeSaleDiscount: 1.2,
            whoeSaleDiscountPercentage: 15,
            orderDate: '2015-03-25',
            dueOrderDate: '2015-03-25'
    }],
    saleDate: '2015-03-25',
    dueSaleDate: '2015-03-25'
};

const updatedOrder = {
    sale: [{
        saleOrder: [
            {
            item: {
                itemName: 'Couve',
                itemCategory: 'Hortifruti',
            },
            quantity: 5,
            unitPrice: 1,
            totalPrice: 10,
            itemDiscount: 0.1,
            available: true
            },
            {
            item: {
                itemName: 'Tomate',
                itemCategory: 'Legume',
            },
                quantity: 4,
                unitPrice: 2,
                totalPrice: 8,
                itemDiscount: 0.2,
                available: true
            }],
            wholeSalePrice: 18,
            wholeSaleDiscount: 1.2,
            whoeSaleDiscountPercentage: 15,
            orderDate: '2015-03-25',
            dueOrderDate: '2015-03-25'
    }],
    saleDate: '2015-03-25',
    dueSaleDate: '2015-03-25'
};

module.exports = { fakeOrder, updatedOrder };