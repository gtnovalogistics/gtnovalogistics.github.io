const sendEmail = async (email, accountnumber, name, companyname) => {

    const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/email?email=${encodeURIComponent(email)}&accountnumber=${encodeURIComponent(accountnumber)}&name=${encodeURIComponent(name)}&companyname=${encodeURIComponent(companyname)}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
}

const sendWelcomeEmail = async (email, accountnumber, name, companyname) => {
    
  const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/email/welcome?email=${encodeURIComponent(email)}&accountnumber=${encodeURIComponent(accountnumber)}&name=${encodeURIComponent(name)}&companyname=${encodeURIComponent(companyname)}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const sendTCEmail = async (email, accountnumber, name, companyname) => {

const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/email/tc?email=${encodeURIComponent(email)}&accountnumber=${encodeURIComponent(accountnumber)}&name=${encodeURIComponent(name)}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}


export {sendEmail, sendWelcomeEmail, sendTCEmail};
