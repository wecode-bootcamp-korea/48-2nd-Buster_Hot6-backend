-- migrate:up
ALTER TABLE coordinates DROP FOREIGN KEY coordinates_ibfk_1;
ALTER TABLE coordinates DROP products_images_id;
ALTER TABLE coordinates ADD post_id INT NOT NULL;
ALTER TABLE coordinates ADD product_id INT NOT NULL;
ALTER TABLE coordinates ADD FOREIGN KEY(post_id) REFERENCES posts(id);
ALTER TABLE coordinates ADD FOREIGN KEY(product_id) REFERENCES products(id);

ALTER TABLE posts DROP image;

CREATE TABLE post_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    image_url VARCHAR(1000) NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts (id)
);

-- migrate:down

