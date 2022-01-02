import React from "react";
import { Link } from "react-router-dom";
const Movies = (props) => {
  /* function handleClick(e) {
    console.log(e.pageY);
  }*/

  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-4" key={i}>
          <div style={{ borderRadius: "25px" }} className="card mb-4 shadow-sm">
            <img
              style={{ borderRadius: "25px" }}
              src={
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2` +
                movie.posterPath
              }
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.originalTitle}</h5>
              <p className="card-text">{truncateString(movie.overview, 100)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  //eger handleClick() yazarsak fonksiyon her return oldugunda handle fonksiyonuda çalışır
                  onClick={(e) => props.deleteMovieProp(movie)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <Link
                  to={`/${props.url}/${movie.id}`}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  Edit
                </Link>
                <h2>
                  <span className="badge rounded-pill bg-primary ">
                    {movie.voteAverage}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
