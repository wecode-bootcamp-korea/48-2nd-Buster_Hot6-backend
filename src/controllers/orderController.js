const orderService = require ("../services/orderService")
const { catchAsync } = require('../utils/error')

const postOrder = catchAsync(async(req, res) => {
    const { 
        userId,
        name, 
        email, 
        phoneNumber, 
        deliveryAddress, 
        deliveryName, 
        deliveryPhoneNumber, 
        address 
    } = req.body;

    const posts = await orderService.postOrder(
        userId, 
        name, 
        email, 
        phoneNumber, 
        deliveryAddress, 
        deliveryName, 
        deliveryPhoneNumber, 
        address
        );

    res.status(200).json({ data: posts });  
});

const postPayment = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const { amount } = req.body;


    if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
}

    const result = await orderService.postPayment(userId, amount);

    res.status(200).json({ data: result });
});

module.exports = { postOrder, postPayment }