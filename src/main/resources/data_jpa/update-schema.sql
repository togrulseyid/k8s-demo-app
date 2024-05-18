DROP TABLE IF EXISTS guest;
drop sequence if exists guest_seq;
CREATE TABLE guest
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    note TEXT
);
