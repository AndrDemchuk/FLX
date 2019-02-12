function addOne(x) {
	return x + 1;
}

function pipe() {
	let value = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		value = arguments[i](value);
	}
	return value;
}

pipe(7, addOne);
