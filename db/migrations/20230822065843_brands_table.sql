-- migrate:up
CREATE TABLE brands(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)NOT NULL,
    FOREIGN KEY (id) REFERENCES products(brand_id)
);
-- migrate:down
DROP TABLE brands;
