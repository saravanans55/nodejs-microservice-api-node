let EmployeeService = function(app){

    this.app = app;
}

module.exports = EmployeeService;

EmployeeService.prototype.create = function(reqObj, cbk){

    let data = {
        "status" : false,
        "result" : []
    }
    cbk(true, data);
};

EmployeeService.prototype.update = function(reqObj, cbk){

    let data = {
        "status" : false,
        "result" : []
    }
    cbk(true, data);
};

EmployeeService.prototype.list = function(reqObj, cbk){

    let data = {
        "status" : false,
        "result" : []
    }
    cbk(true, data);
};

EmployeeService.prototype.view = function(reqObj, cbk){

    let data = {
        "status" : false,
        "result" : []
    }
    cbk(true, data);
};

EmployeeService.prototype.delete = function(reqObj, cbk){

    let data = {
        "status" : false,
        "result" : []
    }
    cbk(true, data);
};