import { Audio } from 'react-loader-spinner';
import { useState, useEffect} from 'react';
import css from './Loader.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Loader = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Сторінка для завантаження додаткових зображень

  useEffect(() => {
    fetchImages();
  }, []); // Викликаємо при першому завантаженні

  const fetchImages = () => {
    setLoading(true);
    fetch(`https://api.example.com/images?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setImages([...images, ...data]); // Додаємо нові зображення до існуючого масиву
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage(page + 1); // Збільшуємо номер сторінки для завантаження на 1
    fetchImages(); // Викликаємо функцію для завантаження наступної порції зображень
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index + 1}`} />
        ))}
      </div>
      {images.length > 0 && ( // Показуємо кнопку лише якщо є завантажені зображення
        <div className="load-more">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
      <div className="loader">
        {loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        )}
      </div>
    </div>
  );
};

export default Loader;