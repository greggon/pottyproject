DROP DATABASE IF EXISTS pottyproject;
CREATE DATABASE pottyproject;

\c pottyproject;

CREATE TABLE potties (
    ID SERIAL PRIMARY KEY,
    isPoop BOOLEAN,
    entryTime TIMESTAMP
);

INSERT INTO potties (isPoop, entryTime)
    VALUES(true, current_timestamp);