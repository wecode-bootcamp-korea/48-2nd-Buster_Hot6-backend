-- migrate:up
CREATE TABLE brands(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)NOT NULL
);

-- migrate:down
DROP TABLE brands;

