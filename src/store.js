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
    maxIndexSeries: 7,
    minIndexSeries: 0,
    maxIndexMovie: 7,
    minIndexMovie: 0,
  }
)

export default state

export function nextSlideSeries(list) {
  state.minIndexSeries += 4
  state.maxIndexSeries += 4
  if (state.maxIndexSeries > list.length) {
    state.maxIndexSeries = list.length
    state.minIndexSeries = list.length - 7
    console.log('arriva')
  }
}

export function nextSlideMovie(list) {
  state.minIndexMovie += 4
  state.maxIndexMovie += 4
  if (state.maxIndexMovie >= list.length) {
    state.maxIndexMovie = list.length
    state.minIndexMovie = list.length - 4
    console.log(state.minIndexMovie, state.maxIndexMovie)
    console.log('arriva')
  }
  console.log(state.minIndexMovie, state.maxIndexMovie)
}

export function prevSlideSeries(list) {
if (state.minIndexSeries === list.length - 4) {
    state.maxIndexSeries = list.length 
    state.minIndexSeries = list.length - 6
  } else {
    state.minIndexSeries -= 1
    state.maxIndexSeries -= 1
  }
  if (state.minIndexSeries <= 0) {
    state.maxIndexSeries = 7
    state.minIndexSeries = 0
  }
}

export function prevSlideMovie(list) {
  if (state.minIndexMovie === list.length - 4) {
    state.maxIndexMovie = list.length 
    state.minIndexMovie = list.length - 6
  } else {
    state.minIndexMovie -= 1
    state.maxIndexMovie -= 1
  }
  if (state.minIndexMovie <= 0) {
    state.maxIndexMovie = 7
    state.minIndexMovie = 0
    console.log(state.minIndexMovie, state.maxIndexMovie)
  }
  console.log(state.minIndexMovie, state.maxIndexMovie)
}

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
      if (res.data.backdrop_path === null || res.data.adult) {
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

export function getImage(lista) {
  if (lista.poster_path === null) {
    return require("../src/assets/img/404.jpg")
  } else {
    return `https://image.tmdb.org/t/p/w342${lista.poster_path}`
  }
}