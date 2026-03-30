const express = require("express");
const axios = require("axios");
const cors = require("cors");
const os = require("os");

require("dotenv").config({
    path: "../.env"
});

const app = express();
const PORT = process.env.PORT || 8000;
const SERVER_NAME = process.env.SERVER_NAME || "unknown";

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/health", (req, res) => {

    console.log(
        `HEALTH → Container: ${os.hostname()} | PORT: ${PORT} | PID: ${process.pid} Handled by ${SERVER_NAME}`
    );
    res.status(200).json({
        status: "OK",
        server: SERVER_NAME,
        pid: process.pid,
        PORT: PORT,
        hostname: os.hostname(),
        uptime: process.uptime()
    });
});


app.get("/", (req, res) => {
    res.send(`Hello from ${SERVER_NAME} | Container: ${os.hostname()} | PID ${process.pid} `);
    res.send(`Hello from PID ${process.pid}`);
});


app.get("/data", async (req, res) => {
    try {
        console.log(
            `DATA → Container: ${os.hostname()} | PORT: ${PORT} | SERVER: ${SERVER_NAME}`
        );
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json({
            success: true,
            pid: process.pid,
            PORT: PORT,
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
    console.log(`${SERVER_NAME} : Server running on port ${PORT} | PID: ${process.pid}`);
});

module.exports = app;