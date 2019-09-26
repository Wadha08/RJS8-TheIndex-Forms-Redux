import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };
  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.author, this.props.closeModal);
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select name="color" onChange={this.textChangeHandler}>
              <option selected>Choose a color...</option>
              <option value="black">Black</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, author, closeModal) =>
      dispatch(actionCreators.postBook(book, author, closeModal))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(BookForm);
