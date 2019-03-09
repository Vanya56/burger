var express = require('express');
var burger = require('../models/burger.js');


module.exports = function(app) {
    // Get all burgers to be displayed
    app.get('/', function(request, response) {
        burger.selectAll(function(burgerData) {
           
            var incomingBurgerDataObject = {
                burgers: burgerData
            }

            response.render('index', incomingBurgerDataObject);
        });
    });

    // Post function to add new burger
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // Create the new burger in db
        burger.insertOne(newBurger, function() {
            response.redirect('/');
        });
    });

    // Update burger in db
    app.put('/:id', function(request, response) {
        // Set condition variable
        var id = 'id = ' + request.params.id;

        // Update the burger
        burger.updateOne(id, function() {
            response.redirect('/');
        });
    });
};