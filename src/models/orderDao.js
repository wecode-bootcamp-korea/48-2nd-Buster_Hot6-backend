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

  module.exports = { postOrder };