// Dependencies 
var connection = require("./connection.js");

// ORM Methods to query db table
var orm = {
  // Method for performing a query of the entire db table. Callback ensures the data is returned only once the query is done
  selectAll: function(callback) {
    var allBurgers = "SELECT * FROM burgers";
    connection.query(allBurgers, function(err, result) {
      callback(result);
    });
  },
  // Method for adding burgers to db.
  insertOne: function(burger, callback) {
    var newBurger = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    burger.devoured = burger.devoured || 0;
    connection.query(newBurger, [burger.burger_name, burger.devoured], function(err, result) {
      callback(result);
    });
  },
  // Method for accessing & updating burgers in db from !devoured to devoured
  updateOne: function(burger, callback) {
    var eatBurger = "UPDATE burgers SET devoured=1 WHERE id=?";
    connection.query(eatBurger, burger.id, function(err, results) {
      callback(results);
    });
  }
};

module.exports = orm;

