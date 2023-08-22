-- migrate:up
CREATE TABLE refunds(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orders_detail_id INT NOT NULL,
    refund_reason VARCHAR(50) NOT NULL,
    refund_image VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL
);
-- migrate:down
DROP TABLE refunds;
