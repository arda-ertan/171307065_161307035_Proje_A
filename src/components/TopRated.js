import React from "react";
import SearchBar from "./SearchBar";
import MoviesAPI from "./MoviesAPI";
import axios from "axios";
import AddMovie from "./AddMovie";

import { Routes, Route } from "react-router-dom";

class TopRated extends React.Component {
  state = {
    movies: [],
    searchText: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d4396629dc227d594ed4f3b251c2f851&language=en-US&page=1"
    );

    this.setState({ movies: response.data.results });
  }

  searchMovie = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.original_title
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) !== -1
        );
      })
      .sort((x, y) => {
        return x.id < y.id ? 1 : x.id > y.id ? -1 : 0;
      });

    return (
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>
                <MoviesAPI
                  movies={filteredMovies}
                  deleteMovieProp={this.deleteMovie}
                />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <div>
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                  }}
                />
              </div>
            }
          />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default TopRated;
