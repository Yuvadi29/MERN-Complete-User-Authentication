const express = require("express");
const app = express();

const PORT = 5000

app.get('/', (req, res) => {
    res.send("Server is Up and Running!!");
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})
