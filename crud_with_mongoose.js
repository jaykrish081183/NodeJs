const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';

// Insert data into MongoDB using Mongoose
const saveInDB = async () => {
    await mongoose.connect(url);
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String
    });
    const ProductsModel = mongoose.model('products', productSchema);

    const data = new ProductsModel({
        name: 'Jayesh Patel',
        price: 1000,
        brand: 'JP TECH' 
    });
    const result = await data.save();
    console.log(result);
}
// saveInDB().catch(err => console.log(err));

// Update data in MongoDB using Mongoose
const updateInDB = async () => {
    mongoose.connect(url);
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String
    });
    const ProductsModel = mongoose.model('products', productSchema);
    let result = await ProductsModel.updateOne(
        {
            name: 'Jayesh Patel'
        },
        {
            $set: {
                price: 1300,
                brand: 'JP TECH UPDATED'
            }
        });
    console.log(result);    
}
// updateInDB().catch(err => console.log(err));

// Delete data from MongoDB using Mongoose
const deleteInDB = async () => {
    await mongoose.connect(url);
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String
    });
    const ProductsModel = mongoose.model('products', productSchema);
    let result = await ProductsModel.deleteOne({name: 'Jayesh Patel'});
    console.log(result);
}
// deleteInDB().catch(err => console.log(err));

// Find data in MongoDB using Mongoose
const findInDB = async () => {
    await mongoose.connect(url);
    const ProductsModel = mongoose.model('products', productSchema);
    let result = await ProductsModel.find();
    console.log(result);
}
//findInDB().catch(err => console.log(err));