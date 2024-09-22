const getUsers = async () => {
    
    const url = 'https://g7wrc6alrl.execute-api.ca-central-1.amazonaws.com/prod/users';
    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
        const json = await response.json();
        return json;
    } catch (error) {
      console.error(error.message);
    }

}


export {getUsers};