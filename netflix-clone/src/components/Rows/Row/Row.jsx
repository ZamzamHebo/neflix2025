import React from "react";
import axios from "../../utils/axios";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [fetchUrl]);
  const handleClick = (movie) => {
      if (trailerUrl) {
          setTrailerUrl("")
      } else {
          movieTrailer(movie?.name || "")
          .then((url) => {
            console.log(url)
              const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                console.log(urlParams.get("v"))
              setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
  }
  console.log(movies)
  const opts = {
      height: "390",
      width: "100%",
      playerVars: {
          autoplay: 1,
      },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
