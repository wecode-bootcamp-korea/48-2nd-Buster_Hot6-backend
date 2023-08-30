    const { AppDataSource } = require("./dataSource");

    const getProductsByCategoryId = async (categoryId, offset, limit, orderingQuery, priceRangeQuery) => {
        try{
            const products = await AppDataSource.query(`
        SELECT 
        p.id, 
        p.products_category_id, 
        p.name, 
        p.price, 
        p.discount_percentage, 
        p.brand_id, 
        p.stock, 
        p.description, 
        p.created_at, 
        p.updated_at, 
        pc.name as category_name,
        pi.image_url
        FROM products p
        INNER JOIN products_categories pc ON p.products_category_id = pc.id
        LEFT JOIN products_images pi ON p.id = pi.product_id
        WHERE pc.id = ?  
        LIMIT ?, ?;
        `,
        [categoryId, offset, limit]
        );
        return products;
        }catch(eroor){
            const error = new Error("DataSource ERROR CategoryId");
            error.statusCode = 401;
        }
    }



    const getAllProducts = async () => {
        try{
        const products = await AppDataSource.query(`
            SELECT 
            p.id, 
            p.products_category_id, 
            p.name, 
            p.price, 
            p.discount_percentage, 
            p.brand_id, 
            p.stock, 
            p.description, 
            p.created_at, 
            p.updated_at, 
            pc.name as category_name, 
            pi.image_url
            FROM products p
            INNER JOIN products_categories pc ON p.products_category_id = pc.id
            LEFT JOIN products_images pi ON p.id = pi.product_id
            `
        );
        return products;
    }catch(eroor){
        const error = new Error("DataSource ERROR Products");
        error.statusCode = 401;
        }   
    }

    const getProductsByCategoryName = async (categoryName, offset, limit) => {
        try{
        const products = await AppDataSource.query(`
            SELECT 
            p.id, 
            p.products_category_id, 
            p.name, 
            p.price, 
            p.discount_percentage, 
            p.brand_id, 
            p.stock, 
            p.description, 
            p.created_at, 
            p.updated_at, 
            pc.name as category_name,
            pi.image_url
            FROM products p
            INNER JOIN products_categories pc ON p.products_category_id = pc.id
            LEFT JOIN products_images pi ON p.id = pi.product_id
            WHERE pc.name = ? 
            LIMIT ?, ?;
            `,
            [categoryName, offset, limit]
        );
            return products;
        }catch(eroor){
            const error = new Error("DataSource ERROR CategoryName");
            error.statusCode = 401;
        }
    }

module.exports = {
    getProductsByCategoryId,
    getAllProducts,
    getProductsByCategoryName
};
