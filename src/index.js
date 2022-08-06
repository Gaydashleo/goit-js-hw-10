import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry() {
	  const nameWithoutSpaces = searchBox.value.trim()
	  if (nameWithoutSpaces === '') {
	    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
	  }
	
	  fetchCountries(nameWithoutSpaces)
	    .then(countries => {
	      countryList.innerHTML = ''
	      countryInfo.innerHTML = ''
	      if (countries.length === 1) {
	        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
	        countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
        } else if (countries.length >= 10) {
          //  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
	        alertMoreSpecificName()
	      } else {
	        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
	      }
      })
  	    .catch(alertWithoutName)
	}
	
	function renderCountryList(countries) {
	  const markup = countries
	    .map(({ name, flags }) => {
	      return `
	          <li class="country-list__item">
	              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
	              <h2 class="country-list__name">${name.official}</h2>
	          </li>
	          `
	    })
	    .join('')
	  return markup
	}
	
	function renderCountryInfo(countries) {
	  const markup = countries
	    .map(({ capital, population, languages }) => {
	      return `
	        <ul class="country-info__list">
	            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
	            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
	            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
	        </ul>`})
	        
	    .join('')
	  return markup
	}
	
function alertMoreSpecificName() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}

function alertWithoutName() {
  Notiflix.Notify.failure('Oops, there is no country with that name')
}


// function searchCountry() {
//   // event.preventDefault();

//   let name = searchBox.value.trim();
//   // let withoutSpacesSearchBoxValue = searchBoxValue.trim();
//   if (name = '') {
//     return (countryList.innerHTML = ""), (countryInfo.innerHTML = "")
//   }
  
// 	  fetchCountries(name)
// 	    .then(countries => {
// 	      countryList.innerHTML = ''
// 	      countryInfo.innerHTML = ''
// 	      if (countries.length === 1) {
// 	        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
// 	        countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
// 	      } else if (countries.length >= 10) {
// 	        alertMoreSpecificName()
// 	      } else {
// 	        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
// 	      }
// 	    })
// 	    .catch(alertWithoutName)
// 	}
  
// function renderCountryList(countries) {
//   const markup = countries.map(({ name, flags }) => {
//     return `<li class="country-list_item">
//       <img class="country-list_flag" src ='${flags.svg}' alt='${name.official}' width = '30' >
//       <h2 class='country-list_name'>${name.official}</h2>
//       </li>`})
//     .join('')
//   return markup
// };

// function renderCountryInfo(countries) {
//   const markup = countries
//     .map(({ capital, population, languages }) => {
//     return `<ul class="country-info_list">
//       <li class="country-info_item"><p><b>Capital:</b>${capital}</p></li>
//       <li class="country-info_item"><p><b>Population:</b>${population}</p></li>
//       <li class="country-info_item"><p><b>Languages:</b>${Object.values(languages).join(', ')}</p></li>
//       </ul>`})
//     .join('');
//   return markup;
// };

// function alertMoreSpecificName() {
//   Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
// }

// function alertWithoutName() {
//   Notiflix.Notify.failure('Oops, there is no country with that name')
// }

