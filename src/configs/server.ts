import express, { Express } from 'express';
import { Router } from '../routers/router';
import { MemoryMetric } from "./memoryMetric";

export class HttpServer {
  private app: Express;

  constructor(private port: number) {
    this.app = express()
  }

  public setup(): void {
    this.serverSetup();
    this.routerSetup();
  }

  private serverSetup() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.listen(this.port, () => {
      console.log(`Server running in port ${this.port}`);
      new MemoryMetric().meter('Server running');
    });
  }

  private routerSetup() {
    new Router(this.app).setup();
  }
}
