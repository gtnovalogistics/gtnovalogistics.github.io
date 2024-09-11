import {evtHamburgerMenu} from "../events/popup-menu.js";

const d = document;
const noDisplay = 'no-display';
const popupMenu = d.getElementById('popup-menu');

// handle the custom event that will be dispatched by other elements
const handler = (evt) => {
    if(popupMenu) {
        popupMenu.classList.toggle(noDisplay);
        toggleResizeHandler();
    }
};
d.addEventListener(evtHamburgerMenu.name, handler);


const toggleResizeHandler = () => {
    if( ! popupMenu.classList.contains(noDisplay)) {
        window.addEventListener('resize', resizeHandler);
    } else {
        window.removeEventListener('resize', resizeHandler);
    }
};

// screen could be rotated, from portrait to landscape, while the pop-up menu is shown.
// so the pop-up menu has to be hidden again.
const resizeHandler = (evt) => {
    if( ! popupMenu.classList.contains(noDisplay)) {
        popupMenu.classList.add(noDisplay);
        toggleResizeHandler();
    }
};
//window.addEventListener('resize', resizeHandler);