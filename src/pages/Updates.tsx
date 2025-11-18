import './Updates.css';
import Header from '../components/header';
import { AdvancedVideo } from '@cloudinary/react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { getOptimizedImage } from '../config/cloudinary';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dett31xav'
  }
});

function Updates() {
  const video = cld.video('yeyeye_tpxz1b').format('auto').quality('auto');
  return (
    <>
      <Header />
      <section className="updates-page">
        <div className="updates-container">
          <AdvancedImage cldImg={getOptimizedImage('logo')} alt="Navarupa Logo" className="updates-logo" />
          <h1>Updates</h1>
          
          <div className="video-container">
            <AdvancedVideo 
              cldVid={video} 
              autoPlay 
              muted 
              loop 
              controls 
              className="updates-video"
            />
          </div>
          
          <div className="video-description">
            <p>Stay tuned for the latest updates about Chiguru 2025!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
