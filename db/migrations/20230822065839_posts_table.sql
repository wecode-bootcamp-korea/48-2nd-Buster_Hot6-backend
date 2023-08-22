-- migrate:up
CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_category_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(300) NULL,
    user_id INT NOT NULL,
    image VARCHAR(50) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES scraps(post_id),
    FOREIGN KEY (id) REFERENCES comments(post_id)
);
-- migrate:down
DROP TABLE posts;