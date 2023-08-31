const orderService = require ("../services/orderService")
const { catchAsync } = require('../utils/error')

const postOrder =  catchAsync(async(req, res) => {
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

module.exports = { postOrder }