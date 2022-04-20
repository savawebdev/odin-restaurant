import firstLoad from "./functions/firstLoad";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import "./css/main.css";
import "./css/header.css";
import "./css/home.css";
import "./css/menu.css";
import "./css/contact.css";

firstLoad();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");
const mainCardElement = document.querySelector(".main-card");

homeBtn.addEventListener("click", function () {
  mainCardElement.innerHTML = "";
  home();
});

menuBtn.addEventListener("click", function () {
  mainCardElement.innerHTML = "";
  menu();
});

contactBtn.addEventListener("click", function () {
  mainCardElement.innerHTML = "";
  contact();
});
