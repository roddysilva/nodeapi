const url = 'http://localhost:3000/';

const PORT = 3000;

const controllers = {
    addOrder: 'order',
    getOrder: 'order',
    deleteById: 'order/',
    deleteAll: 'order/deleteAll',
    updateById: 'order/'
};

const app = {
    url: url,
    controllers: controllers
};

module.exports = { app, PORT };