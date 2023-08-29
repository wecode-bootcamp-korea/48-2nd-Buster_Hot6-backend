-- migrate:up
CREATE TABLE  post_categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE post_categories;