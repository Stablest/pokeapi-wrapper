import express from "express";

import { notFound } from "../middlewares/not-found";
import { pokeapiWrapper } from "../routes/pokeapi-wrapper";

const app = express();

// Parser

app.use(express.json());

// Router

app.use("/api/v1/pokeapi-wrapper/", pokeapiWrapper);

// Error

app.use(notFound);

export { app };
