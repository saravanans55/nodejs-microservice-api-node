let MongodbAdapter = function (app) {
    this.app = app;
};

module.exports = MongodbAdapter;

MongodbAdapter.prototype.list = async function (tableName, queryObj, cbk) {

    let self = this;

    self.app.client.collection(tableName).find(queryObj).toArray(function (err, result){
        if(!err) {
            cbk(true, result);
        }else{
            cbk(false, err);
        }
    });
}


MongodbAdapter.prototype.findOne = async function (tableName, queryObj, cbk) {

    let self = this;

    self.app.client.collection(tableName).findOne(queryObj["query"], queryObj["projection"]).then(function (result) {

        cbk(true, result);

    }, function (err) {

        let errObj = {
            status: false,
            message: "Mongodb findOne error",
            error: err
        };
        console.log(err);
        cbk(false, errObj);
    });
}

MongodbAdapter.prototype.insert = async function (tableName, inputObj, cbk) {

    let self = this;

    self.app.client.collection(tableName).insertOne(inputObj, function (err, result){
        if(!err) {
            cbk(true, result);
        }else{
            cbk(false, err);
        }
    });
}

MongodbAdapter.prototype.update = function (tableName, rec_id, inputObj, cbk) {

    let self = this;

    self.app.client.update({
        index: tableName,
        id: rec_id,
        body: {
            "doc": inputObj,
            "detect_noop": false
        }
    }).then(function (result) {

        cbk(true, result);

    }, function (err) {

        let errObj = {
            status: false,
            message: "Mongodb update error",
            error: err
        };
        console.log(err);
        cbk(false, errObj);
    });
}

MongodbAdapter.prototype.delete = function (tableName, rec_id, cbk) {

    let self = this;

    self.app.client.delete({
        index: tableName,
        id: rec_id
    }).then(function (result) {

        cbk(true, result);

    }, function (err) {

        let errObj = {
            status: false,
            message: "Mongodb search error",
            error: err
        };

        cbk(false, errObj);
    });
}

MongodbAdapter.prototype.s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

MongodbAdapter.prototype.generateUUID = function () {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
};
