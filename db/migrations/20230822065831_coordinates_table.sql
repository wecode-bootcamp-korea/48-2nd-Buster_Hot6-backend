-- migrate:up
CREATE TABLE coordinates(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    x INT NOT NULL,
    y INT NOT NULL,
    products_images_id INT NOT NULL,
);
-- migrate:down
DROP TABLE coordinates;
