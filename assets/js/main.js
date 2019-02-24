var card = document.querySelector(".card-container");

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
		Trello.defaultList();
		card.innerHTML = 
		`<div class="list-container">
			<input class="main-input" type="text" />
			<div>
				<button class="addList">+ Add list</button>
				<span class="fas fa-times"></span>
			</div>
		</div>`;
		var mainInput =  document.querySelector(".main-input");
		mainInput.addEventListener("click", Trello.createList);
		// mainInput.focus();
		// mainInput.addEventListener("blur", handleBlur);
	}

	static createList(e){
		Trello.defaultList(); 
	}
}

function handleBlur(e){
	Trello.defaultList();
}

// class List {
// 	constructor(element, name, data){

// 	}
// }

// class Card {
// 	constructor(element, name, data){

// 	}
// }