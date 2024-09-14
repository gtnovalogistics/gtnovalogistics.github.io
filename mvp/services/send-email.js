const sendEmail = async (email, accountnumber) => {

    const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/email?email=${email}&accountnumber=${accountnumber}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
}

export {sendEmail};