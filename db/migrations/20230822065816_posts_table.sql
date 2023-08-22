-- migrate:up
CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_categories_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(3000) NULL,
    user_id INT NOT NULL,
    image VARCHAR(1000) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_categories_id) REFERENCES post_categories (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE posts;
