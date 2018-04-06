import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    const bookToDisplay = this.props.book ? this.props.book : this.props.allBooks[0];

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {bookToDisplay.title}</div>
        <div>Pages: {bookToDisplay.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
    allBooks: state.books
  }
}
export default connect(mapStateToProps)(BookDetail);
