const express = require('express');
const EventEmitter = require('events');
const event = new EventEmitter();
const app = express();

let count = 0;

event.on('count', () => {
  count++;
  console.log('Count:', count);
});
event.on('reset', () => {
  count = 0;
  console.log('Count reset to zero');
});
event.on('getCount', () => {
  console.log('Current count:', count);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Event Emitter Example');
});
app.post('/increment', (req, res) => {
  event.emit('count');
  res.send('Count incremented');
});
app.post('/reset', (req, res) => {
  event.emit('reset');
  res.send('Count reset to zero');
});
app.get('/count', (req, res) => {
  event.emit('getCount');
  res.send(`Current count: ${count}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});