create database store_ratings;
use store_ratings;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(400),
    role ENUM('Admin', 'User', 'StoreOwner') NOT NULL
);

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(400),
    owner_id INT,
    average_rating FLOAT DEFAULT 0,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);

CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT CHECK(rating BETWEEN 1 AND 5),
    comment TEXT,
    FOREIGN KEY (store_id) REFERENCES stores(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email, password, address, role) VALUES
('Admin User', 'admin@example.com', 'Admin@123!', '123 Admin St', 'Admin'),
('Normal User', 'user@example.com', 'User@123!', '456 User Ave', 'User'),
('Store Owner', 'owner@example.com', 'Owner@123!', '789 Owner Blvd', 'StoreOwner');

INSERT INTO stores (name, email, address, owner_id) VALUES
('Store 1', 'store1@example.com', '101 Market St', 3),
('Store 2', 'store2@example.com', '202 Main St', 3);

INSERT INTO ratings (store_id, user_id, rating, comment) VALUES
(1, 2, 5, 'Great store!'),
(1, 2, 4, 'Good service');

CREATE DATABASE store_db;
USE store_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL CHECK (CHAR_LENGTH(name) >= 20),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(400) NOT NULL,
    role ENUM('admin', 'user', 'store_owner') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(400) NOT NULL,
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    store_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password, address, role) VALUES
('Admin User Test', 'admin@test.com', 'Admin@1234', 'Admin Address', 'admin'),
('Normal User Test', 'user@test.com', 'User@1234', 'User Address', 'user'),
('Store Owner Test', 'owner@test.com', 'Owner@1234', 'Store Owner Address', 'store_owner');

INSERT INTO stores (name, email, address, owner_id) VALUES
('ABC Store', 'abc@store.com', 'Store Address 1', 3),
('XYZ Store', 'xyz@store.com', 'Store Address 2', 3);

show tables;

select * from users;


