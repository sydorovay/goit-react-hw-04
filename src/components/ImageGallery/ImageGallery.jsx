  import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.imageGallery}>
    {images.map((image, index) => (
      <li className={css.imageGalleryItem} key={index} onClick={() => onImageClick(image)}>
        <div>
          <img className={css.imageGalleryImg} src={image.urls.small} alt={image.alt_description} />
        </div>
      </li>
    ))}
  </ul>
);

export default ImageGallery;