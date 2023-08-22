-- migrate:up
CREATE TABLE scraps(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL
);
-- migrate:down
DROP TABLE scraps;