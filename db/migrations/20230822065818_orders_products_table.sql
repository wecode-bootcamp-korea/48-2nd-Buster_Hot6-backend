-- migrate:up
CREATE TABLE orders_products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    total_price DECIMAL(9,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id)
);
-- migrate:down
DROP TABLE orders_product;