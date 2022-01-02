import React from "react";
import serialize from "form-serialize";
import { Link } from "react-router-dom";

class AddMovie extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    //girdi olan verileri almak için formserialize indirdik
    const newMovie = serialize(event.target, { hash: true });
    console.log(newMovie);

    this.props.onAddMovie(newMovie);
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="form-row" style={{ display: "flex" }}>
            <div className="form-group col-md-9">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="originalTitle"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="voteAverage" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="posterPath" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-danger btn-block col-md-12">
            <Link to="/">Add Movie</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
