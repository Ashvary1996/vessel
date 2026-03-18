import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  console.log("Hello, World !.......", process.pid);
  res.send(`Hello, World !.......${process.pid}`);
}); 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
