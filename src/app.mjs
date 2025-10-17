import express from "express";
import router from "./routes/index.mjs";

// express application
const app = express();

// middlewares
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send({ hng: "stage 1" });
});

export default app;
