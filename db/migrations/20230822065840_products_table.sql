-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_category_id VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    price decimal NOT NULL,
    discount VARCHAR(50) NOT NULL,
    brand_id INT NOT NUlL,
    stock INT NOT NULL,
    desc VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- migrate:down
DROP TABLE products;