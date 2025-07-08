const dbConnect = require("./mongodb.js");

const updateData = async () => {
    const data = await dbConnect();
    /* // Single data update
    const result = await data.updateOne(
        { name: "Iphone 14" },
        { $set: { price: 1200 } }
    ); */
    // Multiple data update
    const result = await data.updateMany(
        { brand: "Iphone 14" },
        { $set: { price: 1300 } }
    );
    if (result.acknowledged) {
        console.log("Data updated successfully");
    } else {
        console.log("Data update failed");
    }
}
updateData();