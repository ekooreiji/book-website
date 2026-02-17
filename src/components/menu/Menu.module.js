function resetAllParents(ListParents){
  ListParents.forEach(element => {
    let expand = element.getAttribute("aria-expanded")
    if (expand === "true"){
      element.setAttribute("aria-expanded", "false")
    }
  });
}

function checkMobileSize(){
  const sizeMobile = 1007
  return window.innerWidth <= sizeMobile
}


function updateAccessibly(menuElement, listParents) {
  const toggleExpand = (el, state) => el.setAttribute(
    "aria-expanded", state ? "true" : "false"
  );

  menuElement.addEventListener("click", () => {

    const expand = menuElement.getAttribute("aria-expanded") === "true";
    resetAllParents(listParents);
    toggleExpand(menuElement, !expand);
  });

  menuElement.addEventListener("mouseenter", () => {
    if (!checkMobileSize()) {
      resetAllParents(listParents);
      toggleExpand(menuElement, true);
    }
  });

  menuElement.addEventListener("mouseleave", () => {
    if (!checkMobileSize()) {
      resetAllParents(listParents);
      toggleExpand(menuElement, false);
    }

  });
}


function ControllerMenuInteractive(menu_selector){
  
  const listMenu = document.querySelectorAll(
    `.${menu_selector}`
  );
  listMenu.forEach(el => updateAccessibly(el, listMenu));
}


export function MenuController(list_menu_points) {
  list_menu_points.forEach(el => ControllerMenuInteractive(el));
}
