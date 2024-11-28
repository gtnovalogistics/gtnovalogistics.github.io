const gh = {};

gh.base64 = async (file) => {
    
    var reader = new FileReader();
    reader.onload = async (evt) => {
        let base64String = evt.target.result;
        let commaIndex = base64String.indexOf(',');
        base64String = base64String.substring(commaIndex + 1);
        await gh.upload(file.name, base64String);
    }
    reader.readAsDataURL(file);
    

}

gh.upload = async(filename, base64String) => {

    const url = `https://api.github.com/repos/gtnovalogistics/gtnovalogistics.github.io/contents/uploads/images/${filename}?ref=main`;
    const options = {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer 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',
        'content-type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github+json'
      },
      body: `{"message":"image name: ${filename}","committer":{"name":"developer","email":"developer@gtnovatechnology.ca"},"content":"${base64String}"}`
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
};

export {gh};