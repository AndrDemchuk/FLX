let a = parseFloat(prompt('parametr a:', ''), 10);
let b = parseFloat(prompt('parametr b:', ''), 10);
let c = parseFloat(prompt('parametr c:', ''), 10);
if (isNaN(a) || !isFinite(a) || (a === 0) || isNaN(b) || !isFinite(b) || isNaN(c) || !isFinite(c)) {
	alert('Invalid input data');
} else {
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		alert('no solution (Discriminant < 0)');
	} else if (d === 0) {
		let x = -b / (2 * a);
		alert(x);
		/*We`ve got only one solution available,due to the fact that discriminant is equal to zero*/
	} else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		alert('x1: ' + x1 + '\nx2: ' + x2);
	}
}
