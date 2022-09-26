INSERT INTO admins (name, email, password) VALUES ('Clifford', 'cliff@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Ariel', 'oceaneyes@msn.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Bobby', 'billyjean@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Alice', 'wonderland@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Boris', 'natasha@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Cynthia', 'holadarling@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO items (seller_id, title, description, thumbnail_photo_url, cover_photo_url, price, date_listed, sold_date, featured)
VALUES (1, 'Airpods', 'Amazing sound quality, perfect condition', 'https://images.pexels.com/photos/2111763/pexels-photo-2111763.jpeg', 'https://images.pexels.com/photos/2111763/pexels-photo-2111763.jpeg?auto=compress&cs=tinysrgb&h=350', 500, '2022-09-15', NULL, TRUE),
(2, 'Flip-flops', 'They flip, they flop, what more could you ask for?', 'https://images.pexels.com/photos/2079231/pexels-photo-2079231.jpeg', 'https://images.pexels.com/photos/2079231/pexels-photo-2079231.jpeg?auto=compress&cs=tinysrgb&h=350', 40, '2022-09-20', NULL, TRUE),
(3, 'Coffee mug', 'Perfect for hot or cold beverages', 'https://images.pexels.com/photos/1082357/pexels-photo-1082357.jpeg', 'https://images.pexels.com/photos/1082357/pexels-photo-1082357.jpeg?auto=compress&cs=tinysrgb&h=350', 20, '2022-09-25', NULL, TRUE),
(1, 'Phone case', 'Stylish colours and patterns to suit all tastes', 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg', 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&h=350', 30, '2022-09-20', NULL, TRUE),
(3, 'Doggy treats', 'These treats will leave your doggo begging for more! So good even humans might be tempted', 'https://images.pexels.com/photos/1368687/pexels-photo-1368687.jpeg', 'https://images.pexels.com/photos/1368687/pexels-photo-1368687.jpeg?auto=compress&cs=tinysrgb&h=350', 20, '2022-09-15', NULL, TRUE);

INSERT INTO favourites (customer_id, product_id, admin_id)
VALUES (1, 1, 1),
(1, 4, 1),
(1, 3, 3),
(2, 5, 3);

INSERT INTO messages (user_id, item_id, admin_id, message, date_sent)
VALUES (1, 1, 1, 'Nice pods', '2022-09-25 00:00:00'),
(1, 1, 1, 'Thanks they are pretty rad', '2022-09-26 00:00:00'),
(2, 2, 2, 'Mint condition?', '2022-09-23 00:00:00');
