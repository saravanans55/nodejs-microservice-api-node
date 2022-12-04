let EmployeeService = require("../services/employee-services");

let EmployeeController = function(app){
    this.app = app;
    this.employeeServices = new EmployeeService(app);
}

module.exports = EmployeeController;

EmployeeController.prototype.getEmployeeList = function(req, res){
    
    let self = this;
    let reqObj = req["query"];
    let resObj = {
        "status" : false,
        "data" : null,
        "message" : ""
    };

    self.employeeServices.list(reqObj, function(status, data){
        if(status){
            resObj["status"] = true;
            resObj["data"] = data;
            resObj["message"] = "Success";
        }else{
            resObj["status"] = false;
            resObj["data"] = [];
            resObj["message"] = "Failed";
        }
        res.json(resObj);
    });
}

EmployeeController.prototype.getSingleEmployee = function(req, res){
    
    let self = this;
    let reqObj = req["query"];
    let resObj = {
        "status" : false,
        "data" : null,
        "message" : ""
    }

    self.employeeServices.view(reqObj, function(status, data){
        if(status){
            resObj["status"] = true;
            resObj["data"] = data;
            resObj["message"] = "Success";
        }else{
            resObj["status"] = false;
            resObj["data"] = [];
            resObj["message"] = "Failed";
        }
        res.json(resObj);
    });
}

EmployeeController.prototype.createEmployee = function(req, res){
    
    let self = this;
    let reqObj = req["body"];
    let resObj = {
        "status" : false,
        "data" : null,
        "message" : ""
    }

    console.log("createEmployee----------");
    console.log(reqObj);

    self.employeeServices.add(reqObj, function(status, data){
        if(status){
            resObj["status"] = true;
            resObj["data"] = data;
            resObj["message"] = "Success";
        }else{
            resObj["status"] = false;
            resObj["data"] = [];
            resObj["message"] = "Failed";
        }
        res.json(resObj);
    });
}

EmployeeController.prototype.updateEmployee = function(req, res){
    
    let self = this;
    let reqObj = req["body"];
    let resObj = {
        "status" : false,
        "data" : null,
        "message" : ""
    }

    self.employeeServices.update(reqObj, function(status, data){
        if(status){
            resObj["status"] = true;
            resObj["data"] = data;
            resObj["message"] = "Success";
        }else{
            resObj["status"] = false;
            resObj["data"] = [];
            resObj["message"] = "Failed";
        }
        res.json(resObj);
    });
}

EmployeeController.prototype.deleteSingleEmployee = function(req, res){
    
    let self = this;
    let reqObj = req["body"];
    let resObj = {
        "status" : false,
        "data" : null,
        "message" : ""
    }

    self.employeeServices.delete(reqObj, function(status, data){
        if(status){
            resObj["status"] = true;
            resObj["data"] = data;
            resObj["message"] = "Success";
        }else{
            resObj["status"] = false;
            resObj["data"] = [];
            resObj["message"] = "Failed";
        }
        res.json(resObj);
    });
}


