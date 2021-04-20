import React from 'react';

import './search-bar.style.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-input">
                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <input type="checkbox"/> Only show produxts in shock
            </div>
        </div>
    );
}

export default SearchBar;