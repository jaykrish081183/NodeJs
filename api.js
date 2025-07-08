const express = require('express');
const mongoDb = require('mongodb');
const dbConnect = require('./mongodb.js');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', async (req, res) => {
    const data = await dbConnect();
    const result = await data.find().toArray();
    res.send(result);
});

app.post('/', async (req, res) => {
    // console.log(req.body);
    // return res.send(req.body);
    const data = await dbConnect();
    // const newProduct = { name: "Iphone 15", brand: "Apple", price: 900 };
    const result = await data.insertMany(req.body);
    res.send(result);
});

app.put('/', async (req, res) => {
    const data = await dbConnect();
    // Single data update
    const result = await data.updateOne(
        { brand: "nokia" },
        { $set: { ...req.body } }
    );
    /* // Multiple data update
    const result = await data.updateMany(
        { brand: "nokia" },
        { $set: { ...req.body } }
    ); */
    res.send(result);
});
app.put('/:xyz', async (req, res) => {
    const data = await dbConnect();
    const result = await data.updateOne(
        { brand: req.params.xyz },
        { $set: { ...req.body } }
    );
    res.send(result);
});

app.delete('/:id', async (req, res) => {
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongoDb.ObjectId(req.params.id)  });
    res.send(result);
});

app.listen(3000);