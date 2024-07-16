import { Audio } from 'react-loader-spinner';
import { useState, useEffect} from 'react';
import css from './Loader.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Loader = () => {
const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/images')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

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