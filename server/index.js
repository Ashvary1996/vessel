import express from "express";
import path from "path";

const app = express();
const port = 8000;

app.use(
  "/images",
  (req, res, next) => {
    console.log("🔥 Backend HIT for images:", req.url);
    next();
  },
  express.static("/home/ashvary/public", {
    index: true // make it false for production 
  }),
);

app.get("/", (req, res) => {
  console.log("Hello, World !.......", process.pid);
  res.send(`Hello, World !.......${process.pid}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
