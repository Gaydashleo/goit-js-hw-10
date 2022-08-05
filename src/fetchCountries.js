const BASE_URL = "https://restcountries.com/v3.1";

const URL = `${BASE_URL}?/name/{name}&capital&population&flags&languages`;
export function fetchCountries(name) {
  URL
  return fetch(URL).then((response) => response.json());
}
  
 