-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NULL UNIQUE, 
    phone_number VARCHAR(50) NOT NULL,
    delivery_address VARCHAR(100) NOT NULL,
    delivery_name VARCHAR(50) NOT NULL,
    delivery_phone_number VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE orders;