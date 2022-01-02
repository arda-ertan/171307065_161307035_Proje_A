import React from "react";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
  //Formun varsayılan davranışını kaldırdık
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} style={{ paddingTop: "25px" }}>
        <div className="form-row mb-5" style={{ display: "flex" }}>
          <div className="col-7">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
            />
          </div>
          <div style={{ display: "contents" }} className="col-2">
            <div className="btn-group">
              <Link to="/" type="button" className="btn btn-outline-danger">
                Main Menu
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/mysql" className="dropdown-item">
                    Mysql Datas
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/postgresql" className="dropdown-item">
                    PostgreSql Datas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="btn-group">
              <Link to="/add" type="button" className="btn btn-outline-success">
                Mysql Add Movie
              </Link>
              <button
                type="button"
                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/PostgreAdd" className="dropdown-item">
                    PostgreSql Add
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/nowPlaying" className="btn btn-outline-info">
              Now Playing
            </Link>
            <Link to="/toprated" className="btn btn-outline-warning">
              Top Rated
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
