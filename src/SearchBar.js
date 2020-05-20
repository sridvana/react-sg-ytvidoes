import React from 'react';

class SearchBar extends React.Component {

  state = {term: 'Top 10 Youtube Videos'}

  componentDidMount() {
    this.onFormSubmit(new Event('submit'))
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({term: event.target.value})
    console.log(this.state)
  }

  onFormSubmit = (event) => {
    console.log("Submitted");
    event.preventDefault();
    this.props.onFormSubmitProp(this.state.term);
  }

  render() {
    return (
      <div className="ui search-bar segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label htmlFor="search-term">Search YT videos</label>
            <input 
              type="text" 
              name="search-term" 
              placeholder="Enter Text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;