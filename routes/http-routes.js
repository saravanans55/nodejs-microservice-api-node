let EmployeeController = require("../controllers/employee-controllers");

let APIRoutes = function(app){
  this.app = app;
 
  this.employeeControllers = new EmployeeController(app);
}

module.exports = APIRoutes;

APIRoutes.prototype.init = function(){

  let self = this;
  let app = this.app;

  console.log("API Routes Init");

  app.post("/v1/employee/:action", function(req, res){
    console.log("/v1/employee/:action");
    self.employeeControllers.actions(req,res);
  });
}