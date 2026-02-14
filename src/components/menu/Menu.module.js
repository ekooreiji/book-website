function updateAccessibly(menuElement) {

  menuElement.addEventListener("mouseenter", () => {
    menuElement.setAttribute("aria-expanded", "true");
  });


  menuElement.addEventListener("mouseleave", () => {
    menuElement.setAttribute("aria-expanded", "false");
  });
}

export function initDropdown(menu_selector) {
  const listMenu = document.querySelectorAll(menu_selector);

  console.log(listMenu)

  listMenu.forEach((element) => {
    updateAccessibly(element);
  });
}
