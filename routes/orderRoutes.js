const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Order = require('../models/Order');


router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(StatusCodes.OK).json(orders);
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const order = await Order.findOne({ _id: id });


        res.status(StatusCodes.OK).json(order);
    } catch {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'O pedido não foi encontrado' });
    }
});


router.post('/', async (req, res) => {
    let order = new Order();

    // const { sale, saleDate, dueSaleDate } = req.body;

    // if(!sale) {
    //     res.status(422).json({error: "A venda é obrigatória"})
    // }

    // const order = {
    //     sale,
    //     saleDate,
    //     dueSaleDate,
    // };
    order = req.body;

    try {
        await Order.create(order);
        res.status(201).json({ message: 'Venda inserida com sucesso!', pedido: order });
    } catch (error) {
        res.status(500).json({error: error});
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const { sale, saleDate, dueSaleDate } = req.body;

    const order = {
        sale,
        saleDate,
        dueSaleDate,
    };


    try {
        const updatedOrder = await Order.updateOne({ _id: id }, order);

        res.status(StatusCodes.OK).json(updatedOrder);
    } catch {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'O pedido não foi encontrado' });
    } 
});

router.delete('/:id', async (req, res) =>{
    const id = req.params.id;

    const order = await Order.findOne({ _id: id });

    if(!order) {
        res.status(StatusCOdes.UNPROCESSABLE_ENTITY).json({ message: 'O pedido não foi encontrado' });
        return;
    }

    try {
        await Order.deleteOne({ _id: id });

        res.status(StatusCodes.OK).json({ message: 'Pedido removido com sucesso'});
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error});
    }
});

// router.delete('/deleteAll', async (req, res) => {
//     res.send('Usuários deletados');
// })


module.exports = router;