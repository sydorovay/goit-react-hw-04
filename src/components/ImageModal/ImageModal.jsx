import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={onClose}>
        &times;
      </button>
      {image && <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />}
    </Modal>
  );
};

export default ImageModal;