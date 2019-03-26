/* Write your code here */
//--------------------------TASK_1------------------------------------------
function assign(smth) {
	if (smth === null) {
		console.log(`null/undefined can't be converted to object `)
	}

	let newObj = Object(smth);

	for (let i = 1; i < arguments.length; i++) {
		let next = arguments[i];

		if (next !== null) {
			for (let key in next) {
				if (Object.prototype.hasOwnProperty.call(next, key)) {
					newObj[key] = next[key];
				}
			}
		}
	}
	return newObj;
}
//------------------------------TASK_2----------------------------------------
function Bot(bot_object) {
	this.name = bot_object.name;
	this.speed = bot_object.speed;
	this.x = bot_object.x;
	this.y = bot_object.y;
	this.defaultSpeed = bot_object.speed;
}

Bot.prototype.getSpeed = function () {
	return this.speed;
};
Bot.prototype.setSpeed = function (newSpeed) {
	this.speed = newSpeed;
};
Bot.prototype.getDefaultSpeed = function () {
	return this.defaultSpeed;
};
Bot.prototype.getCoordinates = function () {
	return {
		x: this.x,
		y: this.y
	};
};
Bot.prototype.setCoordinates = function (value) {
	this.x = value.x;
	this.y = value.y;
};
Bot.prototype.move = function (value) {
	this.drive(value);
};
Bot.prototype.showPosition = function () {
	return `I am Bot '${this.name}', located at ${this.x}:${this.y}`;
};
Bot.prototype.drive = function (entered) {
	if (entered === 'up') {
		this.y += this.speed;
	} else if (entered === 'down') {
		this.y -= this.speed;
	} else if (entered === 'right') {
		this.x += this.speed;
	} else if (entered === 'left') {
		this.x -= this.speed;
	} else {
		return `Enter valid data: up\down\left\right`;
	}
};

function Racebot(bot_object) {
	Bot.call(this, bot_object);
	this.clear = null;
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function (entered) {
	if (this.clear === entered) {
		this.setSpeed(this.speed + 1)
	} else {
		this.setSpeed(this.defaultSpeed);
	}
	this.clear = entered;
	this.drive(entered);
};

function Speedbot(bot_object) {
	Bot.call(this, bot_object);
}
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function () {
	this.setSpeed(this.getSpeed() + 2);
};
Speedbot.prototype.move = function (entered) {
	this.drive(entered);
	if (this.speed > this.defaultSpeed) {
		this.setSpeed(this.getSpeed() - 1);
	}
};

/*
//Task 1
let defaults = {
	a: 123,
	b: 777
};
let options = {
	a: 456
};
let configs = assign({}, defaults, options); // {a: 456, b: 777}

//Task 2
let Botty = new Bot({
	name: 'Johny',
	speed: 2,
	x: 0,
	y: 1
});
Botty.showPosition(); // I am Bot 'Johny', located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Johny', located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty', located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty', located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty', located at -2:9.

let Zoom = new Racebot({
	name: 'Lightning',
	speed: 2,
	x: 0,
	y: 1
});
Zoom.showPosition(); // I am Racebot 'Lightning', located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning', located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning', located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning', located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning', located at -2:15.

let Broom = new Speedbot({
	name: 'Thunder',
	speed: 2,
	x: 0,
	y: 1
});
Broom.showPosition(); // I am Speedbot 'Thunder', located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder', located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder', located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder', located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder', located at -4:8.
*/
