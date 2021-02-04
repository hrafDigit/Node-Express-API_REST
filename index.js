/*
==================================================
=== Simple REST-API (by hrafDigit | fév.2021) ===
==================================================
*/

var express = require('express');
var app = express();

var server = { port: 8080 };
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));

var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var flash = require('connect-flash');

var MongoClient = require('mongodb').MongoClient;

// Appel du module router person.js
var users = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	cookie: { maxAge: 60000 },
	secret: 'woot',
	resave: false,
	saveUninitialized: false
}));
  
app.use(flash());

// app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use((err, req, res, next) => {
	res.locals.error = err;
	const status = err.status || 500;
	res.status(status);
	res.render('error');
});

app.use('/users', users);

// Avec le patron de conception (design Pattern) MVC,
// le code ci-dessous devient caduc...
// il est transposé en tout ou partie vers le fichier
// '/routes/users.js !!

/*
===============================
=== ROUTES ET METHODES HTTP ===
===============================
*/
/* 
== Création des routes ===

Le standard d’API REST impose des routes centrées autour des ressources 
et que la méthode HTTP utilisée reflète l’intention de l’action. Dans ce cas pratique, 
nous aurons besoin des routes suivantes:
GET		/users
GET		/user/:id
POST	/user
PUT		/user/:id
DELETE	/user/:id
*/

/*
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (
	err, client) => {

	if (err) throw err;
	var db = client.db('myRestApiDB');
	var users = db.collection('users');

	app.get('/', (req, res) => {
		users.find().toArray(function (err, result) {
			if (err) {
				throw err;
			}
			res.render('users.ejs', {
				title: 'CRUD MongoDB',
				users: result,
				txtId: '',
				txtNom: '',
				txtPrenom: '',
			});
		});
	});

	// Insertion de données
	app.post('/users/add', (req, res) => {
		let body = req.body;
		users.insertOne(body, (error, result) => {
			if (error) throw err;
			res.redirect('/users/');
		});
	});

	users.insertMany([{ prenom: 'John', nom: 'Wick', adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA' }, { prenom: 'Pan', nom: 'Pot', adresse : 'Feldstraße 66, 20359 Hamburg, Deutschland' }], (error, res) => {
		if (error) throw err;
		console.log(res.result.n);
		console.log(res.ops.length);
		console.log(res.result.n +" "+ "données insérées avec succès");
	});

	users.deleteMany({ nom: 'Travolta' }, (error, result) => {
		if (error)
			throw error;
		if (result.result.n > 0)
			console.log(result.result.n +" "+ "données supprimées avec succès");
		else
			console.log('Mhm... aucun élément ne correspond aux critères choisis !');
	});

});
*/



/*
// Test – Insertion de données multiples

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (
	err, client) => {

	if (err) throw err;
	var db = client.db('myRestApiDB');
	var users = db.collection('users');


	// Insertion de données
	users.insertMany(
		[
			{ 
				prenom: 'Henri', 
				nom: 'Matisse', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{
				prenom: 'Maurice',
				nom: 'de Vlaminck',
				adresse : 'Feldstraße 66, 20359 Hamburg, Deutschland'
			},
			{ 
				prenom: 'Georges', 
				nom: 'Braque', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Tsugouharu', 
				nom: 'Foujita', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Marc', 
				nom: 'Chagall', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Jean', 
				nom: 'Cocteau', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Jean', 
				nom: 'Dubuffet', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Edgar', 
				nom: 'Degas', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Claude', 
				nom: 'Monet', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'Auguste', 
				nom: 'Renoir', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'John', 
				nom: 'Wick', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{ 
				prenom: 'John', 
				nom: 'Wick', 
				adresse: 'Horseshoe Road, Mill Neck, Long Island, New-York City, USA'
			},
			{
				prenom: 'Pan',
				nom: 'Pot',
				adresse : 'Feldstraße 66, 20359 Hamburg, Deutschland'
			},
		], (error, res) => {
		if (error) throw err;
		console.log(res.result.n);
		console.log(res.ops.length);
		console.log(res.result.n +" "+ "données insérées avec succès");
	});

});
*/