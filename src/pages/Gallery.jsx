import { useState, useEffect } from 'react';
import { Icon, Modal } from 'components';
import { getImages } from 'services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(null);

  useEffect(() => {
    async function loadImages() {
      setImages(await getImages());
    }

    loadImages();
  }, []);

  const closeModal = () => {
    setImageIndex(null);
  };

  const prevImage = () => {
    const prevImage = imageIndex === 0 ? 19 : imageIndex - 1;
    setImageIndex(prevImage);
  };

  const nextImg = () => {
    const nextImage = imageIndex === 19 ? 0 : imageIndex + 1;
    setImageIndex(nextImage);
  };

  return (
    <>
      <ul className="row row-cols-4">
        {images.map(({ id, webformatURL }, index) => (
          <li key={id} className="p-1 shadow-sm">
            <img
              src={webformatURL}
              alt={webformatURL}
              onClick={() => setImageIndex(index)}
            />
          </li>
        ))}
      </ul>
      {imageIndex !== null && (
        <Modal onClose={closeModal}>
          <Icon cn="left" icon="arrowLeft" w="28" h="68" onClick={prevImage} />
          <Icon cn="right" icon="arrowRight" w="28" h="68" onClick={nextImg} />
          <img src={images[imageIndex].largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
};

export default Gallery;
