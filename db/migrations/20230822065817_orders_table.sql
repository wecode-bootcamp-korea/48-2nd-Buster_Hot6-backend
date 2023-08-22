-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    email VARCHAR(50) NULL UNIQUE,
    orders_status_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (orders_status_id) REFERENCES orders_status (id)
);

-- migrate:down
DROP TABLE orders;