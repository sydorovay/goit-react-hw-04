import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} className="modal">
      <div className="modal-content">
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description}</p>
        <p>Author: {image.user.name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;