var orm = require("../config/orm.js");

// Burger object to be exported with data update functions
var burger = {
    // Gets data from burger table
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    // Inserts new burger into table
    insertOne: function(newBurgerName, cb) {
        orm.insertOne('burgers', 'burger_name', newBurgerName, function(result) {
            cb(result);
        });
    },
    // Updates a previously existing burger
    updateOne: function(devouredBurgerID, cb) {
        orm.updateOne('burgers', 'devoured = true', devouredBurgerID, function(result) {
            cb(result);
        });
    }
};


module.exports = burger;