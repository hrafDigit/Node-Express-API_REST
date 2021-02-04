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

userController.select = function (req, res) {
	let id = req.params.id;
	model.findById(id, (err, result) => {
		if (err) { console.log(err); }

		res.json({
			status: 200,
			message: `Vous avez séléctionné l'utilisateur : ${id}`,
		});
		console.log("Vous avez séléctionné l'utilisateur : " + id);
		console.log('Select OK');
	});
}

userController.delete = function (req, res) {
	let id = req.params.id;
	model.deleteOne({_id:id} , (err, result) => {
		if (err) { console.log(err); }
		res.json({
			status: 200,
			message: `Vous avez supprimé l'utilisateur : ${id}`,
		});
		console.log("Vous avez supprimé l'utilisateur : " + id);
		console.log('Delete OK');
		// res.redirect('/users/');
	});
}

userController.edit = function (req, res) {
	let id = req.params.id;
	model.findById({_id:id}, (err, result) => {
		if (err) { console.log(err); }

		result.save();

		res.json({
			status: 200,
			message: `Vous avez edité l'utilisateur : ${id}`,
		});
		console.log("Vous avez edité l'utilisateur : " + id);
		console.log('Edit OK');
	});
}

userController.save = function (req, res) {
	if (req.params.id == 0) {
		var user = req.params;
		user.status = false;

		model.create(user, (err, result) => {
			if (err) { console.log(err); }
			res.redirect('/users/');
		});
	} else {
		var user = req.params;
		model.updateOne({ _id: user.id }, {
			$set: {
				prenom: user.prenom,
				nom: user.nom,
				adresse: user.adresse,
			}
		}, { multi: true }, (error, result) => {
			if (error)
				throw error;
			res.redirect('/users/');
		});
	}
}

// userController.delete = function (req, res) {
// 	let id = req.params.id;
// 	model.deleteOne({ _id: id }, (err, result) => {
// 		if (err) { console.log(err); }
// 		res.redirect('/users/');

// 		res.json({
// 			status: 200,
// 			result,
// 			message: 'Utilisateur supprimé'
// 		});
// 		console.log('Delete OK');
// 	});
// }



// userController.edit = function (req, res) {
// 	let id = req.params.id;
// 	model.findById({ _id: id }, (err, result) => {
// 		if (err) { console.log(err); }

// 		// result.save();

// 		// res.json({
// 		// 	status: 200,
// 		// 	result,
// 		// 	message: "Vous avez séléctionné l'utilisateur : "
// 		// });

// 		// console.log(result);

// 		console.log('Edit | select by ID OK');
// 	});
// }



userController.update = function (req, res) {
	model.updateOne({ _id: id }, {
		$set: {
			prenom: String,
			nom: String,
			adresse: String,
		}
	});
}


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