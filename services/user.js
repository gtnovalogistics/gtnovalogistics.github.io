const userEmail = async (email) => {
    if(!email){
        throw new Error('Email is required');
    }

    const url = `https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/user/email?email=${email}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } 
      const jsonresponse = await response.json();
      const body = JSON.parse(jsonresponse.body);
      return body;    

    } catch (error) {
      console.error(error.message);
    }
}

export {userEmail};