-- migrate:up
CREATE TABLE coordinates(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    coordinate_x INT NOT NULL,
    coordinate_y INT NOT NULL,
    products_images_id INT NOT NULL,
    FOREIGN KEY (products_images_id) REFERENCES products_images (id)
);

-- migrate:down
DROP TABLE coordinates;
