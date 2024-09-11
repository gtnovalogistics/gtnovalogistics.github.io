import {evtOpenSignUp, evtCloseSignUp} from "../events/sign-up.js";

const d = document;
const noDisplay = 'no-display';
const signup = d.getElementById('signup');


// handle the custom event that will be dispatched by other elements
const openSignUphandler = (evt) => {
    if(signup) {
        signup.classList.toggle(noDisplay);
        if(!signup.classList.contains(noDisplay)) {
            document.body.classList.add('noscrollY');   
        }
    }
};

const closeSignUpHandler = (evt) => {
    if(signup) {
        signup.classList.add(noDisplay);
        document.body.classList.remove('noscrollY');
    }
};

d.addEventListener(evtOpenSignUp.name, openSignUphandler);
d.addEventListener(evtCloseSignUp.name, closeSignUpHandler);

