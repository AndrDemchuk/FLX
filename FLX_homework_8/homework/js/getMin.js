function getMin() {
	let min_number = arguments[0]
	for (var i = 1; i < arguments.length; i++) {
		if (arguments[i] < min_number) {
			min_number = arguments[i];
		}
	}
	return min_number;
}

getMin(7, 5, 3, 20, 1);
