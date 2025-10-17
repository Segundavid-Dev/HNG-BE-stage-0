import express from "express";

// express application
const app = express();

// middlewares
app.use(express.json());

export default app;
