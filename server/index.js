import express from "express";
const app = express();
const port = 8000;


app.use(
  "/images",
  (req, res, next) => {
    console.log("🔥 Backend HIT for images:", req.url);
    next();
  },
  express.static("/home/ashvary/public", {
    index: false,
    extensions: ["jpg", "png"]  // remove this later 
  })
);

app.get("/", (req, res) => {
  console.log("Hello, World !.......", process.pid);
  res.send(`Hello, World !.......${process.pid}`);
});
 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});