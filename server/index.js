const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./Routes/user.routes");

dotenv.config();

const PORT = process.env.PORT;
const MongoUrl = process.env.MONGO_URL;

try {
    mongoose.connect(MongoUrl);
    console.log("Connected to Database Successfully");
} catch (error) {
    console.log("Error Connecting to Database: ", error);
}

app.use("/api", router);

app.use('/', (req, res) => {
    res.send("Server is Up and Running!!");
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})
