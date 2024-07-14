import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');




  return (
    <header>
  <form>
    <input
      type="text"
      autoComplete="off"
      autoFocus ="on"
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
  )
}
export default SearchBar
