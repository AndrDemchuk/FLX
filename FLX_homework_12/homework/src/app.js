const root_node = document.getElementById('root');
const ToDoKey = 'myAwesomeTodoList';
const Done_Key = 'myAwesomeDoneList';
const ToDo_json = localStorage.getItem(ToDoKey);
const done_json = localStorage.getItem(Done_Key);
const items_ToBeDone = JSON.parse(ToDo_json) || [];
const doneItems = JSON.parse(done_json) || [];
const nonExistantIndex = -1;
window.addEventListener('load', Hash_check);
window.addEventListener('hashchange', Hash_check);
const MainPageHash = '';
const NewPageHash = '#/add';
const Modify_Hash = '#/modify/';

function setLocalStorageObjectItem(arr, localStorageKey) {
	localStorage.setItem(localStorageKey, JSON.stringify(arr));
}

function Hash_check() {
	if (location.hash === MainPageHash) {
		renderMainPage();
	}

	if (location.hash === NewPageHash) {
		renderAddNewItemPage();
	}

	if (location.hash.includes(Modify_Hash)) {
		renderModifyItemPage();
	}
}

function renderMainPage() {
	root_node.innerHTML = '';

	const header1 = document.createElement('h1');
	root_node.appendChild(header1);

	const header1Text = document.createTextNode('Simple TODO application');
	header1.appendChild(header1Text);

	const addingButton = document.createElement('button');
	root_node.appendChild(addingButton);

	const addingButtonText = document.createTextNode('Add new task');
	addingButton.appendChild(addingButtonText);
	addingButton.setAttribute('class', 'button');

	const Render_Arr = items_ToBeDone.concat(doneItems);

	if (!Render_Arr.length) {
		const p1 = document.createElement('p');
		root_node.appendChild(p1);

		const p1Text = document.createTextNode('TODO is empty');
		p1.setAttribute('class', 'empty-list');
		p1.appendChild(p1Text);

	} else {
		const items_ToBeDoneList = document.createElement('ul');
		root_node.appendChild(items_ToBeDoneList);

		Render_Arr.forEach((item) => {
			const actionListItem = document.createElement('li');
			actionListItem.setAttribute('class', 'action-list-item');
			root_node.appendChild(actionListItem);
			actionListItem.setAttribute('id', item.id);

			const sq1 = document.createElement('img');
			actionListItem.appendChild(sq1);
			sq1.setAttribute('class', 'square');

			const action_toDo = document.createElement('a');
			actionListItem.appendChild(action_toDo);

			const actionDescription_toDo = document.createTextNode(item.description);
			action_toDo.appendChild(actionDescription_toDo);
			action_toDo.setAttribute('class', 'action-description');
			action_toDo.setAttribute('href', `${Modify_Hash}${item.id}`);

			if (!item.isDone) {
				sq1.setAttribute('src', './assets/img/todo-s.png');
			} else {
				sq1.setAttribute('src', './assets/img/done-s.png');
				action_toDo.style.backgroundColor = 'grey';
			}

			sq1.addEventListener('click', markChecked);

			const remove = document.createElement('img');
			actionListItem.appendChild(remove);
			remove.setAttribute('src', './assets/img/remove-s.jpg');
			remove.addEventListener('click', removeActionItem);
		});
	}
	addingButton.addEventListener('click', setNewPageHash);
}

function markChecked(event) {
	const Id_Item = parseInt(event.target.parentNode.id);
	const element_toBeRemoved_index = items_ToBeDone.findIndex(item => item.id === Id_Item);
	if (element_toBeRemoved_index === nonExistantIndex) {
		return
	}
	const currentActionItemInTodoList = items_ToBeDone[element_toBeRemoved_index];
	currentActionItemInTodoList.isDone = true;
	items_ToBeDone.splice(element_toBeRemoved_index, 1);
	doneItems.push(currentActionItemInTodoList);

	setLocalStorageObjectItem(items_ToBeDone, ToDoKey);
	setLocalStorageObjectItem(doneItems, Done_Key);

	renderMainPage();
}


function setNewPageHash(event) {
	window.location.hash = NewPageHash;
	event.preventDefault();
}

