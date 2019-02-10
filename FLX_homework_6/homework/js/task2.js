let price = parseFloat(prompt('Enter the price you wish to proceed an operation on:', ''));
let discount = parseFloat(prompt('discount:', ' '));
if (!isNaN(price) && !isNaN(discount) && (price >= 0) && (price <= 9999999) && (discount >= 0) && (discount <= 99)) {
	let final_price = price * (1 - discount / 100);
	let saved = price - final_price;
	price = Math.round(price * 100) / 100
	discount = Math.round(discount * 100) / 100;
	final_price = Math.round(final_price * 100) / 100;
	saved = Math.round(saved * 100) / 100;
	alert('Price without discount: ' + price + '\nDiscount: ' + discount + '%\n' +
		'Price with discount: ' + final_price + '\nSaved: ' + saved);
} else {
	document.write('invalid input data');
}
