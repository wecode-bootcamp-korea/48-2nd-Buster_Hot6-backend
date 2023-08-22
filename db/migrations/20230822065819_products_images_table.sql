-- migrate:up
CREATE TABLE products_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(1000) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE products_image;
