import express from "express";
import { Router } from "../routers/router";

export class HttpServer {
  constructor(private app = express(), private port = 3000) { }

  public setup(): void {
    this.serverSetup();
    this.routerSetup();
  }

  private serverSetup() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.listen(this.port, () =>
      console.log(`Server running in port ${this.port}`)
    );
  }

  private routerSetup() {
    new Router(this.app).setup();
  }
}
