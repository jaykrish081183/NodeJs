const dbConnect = require("./mongodb.js");

const deleteData = async () => {
    const data = await dbConnect();
    // Single data deletion
    const result = await data.deleteOne({ name: "Iphone 14" });
    // Multiple data deletion
    const resultMany = await data.deleteMany({ brand: "Apple" });
    if (result.acknowledged && resultMany.acknowledged) {
        console.log("Data deleted successfully");
    } else {
        console.log("Data deletion failed");
    }
}
deleteData();