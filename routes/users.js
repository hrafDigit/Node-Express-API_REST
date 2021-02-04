/*
===============================
=== ROUTES ET METHODES HTTP ===
===============================
*/

const express = require('express');
const router = express.Router();

// Basic Route/'router'
//var basicController = require('../controllers/basicController');
//router.get('/', basicController.get);

var userController = require('../controllers/user.controller');

/* A l'appel de l'API via un chemin spécifique – donc de la route prédéfinie par le dév. ou assimilé – 
ici : http://localhost:8080/ */
router.get('/', userController.show);

// http://localhost:8080/add/
router.post('/add', userController.save);

// http://localhost:8080/users/select/xxxxxxxxxx
router.get('/select/:id', userController.select);

router.get('/select/:id', userController.edit);
// !!! PROBLEME : router.get('/select/:id' n'édite pas en BDD !!

// http://localhost:8080/users/update/xxxxxxxxxx
router.put('/update/:id', userController.update);


/* A l'appel de l'API via un chemin spécifique – donc de la route prédéfinie par le dév. ou assimilé – http://localhost:8080/users/delete/[ + l'ID de l'item : ici l'ID est généré automatiquement par MongoDB sous forme de string '601bfed9a8ac93cd895c3d41']...
l'ID doit être préalablement copier-coller et ajouter à l'URL 'http://localhost:8080/users/delete/' dans le navigateur ou dans Postman avant de lancer la requête...
ce qui nous donne : à l'appel de l'API via la route http://localhost:8080/users/delete/601bfed9a8ac93cd895c3d41 */

// http://localhost:8080/users/delete/xxxxxxxxxx
router.get('/delete/:id', userController.delete);
//router.delete('/delete/:id', userController.delete);

// !!! PROBLEME : router.get('/delete/:id' ne supprime pas en BDD !!






/*
==============================================================
### Drafts & playground ###
*/

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