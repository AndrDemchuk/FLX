let k = 0,
	win1 = 0,
	win2 = 0,
	possible_price = 0,
	option = true;
let number = Math.floor(Math.random() * (5)),
	number2 = Math.floor(Math.random() * (10));
let game = confirm('Do you want to play a game ?');
switch (game) {
	case true:
		do {
			for (let i = 1; i < 4; i++) {
				let attempt = parseInt((prompt(i + ' attempt')), 10);
				if (attempt === number) {
					k = i;
					break;
				}
			}
			switch (k) {
				case 1:
					win1 = 10;
					break;
				case 2:
					win1 = 5;
					break;
				case 3:
					win1 = 2;
					break;
				default:
			}
			if (win1 === 0) {
				alert('Thank you for a game. Your prize is ' + win1);
			} else if (win1 > 0) {
				let count = 3;
				alert('Congratulation! Your prize is ' + win1)
				let second_game = confirm("Do you want to continue?");
				switch (second_game) {
					case true:
						for (let i = 1; i < 4; i++) {
							switch (i) {
								case 1:
									possible_price = 30;
									break;
								case 2:
									possible_price = 15;
									break;
								case 3:
									possible_price = 7;
									break;
								default:
							}
							let game2 = parseInt(prompt('Enter a number from 0 to 10\nAttemps left: ' +
								(count) + '\nTotal prize: ' + (win1 + win2) +
								'\nPossible prize on current attempt: ' + possible_price), 10);
							count--;
							if (game2 === number2) {
								win2 = possible_price;
								k = i;
								alert('Thank you for a game.Your total prize is: ' + (win1 + win2))
								break;
							}
						}
						if (win2 === 0) {
							alert("You've lost")
						}
						break;
					case false:
						("Thank you for a game. Your total prize is" + (win1 + win2));
						break;
					default:
				}
			}
			let newgame = confirm('Do you want to play again?');
			option = newgame;
		}
		while (option !== false);
		break;
	case false:
		alert('You did not become a millionaire,but can');
		break;
	default:
}
