-- migrate:up
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    adress VARCHAR(50) NOT NULL,
    point INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES posts(user_id),
    FOREIGN KEY (id) REFERENCES orders(user_id),
    FOREIGN KEY (id) REFERENCES comments(user_id),
    FOREIGN KEY (id) REFERENCES scraps(user_id),
    FOREIGN KEY (id) REFERENCES review(user_id)
);
-- migrate:down
DROP TABLE users; 