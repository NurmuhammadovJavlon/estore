import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/everstore", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Sever is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message})
})

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
