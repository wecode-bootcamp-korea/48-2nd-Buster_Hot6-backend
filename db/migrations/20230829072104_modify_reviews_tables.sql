-- migrate:up
ALTER TABLE reviews ADD product_id INT NOT NULL;
ALTER TABLE reviews ADD FOREIGN KEY(product_id) REFERENCES products(id);
-- migrate:down

