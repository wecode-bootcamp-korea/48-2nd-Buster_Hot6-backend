-- migrate:up
CREATE TABLE carts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    product_count INT NOT NULL
);
-- migrate:down
DROP TABLE carts;