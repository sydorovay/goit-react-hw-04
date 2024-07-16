import { useState } from 'react'
import css from './App.module.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';



const App = () => {
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (query) => {
    // Імітуємо пошук зображень за допомогою API або іншого методу
    const fetchedImages = [
      { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
      { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
    ];
    setImages(fetchedImages);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
     <Loader />
    </div>
  );
};

export default App;