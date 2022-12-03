const express = require('express');
const app = express();
const conf = require("./config/conf");
let APIRoutes = require("./routes/http-routes");
let router = express.Router();

let apiRoutes = new APIRoutes(app);
apiRoutes.init();

app.listen(conf.port, () => {
  console.log(`------------------------------------------`);
  console.log(`********** Employee API Service **********`);
  console.log(`Listening on port ${conf.port}`);
  console.log(`------------------------------------------`);
});