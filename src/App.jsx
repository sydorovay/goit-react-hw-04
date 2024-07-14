import { useState } from 'react'
import css from './App.module.css'
import SearchBar from './components/SearchBar/SearchBar'
import { Toaster, toast } from 'react-hot-toast';

function App() {
  
return (
    <div className="App">
      <Toaster />
      <SearchBar />
    </div>
  );
}




export default App
