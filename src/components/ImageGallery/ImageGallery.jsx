import ImageCard from '../ImageCard/ImageCard';

function ImageGalleryItem({ image }) {
  return (
    <div>
      <ImageCard />
    </div>
  );
}


// Компонент ImageGallery
const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;