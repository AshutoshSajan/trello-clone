var card = document.querySelector(".card-container");
var board = document.querySelector(".board");
var mainInput;
var html;
class Trello {
	constructor(element, name, data){
		// this.name = name;
		// this.id = 0;
		// this.element = element;
		// this.listArray = [];
	}

	static defaultList(){
		card.innerHTML = `<span class="add-card"> + Add a list </span>`;
		var primaryBtn = document.querySelector(".add-card");
		primaryBtn.addEventListener("click", Trello.createCard);
	}

	static createCard(e){
		html = 
		`<div class="list-container">
			<input class="main-input" type="text" />
			<div class="list-footer">
				<button class="addList">+ Add list</button>
				<span class="fas fa-times"></span>
			</div>
		</div>`;
		card.innerHTML = html;
		mainInput =  document.querySelector(".main-input");
		mainInput.addEventListener("click", Trello.createList);
		var addList = document.querySelector(".addList");
		addList.addEventListener("click", Trello.createList);
		// mainInput.focus();
		// mainInput.addEventListener("blur", handleBlur);
	}

	static createList(e){
		if(mainInput.value.trim()){
			// card.innerHTML = html;
			var div = document.createElement("div");
			// // div.classList.add("list-container");
			div.innerHTML = card.innerHTML;
			card.appendChild(div);
		}
		
	}
}

function handleBlur(e){
	Trello.defaultList();
}

Trello.defaultList();

// class List {
// 	constructor(element, name, data){

// 	}
// }

// class Card {
// 	constructor(element, name, data){

// 	}
// }