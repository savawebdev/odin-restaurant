import Pizza from "../assets/images/pizza.jpg";

function home() {
  const mainCardElement = document.querySelector(".main-card");

  const homeTitle = document.createElement("h2");
  homeTitle.classList.add("card-title");
  homeTitle.textContent = "Andy's Pizza";
  mainCardElement.appendChild(homeTitle);

  const homeInfo = document.createElement("p");
  homeInfo.classList.add("card-info");
  homeInfo.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam animi voluptatum qui iusto voluptatem incidunt iste itaque accusantium at magni nostrum mollitia nisi molestias molestiae consectetur sit eum, voluptatibus laborum cum magnam cumque amet. Minus quaerat quas sed dolorem placeat cupiditate, maiores temporibus accusamus in laudantium ipsum quis? Corrupti, hic!";
  mainCardElement.appendChild(homeInfo);

  const pizzaImg = new Image();
  pizzaImg.src = Pizza;
  pizzaImg.classList.add("home-pizza-img");

  mainCardElement.appendChild(pizzaImg);
}

export default home;
