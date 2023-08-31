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


const handlePayment = async (req, res) => {
    const userId = req.body.userId;
    const amount = req.body.amount;

    try {
        const result = await orderService.processPayment(userId, amount);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    handlePayment
};


module.exports = { postOrder, handlePayment }