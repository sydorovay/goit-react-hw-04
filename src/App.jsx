import { useState } from 'react'
import css from './App.module.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery';


function App() {
  
return (
    <div className="App">
    <SearchBar />
    <ImageGallery />
    </div>
  );
}




export default App
