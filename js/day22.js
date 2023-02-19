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
        alert("Todo added !");
    }
    else{
        alert('Add todo first, before submitting');
    }
}

 
