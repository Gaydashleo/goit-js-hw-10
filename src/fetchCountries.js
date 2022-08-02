fetchCountries('name')
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });