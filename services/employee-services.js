let MongodbAdapter = require("../modules/mongodb-adapter");
let Tables = require("../modules/tables");
let mongo = require("mongodb");

let EmployeeService = function (app) {

    this.app = app;
    this.dbAdapter = new MongodbAdapter(app);
    this.tables = new Tables(app);
}

module.exports = EmployeeService;

//**********************************
//User CRUD Services
//**********************************

EmployeeService.prototype.list = function (data, cbk) {

    let self = this;
    let queryObj = data;

    self.dbAdapter.list(this.tables.EMPLOYEE_TABLE, queryObj, function (status, result) {
        cbk(status, result);
    });
}

EmployeeService.prototype.view = function (data, cbk) {

    let self = this;
    let queryObj = data;
    let reqObj = {};

    if(queryObj["_id"]){
        queryObj["_id"] = mongo.ObjectId(queryObj["_id"]);
    }

    reqObj["query"] = queryObj; //Queries & Conditions
    reqObj["projection"] = {}; //Get all the fields from table
    self.dbAdapter.findOne(this.tables.EMPLOYEE_TABLE, reqObj, function (status, result) {
        cbk(status, result);
    });
}

EmployeeService.prototype.delete = function (data, cbk) {

    let self = this;
    let rec_id = data;

    self.dbAdapter.delete(this.tables.EMPLOYEE_TABLE, rec_id, function (status, result) {
        cbk(status, result);
    });
}

EmployeeService.prototype.add = function (data, cbk) {

    let self = this;
    let inputObj = data;

    self.dbAdapter.insert(this.tables.EMPLOYEE_TABLE, inputObj, function (status, result) {
        cbk(status, result);
    });
}

EmployeeService.prototype.update = function (data, cbk) {

    let self = this;
    let inputObj = data;
    let rec_id = inputObj._id;
    delete inputObj._id;

    self.dbAdapter.update(this.tables.EMPLOYEE_TABLE, rec_id, inputObj, function (status, result) {
        cbk(status, result);
    });
}
