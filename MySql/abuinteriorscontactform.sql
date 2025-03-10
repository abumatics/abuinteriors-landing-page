CREATE DATABASE abuinteriors;

USE abuinteriors;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ka47l4190';
FLUSH PRIVILEGES;
SELECT * FROM messages;
SELECT * FROM messages;
TRUNCATE TABLE messages;


