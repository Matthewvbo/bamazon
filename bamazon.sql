DROP DATABASE IF EXISTS bamazon;

CREATE database bamazin;

USE bamazon;

CREATE TABLE products(
	idem_id INT(4) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_is)
);

Select * FROM products;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES (110, "shoes", "basketball", 129.99, 14)
	(120, "cleats", "Football", 119.99, 10)
    (130, "cleats", "Baseball", 99.99, 8)
    (140, "jersey", "sports", 25.99, 30)
    (150, "hat", "lifestyle", 16.99, 25)
    (160, "pads", "Football", 149.99, 10)
    (170, "gloves", "baseball", 59.99, 13)
    (180, "shorts", "sports", 25.99, 10)
    (190, "shirts", "lifestyle", 15.99, 10)
    (200, "pants", "Football", 49.99, 15)







