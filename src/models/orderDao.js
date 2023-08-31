const  { AppDataSource }  = require("./dataSource");

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
    try{
    const result = await AppDataSource.query(
        `
        INSERT INTO orders (
        user_id, 
        name,
        email,
        phone_number,
        delivery_address,
        delivery_name,
        delivery_phone_number, 
        address
        ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?
        );
        `,
    [
        userId, 
        name, 
        email, 
        phoneNumber, 
        deliveryAddress, 
        deliveryName, 
        deliveryPhoneNumber, 
        address,
    ]
);
    
    return result;
    } catch (err) {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
    }
};

const postPayment = async (userId, amount) => {
    try {
        const updateResult = await AppDataSource.query(
            `UPDATE Users SET point = point- ? WHERE id = ?`,
            [amount, userId]
        );

        if (updateResult.affectedRows === 0) {
            const error = new Error('User not found or insufficient point');
            error.statusCode = 404;
            throw error;
        }

        await AppDataSource.query(
            `INSERT INTO PaymentHistory (user_id, amount) VALUES (?, ?)`,
            [userId, amount]
        );

        const [rows] = await AppDataSource.query(
            `SELECT point FROM users WHERE id = ?`,
            [userId]
        );

        return {updateResult, rows};
    } catch (err) {
        const error = new Error(err.message || 'Database error');
        error.statusCode = 400;
        throw error;
    }
};




module.exports = { postOrder, postPayment};
