import {API_KEY, API_HOST, API_LANGUAJE} from '../utils/constants';
import React, {useEffect, useState} from 'react';

export const getMoviesByGenreApi = (genreId) => {
  const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&languaje=${API_LANGUAJE}`;
  return fetch(url).then((response) => {
    return response.json().then((result) => {
      console.log("RESULT", result)
      return result;
    });
  });
};

export const getMovieApi = (movieId) => {
  const url = `${API_HOST}/movie/${movieId}?api_key=${API_KEY}&languaje=${API_LANGUAJE}`;
  return fetch(url).then((response) => {
    return response.json().then((result) => {
      return result;
    });
  });
};

//page = 1 es un valor por defecto en caso de que page llege vacio
export const getNewsMoviesApi = async (page = 1) => {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&languaje=${API_LANGUAJE}&page=${page}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const getGenresMovies = () => {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&languaje=${API_LANGUAJE}`;
  return fetch(url).then((response) => {
    return response.json().then((result) => {
      //result.genres = result.genres.splice(0, 2);
      return result;
    });
  });
};

export const getGenreMovie = (idsGenres) => {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&languaje=${API_LANGUAJE}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const arrayGenres = [];
      idsGenres.forEach((id) => {
        result.genres.forEach((item) => {
          if (item.id === id) {
            arrayGenres.push(item.name);
          }
        });
      });
      return arrayGenres;
    });
};

export const getMovieTrailers = (idMovie) => {
  const url = `${API_HOST}/movie/${idMovie}/videos?api_key=${API_KEY}&languaje=${API_LANGUAJE}`;
  return fetch(url).then((response) => {
    return response.json().then((result) => {
      return result;
    });
  });
}
