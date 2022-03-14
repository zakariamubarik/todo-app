//variables
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("ul");

let todoArray = new Set();
let user;

//funtion to add new todo item 
const addTodo = () => {
if (todoArray.size != 5) {
    if (todoInput.value !="") {
        todoInput.parentElement.classList.remove("error");
        todoArray.add(todoInput.value);
        if (user) {
            let db = [...todoArray];
            let _db = (JSON.stringify(db)) ;
            localStorage.setItem(user, _db);
            setTodo(todoArray);
 
        } else {
            setTodo(todoArray);
        }
        
    } else {
        todoInput.parentElement.classList.add("error");
    }
    todoInput.value = "";
} else {
    alert("you have five things to do");
 }
};
//event handlers
addBtn.addEventListener("click", addTodo);


const setTodo = (arr) => {
    let htmlArr = "";

    for (el of arr) {
        let html =
        `<li id=${el}>
        <div class ="todo">
        <p>${el}</p>
        <input type="text" class="hide"/>
        </div>


    <div class ="btns">
    <button>Edit</button>
    <button>Save</button>
    <button>Delete</button>
    </div>
 </li>`;
htmlArr += html;
 }
 todoList.innerHTML = htmlArr;
// informText()}
}


//sign in functions
const signIn = document.querySelector(".logo-wrap p")
const modal = document.querySelector("#modal")
const userNm = document.querySelector("input")
const signBtn = document.querySelector("button")
const disModal = document.querySelector("span")

signIn.addEventListener("click",() =>{
    modal.style.display = "flex"
})
disModal.addEventListener("click",(e) =>{
    modal.style.display = "none"
})
modal.addEventListener("click",(e) =>{
    e.target == modal? modal.style.display = "none" : null
})

//funtion to log in user and save todo list
signBtn.addEventListener("click", ()=>{
    user = userNm.value
    if(user ==""){
        userNm.classList.add("error")
    }else{
        userNm.classList.remove("error")
        signIn.innerText = user  //changing the "sign in" text to username
        todoArray.clear()
        setTodo(todoArray)
        userNm.value = ""

        let db = [...todoArray]
        let _db =(JSON.stringify(db))
        let userData = localStorage.getItem(user)

        if(userData){
            let _userData =JSON.parse(userData)
            todoArray = new set(_userData)
            setTodo(todoArray)
            modal.style.display ="none"
        }else{
            localStorage.setItem(user, _db)
            modal.style.display = "none"
        }
    }
})
