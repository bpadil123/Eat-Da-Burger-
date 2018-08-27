var orm = require("../config/orm.js");


var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    update:function(condition, cb) {
        orm.update("burgers", {devoured: true}, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
