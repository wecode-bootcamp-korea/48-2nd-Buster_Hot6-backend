-- migrate:up
CREATE TABLE products_categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE products_categories;
