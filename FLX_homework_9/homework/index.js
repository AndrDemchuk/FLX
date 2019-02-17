let given_data = [{
	"_id": "5b5e3168c6bf40f2c1235cd6",
	"index": 0,
	"age": 39,
	"eyeColor": "green",
	"name": "Stein",
	"favoriteFruit": "apple"
}, {
	"_id": "5b5e3168e328c0d72e4f27d8",
	"index": 1,
	"age": 38,
	"eyeColor": "blue",
	"name": "Cortez",
	"favoriteFruit": "strawberry"
}, {
	"_id": "5b5e3168cc79132b631c666a",
	"index": 2,
	"age": 2,
	"eyeColor": "blue",
	"name": "Suzette",
	"favoriteFruit": "apple"
}, {
	"_id": "5b5e31682093adcc6cd0dde5",
	"index": 3,
	"age": 19,
	"eyeColor": "green",
	"name": "George",
	"favoriteFruit": "banana"
}]

function findTypes() {
	let array = [];
	for (var i = 0; i < arguments.length; i++) {
		array[i] = typeof arguments[i];
	}
	return array;
}

findTypes(null, 5, 'hello');

function executeforEach(array1, func_elem) {
	for (let i = 0; i < array1.length; i++) {
		func_elem(array1[i]);
	}
}

executeforEach([1, 2, 3], function (el) {
	console.log(el);
});


function mapArray(data, func_elem) {
	let transformed = [];
	executeforEach(data, (item) => {
		transformed.push(func_elem(item));
	});
	return transformed;
}

mapArray([2, 5, 8], function (el) {
	return el + 3;
});

function filterArray(data, func_elem) {
	let filtered = [];
	executeforEach(data, (el) => {
		if (func_elem(el)) {
			filtered.push(el);
		}
	});
	return filtered;
}

filterArray([2, 5, 8], function (el) {
	return (el > 3);
});

function getAmountOfAdultPeople(input) {
	let number_of_adult = filterArray(input, function (el) {
		return el.age > 18;
	}).length;
	return number_of_adult;
}

getAmountOfAdultPeople(given_data);

function getGreenAdultBananaLovers(input) {
	return mapArray(filterArray(
		input,
		el => el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana'
	), el => el.name);
}

getGreenAdultBananaLovers(given_data);

function keys(obj) {
	let collect_keys = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			collect_keys.push(key);
		}
	}
	return collect_keys;
}

keys({
	keyOne: 1,
	keyTwo: 2,
	keyThree: 3
})

function values(obj) {
	let collect_values = [];
	for (let key in obj) {
		collect_values.push(obj[key])
	}
	return collect_values;
}

values({
	keyOne: 1,
	keyTwo: 2,
	keyThree: 3
})

function showFormattedDate(input) {
	let day = input.getDate(),
		year = input.getFullYear();
	return `Date: ${day} of ${input.toString().slice(4, 8)}, ${year}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(input) {
	return !((input.getFullYear()) % 2);
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(input) {
	return !((input.getMonth) % 2);
}
isEvenMonth(new Date('2019-02-27T01:10:00'));
