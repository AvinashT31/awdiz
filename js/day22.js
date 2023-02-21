// console.log("loaded");
// console.log("loaded repeat")

// function UserName() {
//     alert("Hello avinash");
// }
// UserName();


// function functionName(Name) {
//     alert(`welcome ${Name}`);
// }
// functionName("Avinash")

// function UserName() {
//    alert("Hello avinash");
// }
 
// To add the data 
// function addTodo() {
//     var gettingTodos = document.getElementById('todoHere').value;
//     console.log(gettingTodos,"gettingTodos");
//     alert('Added');     
// }

function addTodo(){

    var gettingTodos = document.getElementById('todoHere').value;

    if(gettingTodos){
        console.log(gettingTodos,"gettingTodos");
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        // console.log(myTodosFromLS,"myTodosFromLS");
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todoHere').value = "";
        cs(); // (whenever we click on submit todo the  updated todo list will display)
        alert("Todo added !");
    }
    else{
        alert('Add todo first, before submitting');
    }
}

function cs(){
     
    var divFromhtml = document.getElementById("displayTodos")

     var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
     console.log(gettingTodosFromLS, "gettingTodosFromLS");

     var finalstructure = [`<div id="row">
     <p>task</p> <p>completed</p>
     </div>`]

     for(var i=0; i< gettingTodosFromLS.length; i++ ){
        // console.log(gettingTodosFromLS[i])
        // var div= document.createElement("div");
        // var p= document.createElement("p");
        // p.innerText= gettingTodosFromLS[i];
        // div.append(p);
        // finalstructure.push(div);

        finalstructure += `<div id= "content">
        <p>${gettingTodosFromLS[i]}</p>
        <i onclick = "deleteTodo(${i})" class="fa-solid fa-trash"></i>
        </div>`
 }

  divFromhtml.innerHTML = finalstructure;

//   console.log(finalstructure, "finalstructure")


    // var mainDiv = document.getElementById("displayTodos");
    // var div = document.createElement("div");
    // var h1 = document.createElement("h1");
    // h1.innerText = "structure created !";
    // h1.style.color = "blue";
    // div.append(h1);
    // var h1sec = document.createElement("h1");
    // h1sec.innerText = "hello world";
    // h1sec.style.color = "red";
    // div.append(h1sec);
    // mainDiv.append(div);
}
cs() // (to automatic display)

// <button onclick="cs()">creating structure</button>

// function cs(){
//     var mainDiv = document.getElementById("displayTodos");
//     var div = document.createElement("div");
//     var h1 = document.createElement("h1");
//     h1.innerText = "hello world";
//     div.append(h1);
//     mainDiv.append(div);
    
// }


function deleteTodo(todoIndex){
    var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
    todosFromLS.splice(todoIndex, 1)
    localStorage.setItem("Todos", JSON.stringify(todosFromLS));
    cs(); 
}