const express = require('express');
const app = express();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
});
conn.connect((err) => {
  if (err) {  
    console.error('Error connecting to the database:', err);
    return;
  } 
  console.log('Connected to the database');
});



conn.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error fetching data from the database:', err);
    return;
  }
  console.log('Data fetched from the database:', results);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});