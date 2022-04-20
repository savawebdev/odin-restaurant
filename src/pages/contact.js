import Location from "../assets/images/location.png";

function contact() {
  const mainCardElement = document.querySelector(".main-card");

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("card-title");
  contactTitle.textContent = "Contact Andy's";
  mainCardElement.appendChild(contactTitle);

  const contactInfo = document.createElement("p");
  contactInfo.classList.add("contact-info");
  contactInfo.textContent = "555-555-5555 | pizza@andys.com";
  mainCardElement.appendChild(contactInfo);

  const contactLocation = new Image();
  contactLocation.src = Location;
  contactLocation.classList.add("contact-location");
  mainCardElement.appendChild(contactLocation);
}

export default contact;
