import React from "react";
import "./RowList.css";
import Row from "../Row/Row";
import requests from "../../utils/requests";
function RowList() {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />,
      <Row title="TV Shows" fetchUrl={requests.fetchTvShows}  />
    </>
  );
}

export default RowList;
