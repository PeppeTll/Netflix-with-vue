import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable(
  {
    filter: '',
    urlBase: 'https://api.themoviedb.org/3',
    apiKey: '2d3bc2d11414211b6028e8f26ad4bd6e',
    searchMovie: '/search/movie/',
    singleMovie: '/movie/',
    searchTV: '/search/tv/',
    movie: [],
    series: [],
    singleMovieObject: {},
  }
)

export default state

export function apiCall() {

  axios.get(`${state.urlBase}${state.searchMovie}`, {
    params: {
      api_key: state.apiKey,
      query: state.filter,
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

export function seriesCall() {
  axios.get(`${state.urlBase}${state.searchTV}`, {
    params: {
      api_key: state.apiKey,
      query: state.filter,
    },
  })
    .then((res) => {
      // console.log(res.data);
      state.series = res.data.results;
      // console.log(state.movie);
    })
    .catch((error) => {
      console.log(error.response);
    });
}





export function fetchMovie() {
  function randomID(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  axios.get(
    `${state.urlBase}${state.singleMovie}${randomID(200, 900000)}`,
    {
      params: {
        api_key: state.apiKey
      },
    }
  )
    .then((res) => {
      // console.log(res.status, res.data, res);
      if (res.data.backdrop_path === null) {
        return fetchMovie();
      }
      state.singleMovieObject = res.data;
      console.log(state.singleMovieObject);
    })
    .catch((error) => {
      if (error.data === undefined) {
        return fetchMovie();
      }
      console.warn(error.data);
    });
}