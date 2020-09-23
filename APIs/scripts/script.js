img = document.querySelector("#imgDia");
// console.log(img);
async function getData() {
  try {
    response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    );
  } catch (err) {
    alert("Imposible obtener datos");
    console.log(err);
    return;
  }
  // console.log(response.data.url);
  img.src = response.data.url;
  console.log(response);
}

but = document.querySelector("#buttonSol");
but.onclick = getData;
