const getPosts = async (postId) => {
    try{
      const [result] = await DataSource.query(
      `
        SELECT
        p.id,
        p.post_categories_id AS postCategoriesId
        p.title,
        p.content,
        p.user_id AS userId 
        p.image
        FROM posts p
        WHERE postCategoriesId = ?
        `,
      [postId]
    );
    return result
  } catch {
    const error = new Error('dataSource Error');
    error.statusCode = 400;
  
    throw error;
    }
};

module.exports = { getPosts }

  