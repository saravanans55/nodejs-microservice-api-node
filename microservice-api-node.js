const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const conf = require("./config/conf");
let APIRoutes = require("./routes/http-routes");

// ========================================== 
// Basic Node Setups  
// ==========================================
app["conf"] = conf;
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());


// ========================================== 
// Database Connection 
// ==========================================
const client = new MongoClient(conf.db.url);

async function main(){
  await client.connect();
  console.log('Connected successfully to server');
  app["client"] = client.db(conf.db.db_name);

  return "done.";
}

 main().then(console.log).catch(console.error);


// ========================================== 
// Router Init 
// ==========================================
let apiRoutes = new APIRoutes(app);
apiRoutes.init();


// ========================================== 
// Running Server 
// ==========================================
app.listen(conf.port, () => {
  console.log(`------------------------------------------`);
  console.log(`********** Employee API Service **********`);
  console.log(`Listening on port ${conf.port}`);
  console.log(`------------------------------------------`);
});