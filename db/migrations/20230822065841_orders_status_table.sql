-- migrate:up
CREATE TABLE orders_status(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    desc VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES orders(orders_status_id)
);
-- migrate:down
DROP TABLE orders_status;
