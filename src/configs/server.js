const express = require("express");
const Router = require("../routers/router");

class HttpServer {
  constructor(port = 3000) {
    this.port = port;
    this.app = express();
  }

  setup() {
    this._serverSetup();
    this._routerSetup();
  }

  _serverSetup() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.listen(this.port, () =>
      console.log(`Server running in port ${this.port}`)
    );
  }

  _routerSetup() {
    new Router(this.app).setup();
  }
}

module.exports = HttpServer;
