function checkMobileSize() {
  const sizeMobile = 1007;
  return window.innerWidth <= sizeMobile;
}


const changeExpand = (element, newState) => {
  element.setAttribute(
    "aria-expanded", newState ? "true" : "false"
  );
}


const getElementMenu = (element, event) => {
  return event.target.closest(`${element}[aria-expanded]`);
}


const closeElementOpen = (parentElement, element) => {
  const listOpened = document.querySelectorAll(`${parentElement}[aria-expanded='true']`);
  listOpened.forEach(
    opened => {if (opened && opened !== element) changeExpand(opened, false)}
  );
}

function HandlerEvents(container, parentElement){
  if (!container) return;

  // Clique com mouse
  container.addEventListener("click", (event) => {
    const menuElement = getElementMenu(parentElement, event)
    if (!menuElement) return;

    const expand = menuElement.getAttribute("aria-expanded") === "true";
    closeElementOpen(parentElement, menuElement)
    changeExpand(menuElement, !expand);
  });

  // Hover com mouse
  container.addEventListener("mouseenter", (event) => {
    if (checkMobileSize()) return;

    const menuElement = getElementMenu(parentElement, event)
    if (!menuElement) return;

    closeElementOpen(parentElement, menuElement)
    changeExpand(menuElement, true)
  }, true);

  container.addEventListener("mouseleave", (event) => {
    if (checkMobileSize()) return;

    const menuElement = getElementMenu(parentElement, event)
    if (!menuElement) return;

    changeExpand(menuElement, false);
  }, true);

  // Suporte a teclado (Enter ou Espaço)
  container.addEventListener("keydown", (event) => {
    const menuElement = getElementMenu(parentElement, event)
    if (!menuElement) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // evita scroll com espaço
      const expand = menuElement.getAttribute("aria-expanded") === "true";
      closeElementOpen(parentElement, menuElement)
      changeExpand(menuElement, !expand)
    }
  });
}


function ControllerMenuInteractive(menu_selector) {
  const element = `.${menu_selector}`
  const listContainer = document.querySelectorAll(element);
  
  listContainer.forEach(el => HandlerEvents(el, element))
}

export function MenuController(list_menu_points) {
  list_menu_points.forEach(el => ControllerMenuInteractive(el));
}