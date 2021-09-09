const axios = require("axios")


let data = []
async function sendRequest() {
    const directors = await axios
      .get("https://andrejgajdos.com/how-to-create-a-link-preview/")
      .then(async (response) => (data = await response.data));
  
    console.log(directors);

}

// send request to get random user deatils to an api
// use axios



sendRequest()
console.log(data)