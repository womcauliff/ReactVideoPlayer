import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    console.log(event.target.value);
    this.setState({
      term : e.target.value
    });
    this.props.onSearchTermChange(e.target.value);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;