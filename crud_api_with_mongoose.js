const express = require('express');
require('./config.js');
const Product = require('./products.js');
const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
  // let data = new Product(req.body);
  // let result = await data.save();

  let result = await Product.insertMany(req.body);
  console.log(result);
  res.send(result);
});

app.get('/list', async (req, res) => {
  let result = await Product.find(); // Fetch all products
  res.send(result);
});

app.delete('/delete/:_id', async (req, res) => {
  let result = await Product.deleteOne(req.params); // Delete a product by ID
  res.send(result);
});

app.put('/update/:_id', async (req, res) => {
  result = await Product.updateOne( 
    { _id: req.params._id }, // Find the product by ID
    { $set: req.body } // Update the product with the new data
  );  
  res.send(result);
});

app.get('/search/:key', async (req, res) => {
  let result = await Product.find(
    {
      "$or": [
          {name: { $regex: req.params.key}},
          {brand: { $regex: req.params.key}}
      ]
    }
  ); // Fetch all products
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


