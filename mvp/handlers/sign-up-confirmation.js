import {evtOpenSignUpConfirmation, evtCloseSignUpConfirmation} from "../events/sign-up-confirmation.js";

const d = document;
const noDisplay = 'no-display';
const signupConfirmation = d.getElementById('signup-confirmation');


// handle the custom event that will be dispatched by other elements
const openSignUpConfirmationhandler = (evt) => {
    if(signupConfirmation) {
        const detail = evt.detail;
        
        // update the attributes of the element
        signupConfirmation.setAttribute('firstname', detail.firstname);
        signupConfirmation.setAttribute('lastname', detail.lastname);
        signupConfirmation.setAttribute('email', detail.email);
        signupConfirmation.setAttribute('mobile', detail.mobile);
        //signupConfirmation.setAttribute('account', detail.account);

        signupConfirmation.classList.toggle(noDisplay);
        //if(!signupConfirmation.classList.contains(noDisplay)) {         
        //    document.body.classList.add('noscrollY');   
        //}
    }
};

const closeSignUpConfirmationHandler = (evt) => {
    if(signupConfirmation) {
        signupConfirmation.classList.add(noDisplay);
        //document.body.classList.remove('noscrollY');
    }
};

d.addEventListener(evtOpenSignUpConfirmation.name, openSignUpConfirmationhandler);
d.addEventListener(evtCloseSignUpConfirmation.name, closeSignUpConfirmationHandler);

