import React, { useEffect, useState } from "react";

import { FormControl, Select, MenuItem } from "@mui/material";

import CovidApi from "../apis/CovidApi";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CovidApi.fetchCountriesData().then((response) => {
      const countries = response.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      setCountries(countries);
    });
  }, []);

  // const renderedCountryList = (countries) => {
  //   countries.map((country) => {
  //     return <MenuItem value={country.value}>{country.name}</MenuItem>;
  //   });
  // };

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select variant="outlined" value="dropdown">
            {/* {renderedCountryList} */}
            {countries.map((country) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default App;
