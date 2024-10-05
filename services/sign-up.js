

// profile
//  firstname
//  lastname
//  email
//  mobile
//  password
//  confirmpassword
//  address_line1
//  address_line2
//  city
//  tin
//  companyname
//  reference
//  isagreed
const registerProfile = async (profile) => {

    //const counter = await getNextCounter();
    const accountNumber = await getAccountNumber();

    profile.accountnumber = accountNumber;
    return await saveProfile(profile);

}

async function saveProfile(profile) {
    const url = 'https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/user';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(profile)
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      console.error(error.message);
    }
}

async function getAccountNumber() {
    const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/account-number`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const jsonresponse = await response.json();
      const body = JSON.parse(jsonresponse.body);
      return body.accountnumber;

    } catch (error) {
      console.error(error.message);
    }      
}

const validateProfile = (profile) => {
    let errors = [];
    
    if( ! profile.password || ! profile.confirmpassword || profile.password !== profile.confirmpassword){
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

    if( ! profile.address_line1 || profile.address_line1.length <= 0){
      errors.push("Address Line 1 is required.");
    } 

    if( ! profile.city || profile.city.length <= 0 || profile.city === "Select"){
      errors.push("City is required.");
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

    const validRegex = /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!profile.email.match(validRegex)) {
        errors.push("Email address is not valid.");
    }

    const regex = /\d{5,}/;
    if (!profile.mobile.match(regex)) {
        errors.push("Mobile number is not valid.");
    }

    return errors;

}


export {registerProfile, validateProfile};