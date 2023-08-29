const { AppDataSource } = require("./dataSource");

const setReview = async (userID) => {
    const result = await AppDataSource.query(
        `
        SELECT nickname, porfile_image
        FROM users
        WHERE id = ?
        ;
        `,
        [userID]
    )
    return result;
};

const createReview = async (userId, content, rating) => {
    await AppDataSource.query(
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
};

const modifyReview =  async ( content, rating, reviewId)=>{
    await AppDataSource.query(
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
};

const deleteReview = async (reviewId)=>{
 await AppDataSource.query(
    `
    DELETE FROM reviews
    WHERE id = ?
    ;
    `,
    [reviewId]
    );
};

module.exports = { setReview, createReview, modifyReview, deleteReview };