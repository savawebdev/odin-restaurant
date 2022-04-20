function link(href, linkClass, id, text) {
  const newLink = document.createElement("a");
  newLink.setAttribute("href", href);
  newLink.setAttribute("id", id);
  newLink.classList.add(linkClass);
  newLink.textContent = text;

  return newLink;
}

export default link;
