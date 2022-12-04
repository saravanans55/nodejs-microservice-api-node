let EmployeeController = require("../controllers/employee-controllers");

let APIRoutes = function(app){

  this.app = app;
  this.employeeControllers = new EmployeeController(app);
}

module.exports = APIRoutes;

APIRoutes.prototype.init = function(){

  let self = this;
  let app = this.app;

  app.get("/v1/employee/list", function(req, res){

    console.log("/v1/employee/list");
    console.log(req.query);
    self.employeeControllers.getEmployeeList(req,res);
  });

  app.get("/v1/employee/view", function(req, res){
    console.log("/v1/employee/view");
    console.log(req.query);
    self.employeeControllers.getSingleEmployee(req,res);
  });

  app.post("/v1/employee/create", function(req, res){
    console.log("/v1/employee/create");
    console.log(req.body);
    self.employeeControllers.createEmployee(req,res);
  });

  app.put("/v1/employee/update", function(req, res){
    console.log("/v1/employee/update");
    console.log(req.body);
    self.employeeControllers.updateEmployee(req,res);
  });

  app.delete("/v1/employee/delete", function(req, res){
    console.log("/v1/employee/delete");
    console.log(req.body);
    self.employeeControllers.deleteSingleEmployee(req,res);
  });
}