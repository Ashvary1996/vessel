const { default: axios } = require("axios");
const express = require("express");
require("dotenv").config({
    path: ".././.env",
});
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
     console.log("/ route hit");
    res.send("Hello World!")
});
app.get("/data", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("/data hit");
        
        res.json({
            msg: "success",
            data: response.data
        })
    } catch (error) {
        console.log("err", error);
        res.json({
            msg: "error",
            error: error
        })

    }

});

app.listen(port, () => {
    console.log(process.env.NAME, `Example app listening on port ${port}`);
});

module.exports = app;