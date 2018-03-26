var express = require('express');
var app = express();

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

var dogs = [
    { 
    	id: 1, 
    	name: 'Polly', 
    	age: 2 
    },
    { 
    	id: 2, 
    	name: 'Jax', 
    	age: 3 
    },
    { 
    	id: 3, 
    	name: 'Ian', 
    	age: 7 
    }
];

var cats = [
    { 
    	id: 1, 
    	name: 'Mr. Meow', 
    	age: 5 
    },
    { 
    	id: 2, 
    	name: 'Ms. Whiskers', 
    	age: 4 
    },
    { 
    	id: 3, 
    	name: 'Cleocatra', 
    	age: 3 }
];

app.get('/api/dogs', function(req, res) {
    res.json(dogs);
});

//to show each dog on each page ex. api/dogs/1 will show first dog
// app.get('/api/dogs/:dog_idx', function(req, res){
// 	res.json(dogs[req.params.dog_idx]);
// })

// to get dog based off id on each page w route api/dogs/1
app.get('/api/dogs/:dog_id', function(req, res){
	var selectedDog = dogs.filter(function(dogObj){
		return dogObj.id == req.params.dog_id
	})
	console.log(selectedDog);
	res.json(selectedDog);
})


app.get('/api/cats', function(req, res) {
    res.json(cats);
});

// app.get('/api/cats/:cat_idx', function(req, res){
// 	res.json(cats[req.params.cat_idx]);
// });

app.get('/api/cats/:cat_id', function(req, res){
	var selectedCat = cats.filter(function(catObj){
		return catObj.id == req.params.cat_id
	})
	console.log(selectedCat);
	res.json(selectedCat);
});

app.get('/api/greetings/:firstName/:lastName', function(req, res){
	var firstName = req.params.firstName;
	var lastName = req.params.lastName;

	res.send(`Hello, ${firstName} ${lastName} !`);
});

app.get('/api/dogAge/:age', function(req, res){
	var dogAge = req.params.age 
	var selectedDogsAge = dogs.filter(function(dogObj){
		return dogObj.age == dogAge
	})
	console.log(selectedDogsAge);
	res.json(selectedDogsAge);
});

app.get('/api/catAge/:age', function(req, res){
	var catAge = req.params.age;
	var selectedCatAge = cats.filter(function(catObj){
		return catObj.age == catAge;
	})
	console.log(selectedCatAge);
	res.json(selectedCatAge);
});

// /api/dogNamesWith/:letter
app.get('/api/dogNamesWith/:letter', function(req,res){
	var letterFromUrl = req.params.letter;
	var dogWithThatLetter = dogs.filter(function(dogName){
		return dogName.name[0].toLowerCase() === letterFromUrl.toLowerCase();
	})
	console.log(dogWithThatLetter);
	res.json(dogWithThatLetter);
})

app.get('/api/catNamesWith/:letter', function(req, res){
	var letterFromUrl = req.params.letter;
	var firstLetter = cats.filter(function(catName){
		return catName.name[0].toLowerCase() === letterFromUrl.toLowerCase();
	})
	console.log(firstLetter);
	res.json(firstLetter);
});


app.listen(3000, function() {
    console.log('listening at 3000');
});