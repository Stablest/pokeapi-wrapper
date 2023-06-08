import express from "express";
import dotenv from "dotenv";
import { notFound } from "./middlewares/not-found";
import { pokeapiWrapper } from "./routes/pokeapi-wrapper";
dotenv.config();

const app = express();
const port = process.env.PORT;

// Parser

app.use(express.json());

// Router

app.use("/api/v1/pokeapi-wrapper/", pokeapiWrapper);

// Error

app.use(notFound);

async function start() {
  try {
    app.listen(port, () => {
      console.log("Server is running on port ", port);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
