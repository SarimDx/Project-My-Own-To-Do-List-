// ? Selectors
let todolist = document.querySelector(".todolist");
let addTodo = document.querySelector(".add_todo");
let addDoing = document.querySelector(".add_doing");
let addDone = document.querySelector(".add_done");
let addTodoV = document.querySelector(".TodoInput");
let to_do = document.querySelector(".to_do");
let Doing = document.querySelector(".doing");
let Done = document.querySelector(".done");


// ? Evant Listeners
addTodo.addEventListener("click", addtodoli);
let addTodocount = 0;
addTodo.addEventListener("click", () => {
    addTodocount++;
    console.log(`addTodo${addTodocount}`);
})
addDoing.addEventListener("click", addDoingli);
let addDoingcount = 0;
addDoing.addEventListener("click", () => {
    addDoingcount++;
    console.log(`addDoing${addDoingcount}`);
})
addDone.addEventListener("click", addDoneli);
let addDonecount = 0;
addDone.addEventListener("click", () => {
    addDonecount++;
    console.log(`addDone${addDonecount}`);
})
// ? Archive
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("Ach") === true) {
        console.log("Archiveit");
        e.target.parentElement.parentElement.parentElement.classList.add("fall");
        document.addEventListener("transitionend", () => {
            e.target.parentElement.parentElement.parentElement.remove();
        })
    }
})
// ? Check
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("chk") === true) {
        console.log("checkit");
        e.target.parentElement.parentElement.firstChild.classList.toggle("check");
    }
})

// ? Functions
// ! ToDo Add
function addtodoli(e) {
    // ? Prevant From  Submting
    e.preventDefault();
    // ? check if input is null 
    if (addTodoV.value === "") {
        console.log("Add A Card");
    }
    else {
        // ? ToDo Div
        const TodoDiv = document.createElement("div");
        TodoDiv.classList.add("ToDo");
        // ? ToDo ul/li
        const TodoUl = document.createElement("ul");
        TodoUl.classList.add("ultodo");
        const TodoLi = document.createElement("li");
        TodoLi.classList.add("litodo")
        TodoDiv.appendChild(TodoUl);
        TodoUl.appendChild(TodoLi);
        TodoDiv.id = `Todo ${addTodocount}`;
        TodoDiv.draggable = 'true';
        TodoDiv.addEventListener("dragstart" , dragStart);
        TodoDiv.addEventListener("dragend" , dragEnd);
        const btnArchive = document.createElement("i");
        btnArchive.classList.add("fas");
        btnArchive.classList.add("fa-archive");
        btnArchive.classList.add("Ach");
        const btnCheck = document.createElement("i");
        btnCheck.classList.add("fas");
        btnCheck.classList.add("fa-check-square");
        btnCheck.classList.add("chk");
        const btnLi = document.createElement("li");
        btnLi.classList.add("btnli");
        TodoUl.appendChild(btnLi);
        btnLi.appendChild(btnCheck);
        btnLi.appendChild(btnArchive);
        // ? Value content
        TodoLi.innerText = addTodoV.value;
        addTodoV.value = "";
        addTodoV.focus();
        to_do.appendChild(TodoDiv);
    }
}
// ! Doing Add
function addDoingli(e) {
    // ? Prevant From  Submting
    e.preventDefault();
    // ? check if input is null 
    if (document.querySelector(".TodoInputDoing").value === "") {
        console.log("Add A Card");
    }
    else {
        // ? Doing Div
        const doingDiv = document.createElement("div");
        doingDiv.classList.add("ToDo");
        // ? Doing ul/li
        const doingUl = document.createElement("ul");
        doingUl.classList.add("ultodo");
        const doingLi = document.createElement("li");
        doingLi.classList.add("litodo")
        doingDiv.appendChild(doingUl);
        doingUl.appendChild(doingLi);
        doingDiv.id = `Doing ${addDoingcount}`;
        doingDiv.draggable = 'true';
        doingDiv.addEventListener("dragstart" , dragStart);
        doingDiv.addEventListener("dragend" , dragEnd);
        const btnArchive = document.createElement("i");
        btnArchive.classList.add("fas");
        btnArchive.classList.add("fa-archive");
        btnArchive.classList.add("Ach");
        const btnCheck = document.createElement("i");
        btnCheck.classList.add("fas");
        btnCheck.classList.add("fa-check-square");
        btnCheck.classList.add("chk");
        const btnLi = document.createElement("li");
        btnLi.classList.add("btnli");
        doingUl.appendChild(btnLi);
        btnLi.appendChild(btnCheck);
        btnLi.appendChild(btnArchive);
        // ? Value content
        doingLi.innerText = document.querySelector(".TodoInputDoing").value;
        document.querySelector(".TodoInputDoing").value = "";
        document.querySelector(".TodoInputDoing").focus();
        Doing.appendChild(doingDiv);
    }
}
// ! Done Add

