const oderDao = require("../models/orderDao");

const postOrder = async (
    userId, 
    name, 
    email, 
    phoneNumber, 
    deliveryAddress, 
    deliveryName, 
    deliveryPhoneNumber, 
    address
    ) => {
    await oderDao.postOrder(
        userId, 
        name, 
        email, 
        phoneNumber, 
        deliveryAddress, 
        deliveryName, 
        deliveryPhoneNumber, 
        address,
    );
};

const postPayment = async (userId, amount) => {
    return await oderDao.postPayment(userId, amount);
};



module.exports = { postOrder, postPayment };