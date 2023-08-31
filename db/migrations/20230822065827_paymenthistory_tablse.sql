-- migrate:up
CREATE TABLE paymenthistory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);
-- migrate:down
DROP TABLE paymenthistory;
