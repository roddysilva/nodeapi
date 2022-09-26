const { fakeOrder, updatedOrder } = require('../support/helpers/fakeOrder');
const { addOrder, getOrder, deleteOrderById, updateOrder } = require('../support/helpers/axiosEndPoints');
const { StatusCodes } = require('http-status-codes');


describe("Testing this API's GET and POST methods", () => {
    const order = fakeOrder;
    const newOrder = updatedOrder;
    const id = '6331d22306b54c052a16c5e3';

    test("it should create (POST) a new order and the body should match", async () => {
        const data = await addOrder(order);
        expect(data.status).toBe(StatusCodes.CREATED);
        expect(data.body).toEqual(order.body);
    });
    test("it should GET all the users and return OK as the status code", async () => {
        const data = await getOrder();
        expect(data.status).toBe(StatusCodes.OK);
    });
    test("it should UPDATE an order by ID", async () => {
        
        const data = await updateOrder(newOrder, id);
        expect(data.status).toBe(StatusCodes.OK);

    });
    test("it should DELETE the order by id", async () => {
        const data = await deleteOrderById(id);
        expect(data.status).toBe(StatusCodes.OK);
    });

});