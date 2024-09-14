# 🌍 Where in the World

This project is an interactive web application that provides users with searchable and filterable information about countries, including their populations, regions, capitals, and flags.

## ✨ Features

- Fetches live data of all countries from the [REST Countries API](https://restcountries.com/)
- Displays country information including:
  - Flag
  - Population
  - Region
  - Capital
- Search functionality to filter countries by name
- Filter countries by region (e.g., Africa, Europe, Americas, Asia, Oceania)
- Dark mode toggle for a better visual experience

## 🛠 Tech Stack

- **HTML**
- **CSS**
- **JavaScript**

## 📦 How to Install and Run the Project

### Prerequisites

- A web browser
- Internet connection (for live API calls)

### Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/where-in-the-world.git
   cd where-in-the-world
   ```

2. **Open the ```index.html``` file:**

 Simply open the ```index.html``` file in your browser. No server setup is required for this project since it's purely a client-side application.

Alternatively, you can use a local development server like ```Live Server``` in VSCode.

3. **Enjoy the app!**

You should now be able to view all countries with their details, search for specific countries, and filter by region.

## 📋 Project Structure

```
├── index.html      # The main HTML file
├── styles.css      # The CSS file for styling the app
└── script.js       # JavaScript file containing all the logic for fetching and displaying countries
```

## File Breakdown

- **index.html**: Contains the basic structure of the web app, including the search bar, region filter, and container to display the countries.

- **styles.css**: Styles the web app and includes the dark mode styles.

- **script.js**: Handles all the logic for fetching country data, rendering it dynamically, and implementing search, filter, and dark mode functionalities.

## 📡 API Information

This project fetches data from the REST Countries API, which provides information about countries around the world, including:

- Country name

- Population

- Region

- Capital

- Flag

API Endpoint: ```https://restcountries.com/v3.1/all```

## 🌑 Dark Mode

The app includes a toggle switch for dark mode. Users can switch between light and dark themes to enhance their visual experience.

## 🐛 Known Issues / Bugs

- Some countries may not have a capital listed, and the app will show N/A for such cases.

- Since the app depends on an external API, a slow or unavailable API can cause issues with loading country data.

## 🧑‍💻 Future Improvements

- **Pagination**: Adding pagination for better performance when displaying a large number of countries.

- **Offline Mode**: Implementing a fallback mechanism if the API fails to load, possibly using local storage to cache the data.

- **Advanced Filters**: Implementing more advanced filters, such as by population range, language, or currency.

## 📄 License

This project is open-source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page for any open issues or submit a pull request.
