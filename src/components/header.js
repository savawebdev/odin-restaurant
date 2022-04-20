import link from "./link";

function header() {
  const content = document.getElementById("content");

  const headerElement = document.createElement("header");
  headerElement.classList.add("header");
  content.appendChild(headerElement);

  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = `Andy's Pizza`;
  headerElement.appendChild(headerTitle);

  const headerNav = document.createElement("nav");
  headerNav.classList.add("header-nav");
  headerElement.appendChild(headerNav);

  const headerHomeLink = link("/", "header-nav-link", "homeBtn", "Home");
  const headerMenuLink = link("/", "header-nav-link", "menuBtn", "Menu");
  const headerContactLink = link(
    "/",
    "header-nav-link",
    "contactBtn",
    "Contact"
  );
  headerNav.append(headerHomeLink, headerMenuLink, headerContactLink);
}

export default header;
