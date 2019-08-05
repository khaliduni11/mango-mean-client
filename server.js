const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyPaser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;


app.use(cors());
app.use(bodyPaser.json());
app.use(express.static(path.join(__dirname, 'dist/mango')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/mango/index.html'))
})

app.listen(port, () => {
    console.log('sever is working ' + port);
})