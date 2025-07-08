const dbConnect = require("./mongodb.js");

const insert = async () => {
    const data = await dbConnect();
    /* // Single data insertion
    const result = await data.insert(
        { name: "Iphone 14", brand: "Apple", price: 1000 }); */
    // Multiple data insertion
    const result = await data.insertMany([
        { name: "Iphone 14", brand: "Apple", price: 1000 },
        { name: "Galaxy S22", brand: "Samsung", price: 800 },
        { name: "Pixel 6", brand: "Google", price: 600 }
    ]);
    if (result.acknowledged) {
        console.log("Data inserted successfully");
    } else {
        console.log("Data insertion failed");
    }
}
insert();