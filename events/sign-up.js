
const opensignup = 'opensignup';
const evtOpenSignUp = { 
    event: new Event(opensignup), 
    name: opensignup
};

const closesignup = "closesignup";
const evtCloseSignUp = {
    event: new Event(closesignup),
    name: closesignup
}

export {evtOpenSignUp, evtCloseSignUp};