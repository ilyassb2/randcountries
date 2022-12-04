"use-strict";

const numberOfCountries = 7;
let countries = [];

const getCountries = (numberOfCountries) => {
  if (numberOfCountries >= 5 && numberOfCountries <= 20) {
    for (let i = 1; i <= numberOfCountries; i++) {
      fetch("https://random-data-api.com/api/v2/addresses")
        .then((response) => response.json())
        .then((data) => {
          if (!countries.includes(data.country)) {
            countries.push(data.country);
          } else {
            numberOfCountries++;
          }
        })
        .catch((err) => console.log(`ERROR 💥: ${err.message}`));
    }

    setTimeout(() => {
      console.log(countries);
    }, 8000);
  }
};

getCountries(numberOfCountries);
