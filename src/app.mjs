import express from "express";
import rateLimit from "express-rate-limit";
import router from "./routes/index.mjs";

// express application
const app = express();

// add rate limit
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1000,
});

// middlewares
app.use(express.json());
app.use(limiter);
app.use(router);

app.get("/", (req, res) => {
  res.send({ hng: "stage 1" });
});

export default app;
