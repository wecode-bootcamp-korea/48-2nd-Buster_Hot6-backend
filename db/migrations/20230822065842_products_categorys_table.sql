-- migrate:up
CREATE TABLE products_category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
-- migrate:down
DROP TABLE product_category;