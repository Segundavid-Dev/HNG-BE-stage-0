import express from "express";
import rateLimit from "express-rate-limit";
import router from "./routes/index.mjs";

// express application
const app = express();

// add rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});

// middlewares
app.use(express.json());
app.use(router);
app.use(limiter);

app.get("/", (req, res) => {
  res.send({ hng: "stage 1" });
});

export default app;
