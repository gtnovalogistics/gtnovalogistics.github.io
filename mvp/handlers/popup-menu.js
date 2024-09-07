import {evtHamburgerMenu} from "../events/popup-menu.js";

const d = document;
const noDisplay = 'no-display';
const popupMenu = d.getElementById('popup-menu');

// handle the custom event that will be dispatched by other elements
const handler = (evt) => {
    if(popupMenu) {
        popupMenu.classList.toggle(noDisplay);
    }
};
d.addEventListener(evtHamburgerMenu.name, handler);

// screen could be rotated, from portrait to landscape, while the pop-up menu is shown.
// so the pop-up menu has to be hidden again.
const resizeHandler = (evt) => {
    if( ! popupMenu.classList.contains(noDisplay)) {
        popupMenu.classList.add(noDisplay);
    }
};
window.addEventListener('resize', resizeHandler);