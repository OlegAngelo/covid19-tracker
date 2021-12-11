import axios from "axios";

const CovidApi = {
  fetchCountriesData: async () => {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );

    return data;
  },
};

export default CovidApi;
