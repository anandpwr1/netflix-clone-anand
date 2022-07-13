import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // gives list of movies data
      const request = await axios.get(requests.fetchNetflixOriginals);

      // now we want only one movie 
      // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);

      setMovie((request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]));
      return request;
    }
    fetchData();

  }, [])
  // function to truncate the text 
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movie);
  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/*  header will have a background image */}

      <div className="banner_contents">

        {/* title */}
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        {/*div>  two buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play
          </button>

          <button className="banner__button">My List

          </button>

        </div>
        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner
