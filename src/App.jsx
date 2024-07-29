import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

const ACCESS_KEY = '6ExAHC6-du7tOAIV_7CaxGFdf31Pi8h-TkJXD2D6UvY';
const BASE_URL = 'https://api.unsplash.com';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const fetchImages = async (query, page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;