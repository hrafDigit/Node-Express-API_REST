const express = require('express');
const router = express.Router();

// Basic Route/'router'
// var basicController = require('../controllers/basicController');
// router.get('/', basicController.get);

// const model = require('../models/users.model')();
var userController = require('../controllers/user.controller');

/* A l'appel du formulaire donc de la route http://localhost:8080/ */
router.get('/', userController.show);

router.get('/select/:id', userController.edit);

// router.post('/add', userController.save);

// router.get('/delete/:id', userController.delete);


/*
router.get('/search', (req, res) => {
	let query = "SELECT * FROM personne";
	db.query(query, (err, result) => {
		if (err) {
			res.redirect("/");
		}
		res.json({
			status: 200,
			result,
			message: "Person list retrieved successfully"
		});
	});
});

*/


/*

router.get('/users', (req, res) => {
	res.status(200).json(users);
})

router.get('/users/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const user = users.find(user => user.id === id);
	res.status(200).json(user);
})

router.post('/users', (req,res) => {
    users.push(req.body);
    res.status(200).json(users);
})

router.put('/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    user.name =req.body.name,
    user.city =req.body.city,
    user.type =req.body.type,
    res.status(200).json(user);
})

router.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    users.splice(users.indexOf(user),1);
    res.status(200).json(users);
})

*/

module.exports = router;