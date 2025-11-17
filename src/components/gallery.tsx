import './gallery.css';
import img1 from '../gallery/1.jpg';
import img2 from '../gallery/2.jpg';
import img3 from '../gallery/3.png';

const galleryImages = [
  { src: img1, alt: 'Gallery Image 1' },
  { src: img2, alt: 'Gallery Image 2' },
  { src: img3, alt: 'Gallery Image 3' },
];

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="container-items">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className="item-image" 
            aria-label={image.alt}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;