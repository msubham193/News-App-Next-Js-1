import axios from "axios";

const API_KEY = process.env.API_KEY;

export const fetchHeadlines = async (country = "in") => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=314867c0416543f58ae17030f150c135`
    );

    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategory = async (category) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=314867c0416543f58ae17030f150c135`
    );

    return(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchEverything = async (query) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=314867c0416543f58ae17030f150c135`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
