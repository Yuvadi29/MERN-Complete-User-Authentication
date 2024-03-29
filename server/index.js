const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const router = require("./Routes/user.routes");
const cors = require("cors");

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

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
