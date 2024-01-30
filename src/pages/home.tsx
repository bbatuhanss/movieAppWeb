/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { fetchData } from "../api/api";
import MovieCard from "../components/card";
import tmdbApi,{ category, movieType, } from '../api/tmdbApi';

const home = () => {
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    particlesLoaded("SpiderMan");
  }, []);

  const particlesLoaded = async (value) => {
    let response = {};
    const params = {page: 1}
    try {
      response = await tmdbApi.getMoviesList(movieType.popular, {params});
      setMovies(response["results"]);
    } catch (error) {
      console.error(error);
    }
  };
  const search = async (value) => {
    let response = {};
    const params = {
      query: value,
    };
    try {
      response = await tmdbApi.search(category.movie, {params});
      setMovies(response["results"]);
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <div>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }} 
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
          alt="search icon"
          onClick={() => search(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default home;
