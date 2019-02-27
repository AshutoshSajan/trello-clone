// var root = document.querySelector(".root");
// var mainInput;
// var primaryList;
// var html;
// var addList;
// var primaryBtn;
// var listContainer;
// var title;

// // class Trello {
// // 	constructor(){
// // 		this.id = 0;
// // 		this.listArray = [];
// // 	}

// 	function defaultList(){
// 		primaryList = `<span class="add-List" onClick="createCard()"> + Add a list </span>`;
// 		root.innerHTML = primaryList;
// 	}

// 	function createCard(e){
// 		html = 
// 		`<div class="list-container">
// 			<input class="main-input" type="text" />
// 			<div class="list-footer">
// 				<button class="addList" onClick="createList"> + Add list </button>
// 				<span class="fas fa-times"></span>
// 			</div>
// 		 </div>`;

// 		root.innerHTML = html;
// 		listContainer = document.querySelector(".list-container");
// 		mainInput =  document.querySelector(".main-input");
// 		window.addEventListener("keydown", handleEnter);
// 		addList = document.querySelector(".addList");
// 		// listContainer.addEventListener("click", createList);
// 		// listContainer.addEventListener("click", createNewCard);
// 	}

// 	function handleEnter(e){
// 		if(e.target.value.trim() && e.keyCode == 13){
// 			title = document.createElement("div");
// 			title.classList.add("card-title");
// 			title.innerHTML = `<h2>${e.target.value}</h2> <span class="list-options">...</span>`;
// 			title.innerText = e.target.value;
// 			addList.classList.add("add-card");
// 			addList.innerText = "+ Add a card";
// 			e.target.parentNode.replaceChild(title, mainInput);
// 			root.innerHTML += html;
// 			e.target.value = "";
// 		}
// 	}

// 	function createList(e){
// 		if(e.target.classList.contains("addList") && mainInput.value != ""){
// 			root.innerHTML += html;
// 			e.target.value = "";
// 		}
// 	}

// 	function createNewCard(e){
// 		if(e.target.classList.contains("add-card")){
// 			var div = document.createElement("div");
// 			div.innerHTML = `<textarea name="" id="" cols="30" rows="10"></textarea>`;
// 			e.target.parentNode.appendChild(div);
// 		}	
// 	}
// // }


// defaultList();

// ==================================================
// board class
// ==================================================

var root = document.querySelector(".root");
var primaryBtn = document.querySelector(".default-card");
var html;
var mainInput;
var newHtml;
var textarea;

class Trello {
	constructor(name){
		// this.name = name;
		// this.id = Date.now();
		// this.lists = [];
	}

	// createBoard(){
	// 	// var h2 = document.createElement("h2");
	// 	// h2.innerText = this.name;
	// 	// var board = document.createElement("section");
	// 	// root.appendChild(board);
	// }

	// updateBoard(){
	// }
	// removeBoard(){
	// }
}

// ==================================================
// list class
// ==================================================

class List {
	constructor(parent){
		// this.name = name;
		// this.id = "";
		// this.parent = parent;
		// this.card = [];
	}
	static createList(e){
		if(e.target.value.trim() && e.target.classList.contains("mainInput") && e.keyCode == 13){
			newHtml = 
			`<h2 class="title">${e.target.value}<span class="remove-list"><i class="fas fa-times"></i><span></h2>
				<div class="textarea">
					
				</div>
				<div class="listFooter">
					<button class="add-card"> + Add a card </button>
					<span class="closeList"><i class="fas fa-times"></i></span>
				</div>`;
			var title = document.createElement("h2");
			title.classList.add("title");
			title.innerText = e.target.value;
			e.target.parentNode.innerHTML = newHtml;
			window.addEventListener("click", addCard)
			root.innerHTML += html;
			e.target.value = "";
		}
	}

	// removeList(){
	// }
	// updateList(){
	// }
}

// ==================================================
// card class
// ==================================================
// class Card {
// 	constructor(value, parent){
// 		this.value = value;
// 		this.parent = parent;
// 	}
// 	createCard(){
// 	}

// 	removeCard(){
// 	}

// 	updateCard(){
// 	}
// }

function newList(e){
	html = 
	`<div class="listInput">
		<input class="mainInput" type="text" placeholder="Enter list title..."/>
		<div class="textarea">
			
		</div>
		<div class="listFooter">
			<button class=addBtn>Add List</button>
			<span class="closeList"><i class="fas fa-times"></i></span>
		</div>
	</div>`
	textarea = document.querySelector(".textarea");
	e.target.parentNode.innerHTML = html;
	document.querySelector(".closeList").addEventListener("click", reset)
	window.addEventListener("keydown", List.createList);
}

var textInput
function addCard(e){
	if(e.target.classList.contains("add-card")){
		textInput = `<input class="card-input" placeholder="Add your task..."/>`
		e.target.parentNode.previousElementSibling.innerHTML = textInput;
	}
}

function addNewList(e){
	if(e.target.classList.contains("card-input") && e.target.value.trim() && e.keyCode == 13){
		var p = `<p class="todo">${e.target.value}</p>`;
		textInput = p;
		e.target.parentNode.innerHTML += textInput;
		e.target.value = "";
	}
}

function removeList(e){
	if(e.target.className == "fas fa-times"){
		e.target.parentNode.parentNode.parentNode.classList.add("hide");
	}
}

window.addEventListener("keydown", addNewList);
window.addEventListener("click", removeList);

function reset(){
	// root.innerHTML = primaryBtn;
}

primaryBtn.addEventListener("click", newList)

