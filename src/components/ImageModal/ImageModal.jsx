import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeButton}>Close</button>
        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;