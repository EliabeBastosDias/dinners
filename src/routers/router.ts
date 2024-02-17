import { Express } from "express";

import { addMainRouter } from "./addMainRouter";

export class Router {
  constructor(private app: Express) { }

  setup() {
    addMainRouter(this.app);
  }
}

