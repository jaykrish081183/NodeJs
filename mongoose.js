const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';

const main = async () => {
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
main().catch(err => console.log(err));
