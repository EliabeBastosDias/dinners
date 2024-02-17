import { Express } from "express";

export function addMainRouter(app: Express) {
  app.get("/", (req, res) => res.send("Hello, world"));

  app.get("/:info", (req, res) => res.send(`Hello, ${req.params.info}`));
}
