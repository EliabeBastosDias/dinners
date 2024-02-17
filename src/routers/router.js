const addMainRouter = require("./addMainRouter");

class Router {
  constructor(app) {
    this.app = app;
  }

  setup() {
    addMainRouter(this.app);
  }
}

module.exports = Router;
