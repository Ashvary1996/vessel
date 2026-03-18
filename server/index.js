import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello, World from linux !.......");
});
app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message:`Server is healthy and running at port 8000 with pid ${process.pid}`
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
