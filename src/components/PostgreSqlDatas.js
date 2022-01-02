import React from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import axios from "axios";
import AddMovie from "./AddMovie";

import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";
import { Routes, Route } from "react-router-dom";
import EditPostgre from "./EditPostgre";

class PostgreSqlDatas extends React.Component {
  state = {
    movies: [],
    searchText: "",
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:8080/topRated/get");
    //console.log(response);
    this.setState({ movies: response.data });
  }

  // delete
  deleteMovie = async (movie) => {
    const URL = `http://localhost:8080/topRated/delete/${movie.id}`;
    await axios.delete(URL);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));
    console.log("The movie has been deleted !");
  };

  //Add movie
  addMovie = async (movie) => {
    const URL = `http://localhost:3002/movies/`;
    await axios.post(URL, movie);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
    console.log("The movie has been added !");
  };

  //postgre add
  postgreAdd = async (movie) => {
    const URL = `http://localhost:8080/topRated/add`;
    const tempobj = {
      ...movie,
      voteAverage: parseFloat(movie.voteAverage),
    };
    await axios.post(URL, tempobj);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
    console.log("The movie has been added !");
  };

  //Postgre edit movie
  postgreEdit = async (id, updatedMovie) => {
    const URL = `http://localhost:8080/topRated/edit/${id}`;
    await axios.put(URL, updatedMovie);
    console.log("The movie has been edited !");
  };
  //edit movie
  editMovie = async (id, updatedMovie) => {
    const URL = `http://localhost:3002/movies/${id}`;
    await axios.put(URL, updatedMovie);
    console.log("The movie has been edited !");
  };

  searchMovie = (event) => {
    //console.log(event.target.value);

    this.setState({ searchText: event.target.value });
  };
  getMovieID = (event) => {};

  render() {
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.originalTitle
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) !== -1
        );
      }) //id'ye göre sıralama
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
                <Movies
                  url="PostgreEdit"
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
            path="/:PostgreEdit/:id"
            element={
              <EditPostgre
                onPostgreEdit={(id, movie) => {
                  this.postgreEdit(id, movie);
                }}
                data={this.state.movies}
              />
            }
          />
          <Route path="/toprated/*" element={<TopRated />} />
          <Route path="/nowplaying/*" element={<NowPlaying />} />

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

export default PostgreSqlDatas;
