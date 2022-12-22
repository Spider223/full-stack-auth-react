const express = require("express");
const userRouter = require("./routers/userRouter");
const dbConnect = require("./db/dbConnect");
const cors = require("cors");

dbConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("hello world from auth project");
});

const port = 5000;

app.listen(port, () => {
  console.log(`port running ${port}`);
});
