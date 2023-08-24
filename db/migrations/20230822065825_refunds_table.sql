-- migrate:up
CREATE TABLE refunds(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orders_products_id INT NOT NULL,
    refund_reason VARCHAR(3000) NOT NULL,
    refund_image VARCHAR(1000) NOT NULL,
    FOREIGN KEY (orders_products_id) REFERENCES orders_products (id)
);

-- migrate:down
DROP TABLE refunds;
