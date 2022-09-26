const axios = require('axios');
const config = require('../config/config');


async function getOrder() {
    const request = {
        url: `${config.app.url}${config.app.controllers.getOrder}`,
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }
    const response = await axios(request);
    return response;
}

async function addOrder(data) {
    const request = {
        url: `${config.app.url}${config.app.controllers.addOrder}`,
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        data: data 
    }
    const response = await axios(request);
    return response;
}

async function deleteOrderById(id) {
     const request = {
         url: `${config.app.url}${config.app.controllers.deleteById}${id}`,
         method: 'DELETE',
         headers: {
             Accept: 'application/json'
         }
     }
     const response = await axios(request);
     return response;
}

async function updateOrder(newOrder, id) {
    const request = {
        url: `${config.app.url}${config.app.controllers.updateById}${id}`,
        method: 'PATCH',
        headers: {
            Accept: 'application/json'
        },
        data: newOrder
    }
    const response = await axios(request)
    return response;
}
module.exports = { getOrder, addOrder, deleteOrderById, updateOrder };