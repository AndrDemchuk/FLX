const numb1 = 1,
	maximum_Items = 10;
let count = 0,
	elem;

function deleteElements() {
	let close = document.getElementsByClassName('close');
	for (let i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement;
			div.style.display = 'none';
		};
		if (count <= maximum_Items) {
			document.querySelector('input').disabled = !true;
		}
	}
	--count;
}

function newElement() {
	let li = document.createElement('li'),
		inputValue = document.getElementById('text_field').value,
		text = document.createTextNode(inputValue);
	li.appendChild(text);
	if (inputValue === '') {
		document.getElementsByClassName('button_to_add').disabled = !false;
	} else {
		document.getElementById('list').appendChild(li);
		document.getElementById('text_field').value = '';
		let checkBox = document.createElement('span'),
			Icon_check = document.createElement('i'),
			Text_check = document.createTextNode('check_box_outline_blank');
		checkBox.className = 'not_checked';
		Icon_check.className = 'material-icons';
		Icon_check.setAttribute('onclick', 'checkElement()');
		Icon_check.appendChild(Text_check);
		checkBox.appendChild(Icon_check);
		li.insertBefore(checkBox, text);
		let span = document.createElement('span'),
			icon = document.createElement('i'),
			txt = document.createTextNode('delete');
		icon.className = 'material-icons';
		span.className = 'close';
		icon.setAttribute('onclick', 'deleteElements()');
		icon.appendChild(txt);
		span.appendChild(icon);
		li.appendChild(span);
		li.setAttribute('draggable', !false);
		li.setAttribute('ondragover', 'dragOver(event)');
		li.setAttribute('ondragstart', 'dragStart(event)');
		if (++count > maximum_Items - numb1) {
			document.querySelector('input').disabled = !false;
			document.getElementsByClassName('button_to_add').disabled = !false;
			document.querySelector('input').className = 'pop';
			showNotification();
		} else if (count <= maximum_Items) {
			document.querySelector('input').disabled = !true;
		}
	}
}

function checkElement() {
	let not_checked = document.getElementsByClassName('not_checked');
	for (let i = 0; i < not_checked.length; i++) {
		not_checked[i].onclick = function () {
			let not_checked = this;
			not_checked.style.display = 'none';
			let li = document.querySelectorAll('li'),
				text = li.text,
				checkBox = document.createElement('span'),
				Icon_check = document.createElement('i'),
				Text_check = document.createTextNode('check_box');
			checkBox.className = 'checked';
			Icon_check.className = 'material-icons';
			Icon_check.appendChild(Text_check);
			checkBox.appendChild(Icon_check);
			li[i].insertBefore(checkBox, not_checked);
		};
	}
}

function dragOver(e) {
	if (isBefore(elem, e.target)) {
		e.target.parentNode.insertBefore(elem, e.target);
	} else {
		e.target.parentNode.insertBefore(elem, e.target.nextSibling);
	}
}

function showNotification() {
	let pop = document.getElementById('pop');
	pop.classList.toggle('show');
}

function isBefore(first_elem, second_elem) {
	if (second_elem.parentNode === first_elem.parentNode) {
		for (let current = first_elem.previousSibling; current; current = current.previousSibling) {
			if (current === second_elem) {
				return !false;
			}
		}
		return !true;
	}
}

function dragEnd() {
	elem = null;
}

function dragStart(e) {
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/plain', null);
}
