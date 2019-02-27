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
// 			console.log(e);
// 			e.target.parentNode.replaceChild(title, mainInput);
// 			root.innerHTML += html;
// 			e.target.value = "";
// 		}
// 	}

// 	function createList(e){
// 		if(e.target.classList.contains("addList") && mainInput.value != ""){
// 			console.log("hello");
// 			root.innerHTML += html;
// 			e.target.value = "";
// 		}
// 	}

// 	function createNewCard(e){
// 		if(e.target.classList.contains("add-card")){
// 			console.log("hello");
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

class Trello {
	constructor(name){
		this.name = name;
		this.id = Date.now();
		this.lists = [];
	}

	createBoard(){
		// var h2 = document.createElement("h2");
		// h2.innerText = this.name;
		// var board = document.createElement("section");
		// root.appendChild(board);
	}

	updateBoard(){
	}

	removeBoard(){
	}
}

// ==================================================
// list class
// ==================================================

class List {
	constructor(parent){
		this.name = name;
		this.id = "";
		this.parent = parent;
		this.card = [];
	}


	static createList(e){
		console.log(e);
		if( e.target.classList.contains(".mainInput") && e.keyCode == 13){
			this.card.push(e.target.value);
			console.log(this.card);
			console.log(e)
			this.parent.innerHTML += html;
			e.target.value = "";
		}
	}

	removeList(){

	}

	updateList(){

	}
}

// ==================================================
// card class
// ==================================================
class Card {
	constructor(value, parent){
		this.value = value;
		this.parent = parent;
	}

	createCard(){

	}

	removeCard(){

	}

	updateCard(){

	}
}

function display(){

}


function newList(){
	html = 
	`<div class="listInput">
		<input class="mainInput" type="text" placeholder="Enter list title..."/>
		<div>

			<ul>
			</ul>
		</div>
		<div class="listFooter">
			<button class=addBtn>Add List</button>
			<span class="closeList"><i class="fas fa-times"></i></span>
		</div>
	</div>`
	root.innerHTML = html;
	document.querySelector(".closeList").addEventListener("click", reset)
	root.addEventListener("keydown", List.createList);
}

function reset(){
	// root.innerHTML = primaryBtn;
}
// var list1 = new List(root);
primaryBtn.addEventListener("click", newList)
