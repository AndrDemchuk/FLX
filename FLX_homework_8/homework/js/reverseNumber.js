function reverseNumber(a) {
	let reverse = 0;
	while (a) {
		let float = a % 10;
		a = ((a / 10) | 0);
		reverse = (reverse * 10) + float;
	}
	return reverse;
}

reverseNumber(18200);
