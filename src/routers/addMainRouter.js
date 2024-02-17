function addMainRouter(app) {
  app.get("/", (req, res) => res.send("Hello, world"));

  app.get("/:info", (req, res) => res.send(`Hello, ${req.params.info}`));
}

module.exports = addMainRouter;
