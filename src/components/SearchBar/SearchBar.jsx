import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className='header'>
      <form onSubmit={handleSubmit} className = {css.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className="searchInput"
        />
        <button type="submit" className="css.searchButton">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;