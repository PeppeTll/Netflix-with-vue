import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable (
  {
    filter: '',
    urlBase: 'https://api.themoviedb.org/3',
    apiKey: '2d3bc2d11414211b6028e8f26ad4bd6e',
    searchMovie: '/search/movie/',
    singleMovie: '/movie/',
    searchTV: '/search/tv/',
    movie: [],
  }
)

export default state

export function apiCall(filter) {
      return axios
        .get(`${state.urlBase}${state.searchMovie}`, {
          params: {
            api_key: state.apiKey,
            query: filter,
          },
        })
        .then((res) => {
          // console.log(res.data);
          state.movie = res.data.results;
          // console.log(state.movie);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }