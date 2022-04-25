import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className="search">
      <form>
        <div className="search-icon">
          <input type="search" placeholder="Search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>
    </div>
  );
}

export default Search