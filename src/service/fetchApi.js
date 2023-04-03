// import axios from 'axios';


// const API_KEY = "519a61b17f14d9bd9145ca2f15d0094c";
// const BASE_URL = "https://api.themoviedb.org/3";

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '519a61b17f14d9bd9145ca2f15d0094c',
};

export const movieTrendingGet = async () => {
  const { data } = await axios.get(`/trending/all/day`);
  console.log(data);
  return data;
};

export const movieSearch = async searchQuery => {
  const { data } = await axios.get(`
/search/movie?language=en-US&page=1&include_adult=false&query=${searchQuery}`);

  return data;
};

export const movieDetailsGet = async id => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`);

  return data;
};

export const castGet = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);

  return data;
};

export const reviewsGet = async id => {
    const { data } = await axios.get(
        `/movie/${id}/reviews?language=en-US&page=1 `
    );

    return data;
}; 