-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    products_category_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    price decimal NOT NULL,
    discount_percentage INT NOT NULL,
    brand_id INT NOT NUlL,
    stock INT NOT NULL DEFAULT 0,
    description VARCHAR(1000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (products_category_id) REFERENCES products_categories(id),
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);

-- migrate:down
DROP TABLE products;