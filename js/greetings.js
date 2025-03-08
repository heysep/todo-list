const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list"); // todo-list 요소 추가

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  todoForm.classList.remove(HIDDEN_CLASSNAME); // todo-form 표시
  todoList.classList.remove(HIDDEN_CLASSNAME); // todo-list 표시
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME); // todo-form 표시
  todoList.classList.remove(HIDDEN_CLASSNAME); // todo-list 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME); // todo-form 숨김
  todoList.classList.add(HIDDEN_CLASSNAME); // todo-list 숨김
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}