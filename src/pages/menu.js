import pizzaCard from "../components/pizzaCard";
import Meateaters from "../assets/images/meateaters.png";
import Works from "../assets/images/works.png";
import BBQChicken from "../assets/images/bbqchicken.png";
import Veggie from "../assets/images/veggie.png";
import Asianchicken from "../assets/images/asianchicken.png";
import Buffalochicken from "../assets/images/buffalochicken.png";

const pizzaMenu = [
  {
    name: "Meat Eaters Pizza",
    ingredients:
      "Pepperoni, ham, Italian sausage, ground beef & mozzarella cheese",
    image: Meateaters,
  },
  {
    name: "Works Pizza",
    ingredients:
      "Pepperoni, ham, Italian sausage, ground beef, mushrooms, red onions, green peppers, black olives & extra mozzarella cheese",
    image: Works,
  },
  {
    name: "BBQ Chicken Pizza",
    ingredients:
      "Sweet BBQ sause, grilled chicken breast, bacon, red onions & mozzarella cheese",
    image: BBQChicken,
  },
  {
    name: "Veggie Pizza",
    ingredients:
      "Mushrooms, red onions, green peppers, tomatoes, black olives & mozzarella cheese",
    image: Veggie,
  },
  {
    name: "Asian Chicken Pizza",
    ingredients:
      "Tangy Asian sauce, grilled chicken breast, red onions, green peppers, sesame seeds & mozzarella cheese",
    image: Asianchicken,
  },
  {
    name: "Buffalo Chicken Pizza",
    ingredients:
      "Spicy buffalo sauce, grilled chicken breast, red onions, mozzarella & cheddar cheese",
    image: Buffalochicken,
  },
];

function menu() {
  const mainCardElement = document.querySelector(".main-card");

  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("card-title");
  menuTitle.textContent = "Andy's Menu";
  mainCardElement.appendChild(menuTitle);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");
  mainCardElement.appendChild(menuGrid);

  pizzaMenu.forEach((pizza) => {
    const menuItem = pizzaCard(pizza.name, pizza.ingredients, pizza.image);
    menuGrid.appendChild(menuItem);
  });
}

export default menu;
