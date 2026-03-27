import express from "express";
import mongoose from "mongoose";
import connectToDb from "./dbConfig.js";
const app = express();
const port = 8000;
//-- 

const Users = mongoose.models.user || mongoose.model("user", new mongoose.Schema({}), "user");
//--
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
app.get("/db", async (req, res) => {
  try {
    console.log("db route hit.."); 
    const users = await Users.find({});

    res.json({
      status: "success",
      users,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});
 

app.listen(port, async () => {
  await connectToDb();
  console.log(`Server is running at http://localhost:${port}`);
});