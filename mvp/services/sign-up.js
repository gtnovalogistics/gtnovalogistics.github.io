
// return
//  {
//      status: 'ok'/'error',
//      errors: ['error1', 'error2']
//  }

// profile
//  firstname
//  lastname
//  email
//  mobile
//  password
//  confirmpassword
//  tin
//  companyname
//  reference
//  isagreed
const registerProfile = (profile) => {

    const errors = validationErrors(profile);
    if(errors.length > 0){
        return {
            status: 'error',
            errors: errors
        };
    }

    return {
        status: 'ok'
    };

}

const validationErrors = (profile) => {
    let errors = [];
    
    if( ! profile.password || ! profile.confirmPassword || profile.password !== profile.confirmPassword){
        errors.push("Passwords do not match.");
    }

    if( ! profile.firstname || profile.firstname.length <= 0){
        errors.push("First name is required.");
    }

    if( ! profile.lastname || profile.lastname.length <= 0){
        errors.push("Last name is required.");
    }

    if( ! profile.email || profile.email.length <= 0){
        errors.push("Email address is required.");
    }   
    
    if( ! profile.mobile || profile.mobile.length <= 0){
        errors.push("Mobile number is required.");
    }

    if( ! profile.reference || profile.reference.length <= 0 || profile.reference === "Select"){
        errors.push("Please tell us how you heard about us.");
    }

    if( ! profile.isagreed || profile.isagreed === false){
        errors.push("Please agree to the terms of service.");
    }

    return errors;

}


export {registerProfile};