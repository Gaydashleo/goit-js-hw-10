import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  event.preventDefault();

  const searchBoxValue = searchBox.value; 
  let withoutSpacesSearchBoxValue = searchBoxValue.trim();

  // fetchCountries(withoutSpacesSearchBoxValue)
  //   .then(country)
  //   .catch(error);

}
  