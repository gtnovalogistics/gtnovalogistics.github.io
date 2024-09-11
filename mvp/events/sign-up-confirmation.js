
const opensignupconfirmation = 'opensignupconfirmation';
const evtOpenSignUpConfirmation = { 
    detail: {},
    get event(){ return new CustomEvent(opensignupconfirmation, {detail:this.detail})}, 
    name: opensignupconfirmation
};

const closesignupconfirmation = "closesignupconfirmation";
const evtCloseSignUpConfirmation = {
    event: new Event(closesignupconfirmation),
    name: closesignupconfirmation
}


export {evtOpenSignUpConfirmation, evtCloseSignUpConfirmation};