/**
 * Created by Grigoriy on 7/9/2017.
 */
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pottyproject';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE items(id SERIAL PRIMARY KEY, isPotty BOOLEAN, timestamp DATETIME)');
query.on('end',() => { client.end(); });