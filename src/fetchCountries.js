const inputFormEl = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");

fetchCountries('https://restcountries.com/v3.1/name/{name}')
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });