function main() {
  const content = document.getElementById("content");

  const mainElement = document.createElement("main");
  mainElement.classList.add("main");
  content.appendChild(mainElement);
}

export default main;
