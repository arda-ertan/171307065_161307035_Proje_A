import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditPostgre = ({ onPostgreEdit }) => {
  const [state, setState] = useState(() => ({
    originalTitle: "",
    voteAverage: "",
    posterPath: "",
    overview: "",
    id: "",
  }));

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:8080/topRated/edit/${id}`
      );

      console.log(response.data);
      const movie = response.data;
      setState(
        (state) =>
          (state = {
            originalTitle: movie.originalTitle,
            voteAverage: movie.voteAverage,
            posterPath: movie.posterPath,
            overview: movie.overview,
            id: movie.id,
          })
      );
    }
    fetchData();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { originalTitle, voteAverage, overview, posterPath, id } = state;
    const updatedMovie = {
      originalTitle,
      voteAverage,
      overview,
      posterPath,
      id,
    };
    onPostgreEdit(id, updatedMovie);
  };

  const inputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input
          className="form-control"
          id="disabledInput"
          type="text"
          placeholder="Edit PostgreData The Form To Update A Movie.."
          disabled
        />
        <div className="form-row" style={{ display: "flex" }}>
          <div className="form-group col-md-9">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              name="originalTitle"
              value={state.originalTitle}
              onChange={inputChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputRating">Rating</label>
            <input
              type="text"
              className="form-control"
              name="voteAverage"
              value={state.voteAverage}
              onChange={inputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="posterPath"
              value={state.posterPath}
              onChange={inputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
              value={state.overview}
              onChange={inputChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-danger btn-block col-md-12">
          <Link to="/">Edit Movie</Link>
        </button>
      </form>
    </div>
  );
};

export default EditPostgre;
