module.exports = function(){
    var db = require('../db/mongo-conn')();
    var Schema = require('mongoose').Schema;

    var users = Schema({
        prenom: String,
        nom: String,
        adresse: String,
        status: Boolean
    });

    return db.model('users', users);

}