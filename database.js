let { Client } = require('pg');
let client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Bhavesh@123",
    database: "Exam"
});
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = client;