function addDoneli(e) {
    // ? Prevant From  Submting
    e.preventDefault();
    // ? check if input is null 
    if (document.querySelector(".TodoInputDone").value === "") {
        console.log("Add A Card");
    }
    else {
        // ? Done Div
        const doneDiv = document.createElement("div");
        doneDiv.classList.add("ToDo");
        // ? Adding id To The Div
        doneDiv.id = `Done ${addDonecount}`;
        // ? Done ul/li
        const doneUl = document.createElement("ul");
        doneUl.classList.add("ultodo");
        const doneLi = document.createElement("li");
        doneDiv.draggable = 'true';
        doneDiv.addEventListener("dragstart" , dragStart);
        doneDiv.addEventListener("dragend" , dragEnd);
        doneLi.classList.add("litodo")
        doneDiv.appendChild(doneUl);
        doneUl.appendChild(doneLi);
        const btnArchive = document.createElement("i");
        btnArchive.classList.add("fas");
        btnArchive.classList.add("fa-archive");
        btnArchive.classList.add("Ach");
        const btnCheck = document.createElement("i");
        btnCheck.classList.add("fas");
        btnCheck.classList.add("fa-check-square");
        btnCheck.classList.add("chk");
        const btnLi = document.createElement("li");
        btnLi.classList.add("btnli");
        doneUl.appendChild(btnLi);
        btnLi.appendChild(btnCheck);
        btnLi.appendChild(btnArchive);
        // ? Value content
        doneLi.innerText = document.querySelector(".TodoInputDone").value;
        document.querySelector(".TodoInputDone").value = "";
        document.querySelector(".TodoInputDone").focus();
        Done.appendChild(doneDiv);
    }
}
// ? Dreg / Drop Just Like Trello 
function allowDrop(ev) {
    ev.preventDefault();  // default is not to allow drop
  }
  function dragStart(ev) {
    // The 'text/plain' is referring the Data Type (DOMString) 
    // of the Object being dragged.
    // ev.target.id is the id of the Object being dragged
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.target.classList.add("dragging");
  }
  function dragEnd(ev) {
    ev.target.classList.remove("dragging");
  }
  function dropIt(ev) {
    ev.preventDefault();  // default is not to allow drop
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl=document.getElementById(sourceId);
    let sourceIdParentEl=sourceIdEl.parentElement;
    // ev.target.id here is the id of target Object of the drop
    let targetEl=document.getElementById(ev.target.id)
    let targetParentEl=targetEl.parentElement;
    // Compare List names to see if we are going between lists
    // or within the same list
    if (targetParentEl.id!==sourceIdParentEl.id){
// If the source and destination have the same 
        // className (card), then we risk dropping a Card in to a Card
        // That may be a cool feature, but not for us!
        if (targetEl.className === sourceIdEl.className ){
          // Append to parent Object (list), not to a 
          // Card in the list
          // This is in case you drag and drop a Card on top 
          // of a Card in a different list
           targetParentEl.appendChild(sourceIdEl);
         
        }else{
            // Append to the list
             targetEl.appendChild(sourceIdEl);
           
        }
       
    }else{
        // Same list. Swap the text of the two cards
        // Just like swapping the values in two variables
      
        // Temporary holder of the destination Object
        let holder=targetEl;
        // The text of the destination Object. 
        // We are really just moving the text, not the Card
        let holderText=holder.textContent;
        // Replace the destination Objects text with the sources text
        targetEl.textContent=sourceIdEl.textContent;
        // Replace the sources text with the original destinations
        sourceIdEl.textContent=holderText;
        holderText='';
}
    
  }
