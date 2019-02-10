let hours = new Date().getHours();
let login = prompt('Type your login', '');
if ((login === null) || (login.length === 0)) {
	alert('Canceled');
} else if (login.length < 4) {
	alert('I don`t know any users having name length less than 4 symbols');
} else if ((login === "User") || (login === "Admin")) {
	let password = prompt('Your password?', '')
	if ((password === null) || (password.length === 0)) {
		alert('Canceled');
	} else if (((login === "Admin") && (password === "RootPass")) ||
		((password === "UserPass") && (login === "User"))) {
		if (hours < 20) {
			alert('Good day,dear ' + login + '!');
		} else if (hours >= 20) {
			alert('Good evening,dear ' + login + '!');
		}
	} else {
		alert('Wrong password');
	}
}
