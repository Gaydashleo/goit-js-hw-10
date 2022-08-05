import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");
const countryInfoEl = document.querySelector(".country-info");


searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  event.preventDefault();

  let searchBoxValue = searchBox.value.trim();
  // let withoutSpacesSearchBoxValue = searchBoxValue.trim();
  if (searchBoxValue = "") {
    return (countryListEl.innerHTML = ""), (countryInfoEl.innerHTML = "")
  };
  
}

  fetchCountries(searchBoxValue)
    .then(countries => {
      countryListEl.innerHTML = "";
      countryInfoEl.innerHTML = "";
  if (countries.length === 1) {
    countryListEl.insertAdjacentHTML("beforeend", renderCountryList(countries));
    countryInfoEl.insertAdjacentHTML("beforeend", renderCountryInfo(countries));

  } else if (countries >= 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
  } else {
    countryListEl.insertAdjacentHTML("beforeend", renderCountryList(countries));
  }
    })
    .catch(error => {
      Notiflix.Notify.info("Oops, there is no country with that name")
    });

function renderCountryList(countries) {
  const markup = countries.map(({ name, flags }) => {
    return `<li class="country-list_item">
      <img class="country-list_flag" src ='${flags.svg}' alt='${name.official}' width = '30' >
      <h2 class='country-list_name'>${name.official}</h2>
      </li>`})
    .join('');
  return markup;
};

function renderCountryInfo(countries) {
  const markup = countries.map(({ capital, population, languages }) => {
    return `<ul ul class="country-info_list">
      <li class="country-info_item"><p><b>Capital:</b>${capital}</p></li>
      <li class="country-info_item"><p><b>Population:</b>${population}</p></li>
      <li class="country-info_item"><p><b>Languages:</b>${Object.values(languages).join(', ')}</p></li>
      </ul>`})
    .join('');
  return markup;
};
 
      



