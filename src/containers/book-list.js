import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {

  renderList() {
    console.log(this.props);

    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Anything returned from this function woill end up as props on the
// BookList Component
function mapStateToProps(state) {
  // whatever is returned from here will show up as props in BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all our reducers.
  // this.props.selectBook will call the action creator
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList to container from component, it needs to know about this new dispatch method
// selectBook, Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
