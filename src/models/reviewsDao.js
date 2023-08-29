const { AppDataSource } = require("./dataSource");

const setReview = async (userID) => {
    try {
    const result = await AppDataSource.query(
        `
        SELECT nickname, porfile_image
        FROM users
        WHERE id = ?
        ;
        `,
        [userID]
    );
    return result;
    }catch{
    const error = new Error ('dataSource Error');
    error.ststusCode = 400;
 
    throw error;
   }
 }; 

const createReview = async (userId, content, rating) => {
    try{
    const result = await AppDataSource.query(
        `
        INSERT INTO reviews (
         user_id,
         content,
         rating
      ) VALUES (
        ?,?,?
    );
    `,
    [ userId, content, rating ]
    );
    return result;
    }catch{
    const error = new Error ('dataSource Error');
    error.ststusCode = 400;
 
    throw error;
   }
 };

const modifyReview =  async ( content, rating, reviewId)=>{
    try {
    const result = await AppDataSource.query(
        `
        UPDATE reviews
        SET
         content = ?,
         rating = ?
        WHERE
         id = ?
        ;
        `,
        [content, rating, reviewId]
     );
return result;
  }catch{
   const error = new Error ('dataSource Error');
   error.ststusCode = 400;

   throw error;
  }
}; 

const deleteReview = async (reviewId)=>{
 try{
   const result = await AppDataSource.query(
    `
    DELETE FROM reviews
    WHERE id = ?
    ;
    `,
    [reviewId]
    );
    return result;
    }catch{
    const error = new Error ('dataSource Error');
    error.ststusCode = 400;
 
    throw error;
   }
 };

module.exports = { setReview, createReview, modifyReview, deleteReview };