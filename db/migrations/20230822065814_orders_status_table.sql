-- migrate:up
CREATE TABLE orders_status(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE orders_status;
