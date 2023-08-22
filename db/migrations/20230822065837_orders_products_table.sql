-- migrate:up
CREATE TABLE orders_products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price INT NOT NULL,
    FOREIGN KEY (id) REFERENCES refunds(orders_product_id)
);
-- migrate:down
DROP TABLE orders_product;