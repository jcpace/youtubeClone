import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyCrxaj2bzdJQ-44FdAjZzTUygCTNLfYNM0'
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('.container'));

