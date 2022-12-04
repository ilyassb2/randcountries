"use-strict";

const formInput = document.querySelector(".form-input");
const btnSubmit = document.querySelector(".btn-submit");
const countriesBox = document.querySelector(".countries");
let numberOfCountries;
let countries = [];

const reset = () => {
  countries = [];
};

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
      displayCountries(countries);
      console.log(countries);
      reset();
    }, 8000);
  }
};

const displayCountries = (countries) => {
  let html;

  countries.forEach((el) => {
    html = `
      <li>
        ${el}
      </li>
    `;

    countriesBox.insertAdjacentHTML("beforeend", html);
  });
};

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  countriesBox.innerHTML = "";
  numberOfCountries = formInput.value;
  getCountries(numberOfCountries);
});
