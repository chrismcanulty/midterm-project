INSERT INTO admins (name, email, password) VALUES ('Clifford', 'cliff@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Ariel', 'oceaneyes@msn.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Bobby', 'billyjean@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Alice', 'wonderland@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Boris', 'natasha@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Cynthia', 'holadarling@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO items (seller_id, title, description, thumbnail_photo_url, cover_photo_url, price, date_listed, sold_date, featured)
VALUES (1, 'Rustic Mirror', 'Made out of recycled metals and mirrors, perfect for your workshop!', 'https://i.ibb.co/v4QLDhv/mirrorTN.png', 'https://i.ibb.co/v4QLDhv/mirrorTN.png', 15, '2022-09-15', NULL, TRUE),
(2, 'Repainted Vases', 'Sold as a pair, thrifted and repainted!', 'https://i.ibb.co/xqHn5k5/vaseTN.png', 'https://i.ibb.co/xqHn5k5/vaseTN.png', 40, '2022-09-20', NULL, TRUE),
(3, 'Vintage Couch', 'Saved from an estate sale and reupholstered with original pattern!', 'https://i.ibb.co/LNpg6mS/couchTN.png', 'https://i.ibb.co/LNpg6mS/couchTN.png', 70, '2022-09-25', NULL, TRUE),
(2, 'Light Blue Dresser', 'Once somebodys trash, then someones project, now your treasure!', 'https://i.ibb.co/nm3fJ6s/dresser-TN.png', 'https://i.ibb.co/nm3fJ6s/dresser-TN.png', 100, '2022-09-20', NULL, TRUE),
(3, 'Upcycled Ashtray', 'Our artisan sanded and hand painted this one of a kind ashtray!', 'https://i.ibb.co/FKMhdGD/ashtray-TN.png', 'https://i.ibb.co/FKMhdGD/ashtray-TN.png', 20, '2022-09-15', NULL, TRUE),
(1, 'Dreamcatcher', 'Saved and restrung to save you from nightmares', 'https://i.ibb.co/D1hB6kQ/dreamcatcher-TN.png', 'https://i.ibb.co/D1hB6kQ/dreamcatcher-TN.png', 30, '2022-09-15', NULL, TRUE);


INSERT INTO favourites (customer_id, product_id, admin_id)
VALUES (1, 1, 1),
(1, 4, 1),
(1, 3, 3),
(2, 5, 3);

INSERT INTO messages (user_id, item_id, admin_id, message, date_sent)
VALUES (1, 1, 1, 'Nice pods', '2022-09-25 00:00:00'),
(1, 1, 1, 'Thanks they are pretty rad', '2022-09-26 00:00:00'),
(2, 2, 2, 'Mint condition?', '2022-09-23 00:00:00');
