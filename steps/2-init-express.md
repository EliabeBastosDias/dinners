# Init express

``` node
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

app.get("/", (req, res) => res.send("Hello, world."));
```
