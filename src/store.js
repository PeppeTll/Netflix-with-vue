import Vue from 'vue'

const state = Vue.observable (
  {
    filter: '',
    urlBase: 'https://api.themoviedb.org/3',
    apiKey: '2d3bc2d11414211b6028e8f26ad4bd6e',
    searchMovie: '/search/movie/',
    searchTV: '/search/tv/',
    movie: []
  }
)

export default state