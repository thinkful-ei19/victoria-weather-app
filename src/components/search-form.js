import React from 'react';

function SearchForm (props) {
  return <form onSubmit={(e) => {
          e.preventDefault()
          let searchTerm = e.target.search.value;
          props.onClick(searchTerm)
        }}>

          <label htmlFor="search">Weather Search</label>&emsp;
          <input
              type="text"
              name="search"
              placeholder="Weekday"
          />
          <button>Submit</button>
        </form>
}

export default SearchForm
