let k = 3,
	attempt,
	win = 0,
	choice = false,
	random = 5,
	start_prize = 5,
	go_on,
	again,
	prize = 5,
	number;
let game = confirm('Do you want to play a game?')

while ((game) || (go_on) || (again)) {
	k = 4;
	for (let i = 0; i < 3; i++) {
		prize = start_prize;
		if (choice) {
			random *= 2;
			prize *= 3;
		} else {
			prize = 5;
		}
		switch (i) {
			case 0:
				prize *= 2;
				break;
			case 1:
				prize *= 1;
				break;
			case 2:
				prize = (prize / 2) - 0.5;
				break;
			default:
		}
		number = Math.floor(Math.random() * (random))
		k--;
		attempt = parseInt(prompt('Enter a number from 0 to ' + random + '\nAttemps left: ' +
			k + '\nTotal prize: ' + win + '\n Possible prize on current attempt: ' + prize));
		game = false;
		go_on = false;
		again = false;
		if (number === attempt) {
			win += prize;
			alert('Congratulations! Your prize is ' + win);
			go_on = confirm('Do you want to continue?');
			choice = false;
			choice = go_on;
			break;
		}
	}
	if (number !== attempt) {
		alert('Thank you for a game. Your prize is ' + win);
		again = confirm('Do you want to play again?');
	} else if (!go_on) {
		again = confirm('Do you want to play again?');

	}
	if (game === 'false') {
		alert('You did not become a millionare, but can')
	}
}
