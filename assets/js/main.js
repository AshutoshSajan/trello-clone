var root = document.querySelector(".root");
var mainInput;
var primaryList;
var html;
var addList;
var primaryBtn;
var listContainer;
var title;

class Trello {
	constructor(){
		this.id = 0;
		this.listArray = [];
	}

	defaultList(){
		primaryList = `<span class="add-List" onClick="Trello.createCard()"> + Add a list </span>`;
		root.innerHTML = primaryList;
	}

	static createCard(e){
		html = 
		`<div class="list-container">
			<input class="main-input" type="text" />
			<div class="list-footer">
				<button class="addList" onClick="Trello.createList"> + Add list </button>
				<span class="fas fa-times"></span>
			</div>
		 </div>`;

		root.innerHTML = html;
		listContainer = document.querySelector(".list-container");
		mainInput =  document.querySelector(".main-input");
		window.addEventListener("keydown", Trello.handleEnter);
		addList = document.querySelector(".addList");
		// listContainer.addEventListener("click", Trello.createList);
		// listContainer.addEventListener("click", Trello.createNewCard);
	}

	static handleEnter(e){
		if(e.target.value.trim() && e.keyCode == 13){
			title = document.createElement("div");
			title.classList.add("card-title");
			title.innerHTML = `<h2>${e.target.value}</h2> <span class="list-options">...</span>`;
			title.innerText = e.target.value;
			addList.classList.add("add-card");
			addList.innerText = "+ Add a card";
			e.target.parentNode.replaceChild(title, mainInput);
			root.innerHTML += html;
			e.target.value = "";
		}
	}

	static createList(e){
		if(e.target.classList.contains("addList") && mainInput.value != ""){
			console.log("hello");
			root.innerHTML += html;
			e.target.value = "";
		}
	}

	static createNewCard(e){
		if(e.target.classList.contains("add-card")){
			console.log("hello");
			var div = document.createElement("div");
			div.innerHTML = `<textarea name="" id="" cols="30" rows="10"></textarea>`;
			e.target.parentNode.appendChild(div);
		}	
	}
}


var board = new Trello();
board.defaultList();