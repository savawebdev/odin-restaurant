function pizzaCard(name, ingredients, image) {
  const card = document.createElement("div");
  card.classList.add("pizza-card");

  const cardImage = new Image();
  cardImage.src = image;
  cardImage.classList.add("pizza-card-img");
  card.appendChild(cardImage);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("pizza-card-title");
  cardTitle.textContent = name;
  card.appendChild(cardTitle);

  const cardIngredients = document.createElement("p");
  cardIngredients.classList.add("pizza-card-ingredients");
  cardIngredients.textContent = ingredients;
  card.appendChild(cardIngredients);

  return card;
}

export default pizzaCard;
