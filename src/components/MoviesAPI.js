import React from "react";

const MoviesAPI = (props) => {
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
                movie.poster_path
              }
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <p className="card-text">{truncateString(movie.overview, 100)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <h4>
                  <span
                    style={{ backgroundColor: "yellow" }}
                    className="badge  text-dark "
                  >
                    <h6>Popularity</h6>
                    {movie.popularity}
                  </span>
                </h4>
                <h4>
                  <span
                    style={{ backgroundColor: "purple" }}
                    className="badge rounded-pill "
                  >
                    <h5>Vote Count </h5> {movie.vote_count}
                  </span>
                </h4>
                <h2>
                  <span
                    style={{ backgroundColor: "green" }}
                    className="badge rounded-pill "
                  >
                    {movie.vote_average}
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

export default MoviesAPI;
