import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  render() {
    // console.log('book-list')
    // console.log(this.props.asdf)
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map((book) =>  {
      return (
        <li
          key={book.title}
          onClick={this.props.selectBook.bind(this, book)} // currying
          className="list-group-item">{book.title}
        </li>
      );
    })
  }
}

function mapStateToProps(state) {
  // Whatever is returned here will show up as props inside of BookList
  // return {
  //   asdf: '123'
  // }

  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our
  // reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote the component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
