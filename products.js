const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
});
module.exports = mongoose.model('products', productSchema);