function renderModifyItemPage() {
	const Id_Item = parseInt(location.hash.split('/').pop());
	const itemToModify = items_ToBeDone.find(item => item.id === Id_Item);

	if (!itemToModify) {
		window.location.hash = MainPageHash;
		return;
	}
	root_node.innerHTML = '';

	const header1 = document.createElement('h1');
	root_node.appendChild(header1);
	const header1Text = document.createTextNode('Modify item');
	header1.appendChild(header1Text);

	const ActionItemWithInput = document.createElement('input');
	ActionItemWithInput.setAttribute('id', 'input-field');
	root_node.appendChild(ActionItemWithInput);
	ActionItemWithInput.defaultValue = itemToModify.description;

	const ButtonsDiv = document.createElement('div');
	ButtonsDiv.setAttribute('class', 'buttons');
	root_node.appendChild(ButtonsDiv);
	const Button_for_cancel = document.createElement('button');
	ButtonsDiv.appendChild(Button_for_cancel);
	Button_for_cancel.setAttribute('class', 'button');
	const Button_for_cancelText = document.createTextNode('Cancel');
	Button_for_cancel.appendChild(Button_for_cancelText);
	const ButtonChanges_toBeSaved = document.createElement('button');
	ButtonsDiv.appendChild(ButtonChanges_toBeSaved);
	ButtonChanges_toBeSaved.setAttribute('class', 'button');
	const ButtonTextSave = document.createTextNode('Save changes');
	ButtonChanges_toBeSaved.appendChild(ButtonTextSave);

	Button_for_cancel.addEventListener('click', setMainPageHash);
	ButtonChanges_toBeSaved.addEventListener('click', AfterModifySave);
}

function removeActionItem(event) {
	const Id_Item = parseInt(event.target.parentNode.id);
	const removeFromitems_ToBeDone = items_ToBeDone.findIndex(item => item.id === Id_Item);
	if (removeFromitems_ToBeDone !== nonExistantIndex) {
		items_ToBeDone.splice(removeFromitems_ToBeDone, 1);
	}
	const removeFromDoneItems = doneItems.findIndex(item => item.id === Id_Item);

	if (removeFromDoneItems !== nonExistantIndex) {
		doneItems.splice(removeFromDoneItems, 1);
	}

	setLocalStorageObjectItem(items_ToBeDone, ToDoKey);
	setLocalStorageObjectItem(doneItems, Done_Key);

	renderMainPage();
}

function setMainPageHash(event) {
	window.location.hash = MainPageHash;
	event.preventDefault();
}

function AfterAddSave(event) {
	const Action_new = document.getElementById('input-field').value;

	if (!Action_new) {
		return;
	}
	items_ToBeDone.push({
		isDone: false,
		id: generateId(),
		description: Action_new
	});
	setLocalStorageObjectItem(items_ToBeDone, ToDoKey);
	setMainPageHash(event);
}

function generateId() {
	const ids = items_ToBeDone.concat(doneItems).map((item) => item.id);
	return ids.length ? 1 + Math.max(...ids) : 1;
}

function renderAddNewItemPage() {
	root_node.innerHTML = '';
	const header1 = document.createElement('h1');
	root_node.appendChild(header1);
	const header1Text = document.createTextNode('Add task');
	header1.appendChild(header1Text);

	const NewTaskInput = document.createElement('input');
	NewTaskInput.setAttribute('id', 'input-field');
	root_node.appendChild(NewTaskInput);

	const ButtonsDiv = document.createElement('div');
	ButtonsDiv.setAttribute('class', 'buttons');
	root_node.appendChild(ButtonsDiv);
	const Button_for_cancel = document.createElement('button');
	ButtonsDiv.appendChild(Button_for_cancel);
	Button_for_cancel.setAttribute('class', 'button');
	const Button_for_cancelText = document.createTextNode('Cancel');
	Button_for_cancel.appendChild(Button_for_cancelText);
	const ButtonChanges_toBeSaved = document.createElement('button');
	ButtonsDiv.appendChild(ButtonChanges_toBeSaved);
	ButtonChanges_toBeSaved.setAttribute('class', 'button');
	const ButtonTextSave = document.createTextNode('Save changes');
	ButtonChanges_toBeSaved.appendChild(ButtonTextSave);

	Button_for_cancel.addEventListener('click', setMainPageHash);
	ButtonChanges_toBeSaved.addEventListener('click', AfterAddSave);
}

function AfterModifySave(event) {
	const Modified = document.getElementById('input-field').value;

	if (!Modified) {
		return;
	}
	const Id_Item = parseInt(location.hash.split('/').pop());
	items_ToBeDone.find(item => item.id === Id_Item).description = Modified;
	setLocalStorageObjectItem(items_ToBeDone, ToDoKey);
	setMainPageHash(event);
}
