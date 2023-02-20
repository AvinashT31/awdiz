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
        myTodosFromLS.push(gettingTodos);8
        // console.log(myTodosFromLS,"myTodosFromLS");
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todoHere').value = "";
        alert("Todo added !");
    }
    else{
        alert('Add todo first, before submitting');
    }
}

function cs(){
    var mainDiv = document.getElementById("displayTodos");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.innerText = "structure created !";
    h1.style.color = "blue";
    div.append(h1);
    var h1sec = document.createElement("h1");
    h1sec.innerText = "hello world";
    h1sec.style.color = "red";
    div.append(h1sec);
    mainDiv.append(div);
}

 
// function cs(){
//     var mainDiv = document.getElementById("displayTodos");
//     var div = document.createElement("div");
//     var h1 = document.createElement("h1");
//     h1.innerText = "hello world";
//     div.append(h1);
//     mainDiv.append(div);
    
// }