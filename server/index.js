const express = require("express");
const axios = require("axios");
const cors = require("cors");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        pid: process.pid,
        hostname: os.hostname(),
        uptime: process.uptime()
    });
});

 
app.get("/", (req, res) => {
    console.log(`Hello World : Request served by PID: ${process.pid}`);
    res.send(`Hello from PID ${process.pid}`);
});

 
app.get("/data", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        res.json({
            success: true,
            pid: process.pid,
            hostname: os.hostname(),
            data: response.data
        });

    } catch (error) {
        console.error("Error fetching data:", error.message);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} | PID: ${process.pid}`);
});

module.exports = app;