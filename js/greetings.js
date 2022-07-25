const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#username");
const greeting = document.querySelector("#greeting-text");

// Constant string variable with upper case.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    if(username != ""){
        localStorage.setItem(USERNAME_KEY,username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(username);
    }else{
        alert('Please write your name!')
    }
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("click");
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

