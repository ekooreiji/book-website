function updateAccessibly(menuElement) {

  menuElement.addEventListener("mouseenter", () => {
    menuElement.setAttribute("aria-expanded", "true");
  });


  menuElement.addEventListener("mouseleave", () => {
    menuElement.setAttribute("aria-expanded", "false");
  });
}

export function initDropdown() {
  const listMenu = document.querySelectorAll(`._categories_header_u6gqi_51`);

  console.log(listMenu)

  listMenu.forEach((element) => {
    updateAccessibly(element);
  });
}
