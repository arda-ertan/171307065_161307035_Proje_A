import React from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import axios from "axios";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MysqlDatas from "./MysqlDatas";
import PostgreSqlDatas from "./PostgreSqlDatas";
import PostgreAdd from "./PostgreAdd";
import EditPostgre from "./EditPostgre";

class App extends React.Component {
  state = {
    movies: [],
    searchText: "",
  };

  /*async componentDidMount() {
    const URL = "http://localhost:8080/nowPlaying/get";
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  }*/
  /* deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);y

    //this.setState({ movies: newMovieList });
    this.setState((state) => ({ movies: newMovieList }));
  }; */

  //FETCH API
  /*deleteMovie = async (movie) => {
    const URL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(URL, { method: "DELETE" });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({ movies: newMovieList }));
  };*/
  // axios way
  async componentDidMount() {
    const response = await axios.get("http://localhost:8080/nowPlaying/get");

    this.setState({ movies: response.data });
  }

  /*  async componentDidUpdate() {
    const response = await axios.get("http://localhost:3002/movies");
    //console.log(response);
    this.setState({ movies: response.data });
  } */

  // delete
  deleteMovie = async (movie) => {
    const URL = `http://localhost:8080/nowPlaying/deleteByID/${movie.id}`;
    await axios.delete(URL);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));
    console.log("The movie has been deleted !");
  };

  //Add movie mysql
  addMovie = async (movie) => {
    const URL = `http://localhost:8080/nowPlaying/add`;
    const tempobj = {
      ...movie,
      voteAverage: parseFloat(movie.voteAverage),
    };
    await axios.post(URL, tempobj);
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

  //edit movie
  editMovie = async (id, updatedMovie) => {
    const URL = `http://localhost:8080/nowPlaying/edit/${id}`;
    await axios.put(URL, updatedMovie);
    console.log("The movie has been edited !");
  };

  //Postgre edit movie
  postgreEdit = async (id, updatedMovie) => {
    const URL = `http://localhost:8080/topRated/edit/${id}`;
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
      <Router>
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
                    url="edit"
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
              path="/PostgreAdd"
              element={
                <div>
                  <PostgreAdd
                    onPostgreAdd={(movie) => {
                      this.postgreAdd(movie);
                    }}
                  />
                </div>
              }
            />
            <Route
              path="/PostgreEdit/:id"
              element={
                <EditPostgre
                  onPostgreEdit={(id, movie) => {
                    this.postgreEdit(id, movie);
                  }}
                  url="PostgreEdit"
                  data={this.state.movies}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <EditMovie
                  onEditMovie={(id, movie) => {
                    this.editMovie(id, movie);
                  }}
                  url="edit"
                  data={this.state.movies}
                />
              }
            />
            <Route path="/toprated/*" element={<TopRated />} />
            <Route path="/nowplaying/*" element={<NowPlaying />} />
            <Route path="/mysql/*" element={<MysqlDatas />} />
            <Route path="/postgresql/*" element={<PostgreSqlDatas />} />

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
      </Router>
    );
  }
}

export default App;
