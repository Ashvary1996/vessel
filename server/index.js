import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  console.log("Hello, World from linux !.......");

  res.send("Hello, World from linux !.......");
});
app.get("/cidi", (req, res) => {
  console.log("cicd testing");
  res.send("cicd testing");
});
app.get("/status", (req, res) => {
  console.log("Server is healthy and running at port 8000 with pid ${process.pid}");
  res.json({
    status: "ok",
    message: `Server is healthy and running at port 8000 with pid ${process.pid}`
  });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
