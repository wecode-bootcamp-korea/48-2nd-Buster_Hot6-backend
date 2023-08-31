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


const processPayment = async (userId, amount) => {
    const connection = await oderDao.getConnection();  // orderDao에서 getConnection 호출
    try {
        await connection.beginTransaction();
        const paymentResult = await oderDao.createPaymentRecord(userId, amount, connection);
        const balanceResult = await oderDao.deductUserBalance(userId, amount, connection);
        await connection.commit();
        return { paymentResult, balanceResult };
    } catch (err) {
        await connection.rollback();
        console.error(err);
        throw err;
    } finally {
        connection.release();
    }
};



module.exports = { postOrder, processPayment};