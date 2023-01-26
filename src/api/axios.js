// @ts-nocheck
import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    part: "snippet,id",
    regionCode: "US",
    maxResults: "100",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YO_APT_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

/**
 * @param {string} searchQuery searchQuery
 * @returns json data object
 */
export const getYoutubeAPTData = (searchQuery = "web development") => {
  const apiOptions = {
    ...options,
    params: {
      ...options.params,
      q: searchQuery,
    },
  };
  return axios.request(apiOptions);
};
