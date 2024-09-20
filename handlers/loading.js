import {evtLoading} from "../events/loading.js";

const d = document;
const noDisplay = 'no-display';
const loading = d.getElementById('loading');

// handle the custom event that will be dispatched by other elements
const handler = (evt) => {
    if(loading) {
        loading.classList.toggle(noDisplay);
    }
};
d.addEventListener(evtLoading.name, handler);