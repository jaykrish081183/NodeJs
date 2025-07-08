// var app = require("./app.js");
// var data = require("./api_data.js");

const express = require('express');
const app = express();
app.use(express.json());
const conn = require('./config_mysql.js');
app.get('/', (req, res) => {
  conn.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      return;
    }else{
      console.log('Data fetched from the database:', results);
      res.send(results);
    }
  });
});
app.post('/create', (req, res) => {
  const newUser = req.body;
  conn.query('INSERT INTO users SET ?', newUser, (err, result, fields) => {
    if(err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).send('Error inserting data');
    }else{
      console.log('Data inserted into the database:', result);
      res.status(201).send('User created successfully');
    }
  })
});
app.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
    if(err) {
      console.error('Error updating data in the database:', err);
      res.status(500).send('Error updating data');
    }else{
      console.log('Data updated in the database:', result);
      res.send('User updated successfully');
    }
  });
});
app.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;
  conn.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if(err) {
      console.error('Error deleting data from the database:', err);
      res.status(500).send('Error deleting data');
    }else{
      console.log('Data deleted from the database:', result);
      res.send('User deleted successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});