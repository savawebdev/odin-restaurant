import mainCard from "./mainCard";

function main() {
  const content = document.getElementById("content");

  const mainElement = document.createElement("main");
  mainElement.classList.add("main");
  content.appendChild(mainElement);

  mainCard();

  // const mainOverlay = document.createElement("div");
  // mainOverlay.classList.add("main-overlay");
  // mainElement.appendChild(mainOverlay);
}

export default main;
