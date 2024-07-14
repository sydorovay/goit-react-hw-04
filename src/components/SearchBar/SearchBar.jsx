import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar({ onSubmit }) {

  const [query, setQuery] = useState('');

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange} />
        <button type="submit">Search</button>
        <ToastContainer />
      </form>
    </header>
  );
}
export default SearchBar
