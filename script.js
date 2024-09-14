const countries = [
    {
      name: "Wallis and Futuna",
      population: "11,750",
      region: "Oceania",
      capital: "Mata-Utu",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Wallis_and_Futuna.svg/1920px-Flag_of_Wallis_and_Futuna.svg.png"
    },
    {
      name: "Iceland",
      population: "366,425",
      region: "Europe",
      capital: "Reykjavik",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1920px-Flag_of_Iceland.svg.png"
    },
    {
      name: "Luxembourg",
      population: "632,275",
      region: "Europe",
      capital: "Luxembourg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1920px-Flag_of_Luxembourg.svg.png"
    },
    {
      name: "Mali",
      population: "20,250,834",
      region: "Africa",
      capital: "Bamako",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1920px-Flag_of_Mali.svg.png"
    }
    // Add more countries if needed
  ];
  
  const countryContainer = document.getElementById("countryContainer");
  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const darkModeToggle = document.getElementById("darkModeToggle");
  
  // Function to display countries
  function displayCountries(countries) {
    countryContainer.innerHTML = "";
    countries.forEach(country => {
      const countryCard = `
        <div class="country-card">
          <img src="${country.flag}" alt="${country.name}">
          <h3>${country.name}</h3>
          <p><strong>Population:</strong> ${country.population}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
      `;
      countryContainer.innerHTML += countryCard;
    });
  }
  
  // Search functionality
  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    const filteredCountries = countries.filter(country => 
      country.name.toLowerCase().includes(query)
    );
    displayCountries(filteredCountries);
  });
  
  // Region filter functionality
  regionFilter.addEventListener("change", function() {
    const region = regionFilter.value;
    const filteredCountries = region ? countries.filter(country => country.region === region) : countries;
    displayCountries(filteredCountries);
  });
  
  // Dark mode functionality
  darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
  });
  
  // Initial load of countries
  displayCountries(countries);
  