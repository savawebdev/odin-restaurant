function mainCard() {
  const mainElement = document.querySelector(".main");

  const mainCardElement = document.createElement("div");
  mainCardElement.classList.add("main-card");
  mainElement.appendChild(mainCardElement);
}

export default mainCard;
