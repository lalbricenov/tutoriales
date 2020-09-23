// import * as axios from "./axios.min.js";
axios
  //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
