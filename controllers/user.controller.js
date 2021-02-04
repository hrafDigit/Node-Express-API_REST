const model = require('../models/users.model')();

var userController = function () { };
// objet vide

userController.show = function (req, res, next) {
	model.find({}, (err, result) => {
		if (err) { console.log(err); }
		res.json({
			status: 200,
			result,
			message: 'Liste de tous les utilisateurs'
		});
		console.log('Liste OK');
	});
}

userController.edit = function (req, res) {
	let id = req.params.id;
	model.findById(id, (err, result) => {
		if (err) { console.log(err); }
		console.log(result.prenom);

		res.json({
			status: 200,
			message: "Vous avez séléectionné l'utilisateur : "
		});
		console.log('Edit | select by ID OK');

		result.save();
	});
}

// userController.delete = function (req, res) {
// 	let id = req.params.id;
// 	model.deleteOne({ _id: id }, (err, result) => {
// 		if (err) { console.log(err); }
// 		res.redirect('/users/');
// 		res.json({
// 			message: 'Donnée supprimée'
// 		});
// 		console.log('Delete OK');
// 	});
// }

// userController.save = function (req, res) {
// 	if (req.body.id == 0) {
// 		var body = req.body;
// 		body.status = false;

// 		model.create(body, (err, result) => {
// 			if (err) { console.log(err); }
// 			res.redirect('/users/');
// 		});
// 	}
// 	else {
// 		var body = req.body;

// 		model.updateOne({ _id: body.id }, {
// 			$set: {
// 				prenom: body.prenom,
// 				nom: body.nom,
// 				adresse: body.adresse,
// 			}
// 		}, { multi: true }, (error, result) => {
// 			if (error)
// 				throw error;
// 			res.redirect('/users/');
// 		});
// 	}
// }

module.exports = userController;

console.log('');
console.log('Executing Controller: user.controller.js...');