const BASE_URL = "https://restcountries.com/v3.1/name"; 
const fields = "fields=name,capital,population,flags,languages";
// const URL = `${BASE_URL}${name}${fields}`;
export function fetchCountries(name) {
  // URL
  `${BASE_URL}${name}${fields}`
  return fetch(URL)
    .then((response) => response.json())
    .catch(error => console.log(error));
}
  
